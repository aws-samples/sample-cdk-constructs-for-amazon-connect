import * as fs from 'fs';
import * as path from 'path';
import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, CfnMapping, RemovalPolicy, Stack } from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import * as appintegrations from '../src/appintegrations';
import * as connect from '../src/connect';
import * as connect_cases from '../src/connect-cases';
import * as customer_profiles from '../src/customer-profiles';
import * as qconnect from '../src/qconnect';

export class TestConnectStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    const accountId = Stack.of(this).account;

    const key = new kms.Key(this, 'Key', {
      enableKeyRotation: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Create a Connect instance with CONNECT_MANAGED identity management
    const instance = new connect.Instance(this, 'TestConnectInstance', {
      attributes: {
        inboundCalls: true,
        outboundCalls: true,
        contactflowLogs: true,
      },
      identityManagementType: connect.IdentityManagementType.CONNECT_MANAGED,
      instanceAlias: `test-${accountId}`,
    });

    const accessLogBucket = this.createAccessLogBucket(key);
    const recordingBucket = this.createBucket('ConnectRecordingBucket', key, accessLogBucket);
    this.createStorageConfigs(instance, recordingBucket, key);

    const userSample = new UserSample(this, 'UserSample', { instance });

    const qconnectSrcBucket = this.createBucket('QconnectSrcBucket', key, accessLogBucket);
    const qconnectSample = new QconnectSample(this, 'QconnectSample', {
      instance,
      key,
      srcBucket: qconnectSrcBucket,
    });
    [{ locale: 'ja-JP' }].map(
      ({ locale }) =>
        new QconnectPromptSample(this, `QconnectPromptSample_${locale}`, {
          locale,
          assistant: qconnectSample.assistant,
        }),
    );

    new CasesSample(this, 'CasesSample', {
      instance,
      dependency: qconnectSample.lastIntegrationAssociation,
    });
    new CustomerProfilesSample(this, 'CustomerProfilesSample', { instance, key });

    [
      {
        langCode: 'en-US',
        ttsVoice: 'Danielle',
        waitMessage: 'Thank you for calling. Please wait while your call is being connected.',
      },
      {
        langCode: 'ja-JP',
        ttsVoice: 'Kazuha',
        waitMessage:
          'お電話ありがとうございます。ただいま大変電話が混み合っております。恐れ入りますが、このままお待ちいただくか、しばらく経ってからお掛け直しください。',
      },
    ].map(
      ({ langCode, ttsVoice, waitMessage }) =>
        new ImmediateInboundSample(this, `ImmediateInboundSample_${langCode}`, {
          instance,
          queue: userSample.queue,
          assistant: qconnectSample.assistant,
          langCode,
          ttsVoice,
          waitMessage,
        }),
    );
  }

  private createAccessLogBucket(key: kms.IKey) {
    return new s3.Bucket(this, 'ConnectLogBucket', {
      encryptionKey: key,
      enforceSSL: true,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }

  private createBucket(name: string, key: kms.IKey, accessLogBucket: s3.IBucket) {
    return new s3.Bucket(this, name, {
      serverAccessLogsBucket: accessLogBucket,
      serverAccessLogsPrefix: `access-logs/${name}`,
      encryptionKey: key,
      enforceSSL: true,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }

  private createStorageConfigs(instance: connect.Instance, recordingBucket: s3.IBucket, key: kms.IKey) {
    const resourceTypes: connect.S3ResourceType[] = [
      connect.ResourceType.CALL_RECORDINGS,
      connect.ResourceType.CHAT_TRANSCRIPTS,
      connect.ResourceType.SCHEDULED_REPORTS,
      connect.ResourceType.ATTACHMENTS,
      connect.ResourceType.CONTACT_EVALUATIONS,
      connect.ResourceType.SCREEN_RECORDINGS,
      connect.ResourceType.EMAIL_MESSAGES,
    ];
    // Create the storage configs sequentially rather than in parallel.
    // Each config is backed by a custom resource Lambda that calls the Connect API;
    // creating all of them at once triggers TooManyRequestsException (throttling).
    // Chaining CloudFormation dependencies forces one-at-a-time creation.
    let previous: ReturnType<typeof instance.addS3StorageConfig> | undefined;
    resourceTypes.forEach((resourceType) => {
      const config = instance.addS3StorageConfig(`Config-${resourceType}`, {
        resourceType,
        bucket: recordingBucket,
        bucketPrefix: `connect/${resourceType}`,
        key,
      });
      if (previous) {
        config.node.addDependency(previous);
      }
      previous = config;
    });
  }
}

interface UserSampleProps {
  readonly instance: connect.Instance;
}

class UserSample extends Construct {
  public readonly queue: connect.Queue;

  constructor(scope: Construct, id: string, props: UserSampleProps) {
    super(scope, id);

    const hoursOfOperation = new connect.HoursOfOperation(this, 'TestHoursOfOperation', {
      instance: props.instance,
      name: 'TestHoursOfOperation',
      description: 'TestHoursOfOperation',
      timeZone: 'UTC',
      config: [],
    });

    this.queue = new connect.Queue(this, 'TestQueue', {
      instance: props.instance,
      name: 'TestQueue',
      hoursOfOperation,
    });

    const securityProfile = new connect.SecurityProfile(this, 'TestSecurityProfile', {
      instance: props.instance,
      securityProfileName: 'TestSecurityProfile',
      permissions: [],
    });

    const routingProfile = new connect.RoutingProfile(this, 'TestRoutingProfile', {
      instance: props.instance,
      routingProfileName: 'TestRoutingProfile',
      description: 'TestRoutingProfile',
      mediaConcurrencies: [
        {
          channel: connect.ChannelType.VOICE,
          concurrency: 1,
        },
      ],
      defaultOutboundQueue: this.queue,
    });

    // Generate the user's password with Secrets Manager instead of hardcoding it,
    // so no plaintext credential is embedded in the synthesized CloudFormation template.
    // The generated password satisfies the Amazon Connect password policy
    // (8-64 chars, at least one uppercase, one lowercase, and one number).
    const userPasswordSecret = new secretsmanager.Secret(this, 'UserPasswordSecret', {
      generateSecretString: {
        passwordLength: 20,
        excludePunctuation: true,
        requireEachIncludedType: true,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });
    NagSuppressions.addResourceSuppressions(userPasswordSecret, [
      {
        id: 'AwsSolutions-SMG4',
        reason: 'This is a sample/integration-test-only credential. Automatic rotation is not required.',
      },
    ]);

    /*const user =*/ new connect.User(this, 'User-test', {
      instance: props.instance,
      username: 'test',
      // The password is resolved at deploy time via a Secrets Manager dynamic reference,
      // so the template only contains a `{{resolve:secretsmanager:...}}` token.
      password: userPasswordSecret.secretValue.unsafeUnwrap(),
      identityInfo: {
        firstName: 'Test',
        lastName: 'Test',
        email: 'test@example.com',
      },
      phoneConfig: {
        phoneType: connect.PhoneType.SOFT_PHONE,
      },
      routingProfile,
      securityProfiles: [securityProfile],
    });
  }
}

interface QconnectSampleProps {
  readonly instance: connect.Instance;
  readonly key: kms.IKey;
  readonly srcBucket: s3.IBucket;
}

class QconnectSample extends Construct {
  public readonly assistant: qconnect.Assistant;
  /**
   * The last Connect integration association created by this construct.
   * Exposed so that other integration associations can be chained after it,
   * serializing the Connect CreateIntegrationAssociation calls to avoid throttling.
   */
  public readonly lastIntegrationAssociation: Construct;

  constructor(scope: Construct, id: string, props: QconnectSampleProps) {
    super(scope, id);

    this.assistant = new qconnect.Assistant(this, 'TestAssistant', {
      name: 'TestAssistant',
    });
    const assistantAssociation = this.assistant.addIntegrationAssociation('TestAssistantAssociation', {
      instance: props.instance,
    });

    const INTEGRATION_NAME = 'TestKnowledgeBase';
    const dataIntegration = new appintegrations.DataIntegration(this, 'TestDataIntegration', {
      // Note: Use the same name with the knowledge base's name
      name: INTEGRATION_NAME,
      sourceUri: props.srcBucket.s3UrlForObject(),
      key: props.key,
    });

    const knowledgeBase = new qconnect.KnowledgeBase(this, 'TestKnowledgeBase', {
      // Note: Use the same name with the data integration's name
      name: INTEGRATION_NAME,
      knowledgeBaseType: qconnect.KnowledgeBaseType.EXTERNAL,
      encryptionKey: props.key,
      dataIntegration,
    });
    const knowledgeBaseAssociation = knowledgeBase.addIntegrationAssociation(
      'TestKnowledgeBaseIntegrationAssociation',
      { instance: props.instance },
    );
    // Serialize the integration associations (each is a custom resource calling the
    // Connect API) to avoid TooManyRequestsException from parallel creation.
    knowledgeBaseAssociation.node.addDependency(assistantAssociation);
    this.lastIntegrationAssociation = knowledgeBaseAssociation;

    this.assistant.addKnowledgeBaseAssociation('TestKnowledgeBaseAssistantAssociation', { knowledgeBase });
  }
}

interface QconnectPromptSampleProps {
  readonly assistant: qconnect.Assistant;
  readonly locale: string;
}

interface QconnectPromptOptions {
  readonly apiFormat: qconnect.AIPromptApiFormat;
  readonly model: QconnectModel;
  readonly type: qconnect.AIPromptType;
}

type QconnectAgentOptions = Omit<qconnect.AIAgentProps, 'name' | 'assistant'>;

class QconnectPromptSample extends Construct {
  constructor(scope: Construct, id: string, props: QconnectPromptSampleProps) {
    super(scope, id);

    const locale = props.locale.replace('-', '_');

    const queryReformulationPrompt = this.addPrompt(props, {
      apiFormat: qconnect.AIPromptApiFormat.MESSAGES,
      model: QconnectModel.NOVA_LITE,
      type: qconnect.AIPromptType.QUERY_REFORMULATION,
    });
    const intentLabelingGenerationPrompt = this.addPrompt(props, {
      apiFormat: qconnect.AIPromptApiFormat.MESSAGES,
      model: QconnectModel.NOVA_LITE,
      type: qconnect.AIPromptType.INTENT_LABELING_GENERATION,
    });
    const answerGenerationPrompt = this.addPrompt(props, {
      apiFormat: qconnect.AIPromptApiFormat.TEXT_COMPLETIONS,
      model: QconnectModel.CLAUDE_SONNET,
      type: qconnect.AIPromptType.ANSWER_GENERATION,
    });

    /*const recommendationAgent =*/ this.addAgent(props, {
      type: qconnect.AIAgentType.ANSWER_RECOMMENDATION,
      answerRecommendationConfiguration: {
        answerGenerationPrompt: answerGenerationPrompt.promptVersion,
        queryReformulationPrompt: queryReformulationPrompt.promptVersion,
        intentLabelingGenerationPrompt: intentLabelingGenerationPrompt.promptVersion,
        locale,
      },
    });
    /*const manualSearchAgent =*/ this.addAgent(props, {
      type: qconnect.AIAgentType.MANUAL_SEARCH,
      manualSearchConfiguration: {
        answerGenerationPrompt: answerGenerationPrompt.promptVersion,
        locale,
      },
    });

    const selfServiceAnswerGenerationPrompt = this.addPrompt(props, {
      apiFormat: qconnect.AIPromptApiFormat.TEXT_COMPLETIONS,
      model: QconnectModel.NOVA_PRO,
      type: qconnect.AIPromptType.SELF_SERVICE_ANSWER_GENERATION,
    });

    const selfServicePreProcessingPrompt = this.addPrompt(props, {
      apiFormat: qconnect.AIPromptApiFormat.MESSAGES,
      model: QconnectModel.CLAUDE_HAIKU,
      type: qconnect.AIPromptType.SELF_SERVICE_PRE_PROCESSING,
    });

    /*const selfServiceAgent =*/ this.addAgent(props, {
      type: qconnect.AIAgentType.SELF_SERVICE,
      selfServiceConfiguration: {
        selfServiceAnswerGenerationPrompt: selfServiceAnswerGenerationPrompt.promptVersion,
        selfServicePreProcessingPrompt: selfServicePreProcessingPrompt.promptVersion,
      },
    });
  }

  private addPrompt(props: QconnectPromptSampleProps, options: QconnectPromptOptions) {
    const prompt = new qconnect.AIPrompt(this, `Prompt-${options.type}`, {
      assistant: props.assistant,
      apiFormat: options.apiFormat,
      // TODO: Remove this cast
      modelId: QconnectModelTable.getModelId(this, options.model) as qconnect.AIPromptModelId,
      type: options.type,
      templateType: qconnect.AIPromptTemplateType.TEXT,
      templateText: fs.readFileSync(path.join(__dirname, 'ai-prompts', props.locale, `${options.type}.yaml`), 'utf-8'),
    });
    const promptVersion = new qconnect.AIPromptVersion(this, `PromptVersion-${options.type}`, {
      prompt,
      assistant: props.assistant,
    });
    return { prompt, promptVersion };
  }

  private addAgent(props: QconnectPromptSampleProps, options: QconnectAgentOptions) {
    const agent = new qconnect.AIAgent(this, `Agent-${options.type}`, {
      name: `Agent-${options.type}-${props.locale}`,
      assistant: props.assistant,
      ...options,
    });
    const agentVersion = new qconnect.AIAgentVersion(this, `AgentVersion-${options.type}`, {
      aiAgent: agent,
      assistant: props.assistant,
    });
    return { agent, agentVersion };
  }
}

enum QconnectModel {
  NOVA_LITE = 'NovaLite',
  NOVA_PRO = 'NovaPro',
  CLAUDE_HAIKU = 'ClaudeHaiku',
  CLAUDE_SONNET = 'ClaudeSonnet',
}

class QconnectModelTable extends Construct {
  public static getModelId(scope: Construct, model: QconnectModel) {
    const region = Stack.of(scope).region;
    return QconnectModelTable.getInstance(scope).mapping.findInMap(region, model);
  }

  public static getInstance(scope: Construct): QconnectModelTable {
    const stack = Stack.of(scope);
    const uniqueId = 'QconnectModelTable';
    return (stack.node.tryFindChild(uniqueId) as QconnectModelTable) ?? new QconnectModelTable(stack, uniqueId);
  }

  private mapping: CfnMapping;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.mapping = new CfnMapping(this, 'ModelTable', {
      mapping: {
        'us-east-1': {
          [QconnectModel.NOVA_LITE]: 'us.amazon.nova-lite-v1:0',
          [QconnectModel.NOVA_PRO]: 'us.amazon.nova-pro-v1:0',
          [QconnectModel.CLAUDE_HAIKU]: 'us.anthropic.claude-3-haiku-20240307-v1:0',
          // Note: claude-3-7-sonnet / claude-3-5-haiku are no longer supported by
          //       Q in Connect in the us regions; Claude Sonnet 4 is currently supported.
          [QconnectModel.CLAUDE_SONNET]: 'us.anthropic.claude-sonnet-4-20250514-v1:0',
        },
        'us-west-2': {
          [QconnectModel.NOVA_LITE]: 'us.amazon.nova-lite-v1:0',
          [QconnectModel.NOVA_PRO]: 'us.amazon.nova-pro-v1:0',
          [QconnectModel.CLAUDE_HAIKU]: 'us.anthropic.claude-3-haiku-20240307-v1:0',
          // Note: claude-3-7-sonnet / claude-3-5-haiku are no longer supported by
          //       Q in Connect in the us regions; Claude Sonnet 4 is currently supported.
          [QconnectModel.CLAUDE_SONNET]: 'us.anthropic.claude-sonnet-4-20250514-v1:0',
        },
        'ap-northeast-1': {
          [QconnectModel.NOVA_LITE]: 'apac.amazon.nova-lite-v1:0',
          [QconnectModel.NOVA_PRO]: 'apac.amazon.nova-pro-v1:0',
          [QconnectModel.CLAUDE_HAIKU]: 'apac.anthropic.claude-3-haiku-20240307-v1:0',
          [QconnectModel.CLAUDE_SONNET]: 'apac.anthropic.claude-3-5-sonnet-20241022-v2:0',
        },
      },
    });
  }
}

interface CasesSampleProps {
  readonly instance: connect.Instance;
  /**
   * Optional dependency to chain this construct's integration association after,
   * serializing Connect CreateIntegrationAssociation calls to avoid throttling.
   */
  readonly dependency?: Construct;
}

class CasesSample extends Construct {
  constructor(scope: Construct, id: string, props: CasesSampleProps) {
    super(scope, id);

    const casesDomain = new connect_cases.Domain(this, 'TestCasesDomain', {
      name: 'TestCasesDomain',
    });
    const association = casesDomain.addIntegrationAssociation('TestCasesDomainAssociation', {
      instance: props.instance,
    });
    if (props.dependency) {
      association.node.addDependency(props.dependency);
    }
  }
}

interface CustomerProfilesSampleProps {
  readonly instance: connect.Instance;
  readonly key: kms.IKey;
}

class CustomerProfilesSample extends Construct {
  constructor(scope: Construct, id: string, props: CustomerProfilesSampleProps) {
    super(scope, id);

    const customerProfilesDomain = new customer_profiles.Domain(this, 'TestCustomerProfilesDomain', {
      // Note: Start domainName with 'amazon-connect-' to allow the service role to access
      domainName: 'amazon-connect-test-domain',
      defaultExpirationDays: 365,
      defaultEncryptionKey: props.key,
    });
    customerProfilesDomain.addIntegration('TestCustomerProfilesIntegration', {
      uri: props.instance.instanceArn,
      objectTypeName: 'CTR',
    });

    new customer_profiles.ObjectType(this, 'TestObjectType', {
      domain: customerProfilesDomain,
      objectTypeName: 'CTR',
      description:
        'This template auto-associates with an existing profile, and a new profile will be created if an existing profile cannot be found. (CTR-NoInferred)"',
      encryptionKey: props.key,
      templateId: 'CTR-NoInferred',
    });
  }
}

interface ImmediateInboundSampleProps {
  readonly instance: connect.Instance;
  readonly queue: connect.Queue;
  readonly assistant: qconnect.Assistant;
  readonly langCode: string;
  readonly waitMessage: string;
  readonly ttsVoice: string;
}

class ImmediateInboundSample extends Construct {
  constructor(scope: Construct, id: string, props: ImmediateInboundSampleProps) {
    super(scope, id);

    const contactFlowPath = path.join(__dirname, 'contact-flows');
    const customerQueuePrompt = connect.Prompt.fromPromptName(this, 'CustomerQueuePrompt', {
      instance: props.instance,
      name: 'CustomerQueue.wav',
    });
    const customerQueueFlow = new connect.TemplateContactFlow(this, 'ImmediateCustomerQueueFlow', {
      instance: props.instance,
      name: `ImmediateCustomerQueueFlow_${props.langCode}`,
      type: connect.ContactFlowType.CUSTOMER_QUEUE,
      description: 'Play prompt for waiting customers.',
      path: path.join(contactFlowPath, 'customer-queue-flow.json'),
      variables: {
        CustomerQueuePromptArn: customerQueuePrompt.promptArn,
        MessageText: props.waitMessage,
      },
    });

    const beepPrompt = connect.Prompt.fromPromptName(this, 'BeepPrompt', {
      instance: props.instance,
      name: 'Beep.wav',
    });
    const agentWhisperFlow = new connect.TemplateContactFlow(this, 'ImmediateAgentWhisperFlow', {
      instance: props.instance,
      name: `ImmediateAgentWhisperFlow_${props.langCode}`,
      type: connect.ContactFlowType.AGENT_WHISPER,
      description: 'Play beep prompt.',
      path: path.join(contactFlowPath, 'agent-whisper-flow.json'),
      variables: {
        BeepPromptArn: beepPrompt.promptArn,
      },
    });

    const inboundFlow = new connect.TemplateContactFlow(this, 'ImmediateInboundContactFlow', {
      instance: props.instance,
      name: `ImmediateInboundContactFlow_${props.langCode}`,
      type: connect.ContactFlowType.CONTACT_FLOW,
      description: 'Accept contacts immediately.',
      path: path.join(contactFlowPath, 'inbound-contact-flow.json'),
      variables: {
        QueueArn: props.queue.queueArn,
        CustomerQueueFlowArn: customerQueueFlow.contactFlowArn,
        AgentWhisperFlowArn: agentWhisperFlow.contactFlowArn,
        QconnectAssistantArn: props.assistant.assistantArn,
        LangCode: props.langCode,
        TextToSpeechVoice: props.ttsVoice,
      },
    });
    inboundFlow.node.addDependency(props.queue, customerQueueFlow, agentWhisperFlow, props.assistant);
  }
}

const app = new App();
new IntegTest(app, 'Test', {
  testCases: [new TestConnectStack(app, 'TestConnectStack')],
});
