import * as path from 'path';
import { Resource, IResource, CustomResource, Stack, Duration } from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as custom_resources from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IInstance } from './instance';
import * as nag_suppressions from '../nag-suppressions';

/**
 * Properties for creating a prompt.
 */
export interface PromptProps {
  /**
   * The Amazon Connect instance to associate with this prompt.
   */
  readonly instance: IInstance;

  /**
   * The name of the prompt.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly name: string;

  /**
   * An optional description for the prompt.
   *
   * Helps document the purpose and content of the prompt.
   */
  readonly description?: string;

  /**
   * The S3 URI of the audio file for this prompt.
   *
   * Should point to a valid audio file in a supported format
   * (WAV, MP3) that Amazon Connect can access. The S3 bucket
   * must be in the same region as your Amazon Connect instance.
   *
   * @example 's3://my-connect-bucket/prompts/welcome-message.wav'
   */
  readonly s3Uri?: string;
}

/**
 * Attributes for importing an existing prompt.
 */
export interface PromptAttributes {
  /**
   * The Amazon Connect instance containing the prompt.
   */
  readonly instance: IInstance;

  /**
   * The name of the existing prompt to import.
   */
  readonly name: string;
}

/**
 * Represents an Amazon Connect prompt.
 *
 * A prompt is an audio message that can be played to customers during
 * their interaction with your contact center, such as welcome messages,
 * hold music, or informational announcements.
 */
export interface IPrompt extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the prompt.
   *
   * Used to reference the prompt in contact flows and other
   * Amazon Connect resources.
   */
  readonly promptArn: string;

  /**
   * The unique identifier of the prompt.
   *
   * Used to reference the prompt within Amazon Connect APIs.
   */
  readonly promptId: string;
}

/**
 * An Amazon Connect prompt construct.
 *
 * Prompts are audio messages played to customers during their contact center
 * experience. They provide information, instructions, or entertainment while
 * customers wait or navigate through contact flows. Prompts are essential
 * for creating professional and informative customer interactions.
 *
 * ## Key Features
 *
 * - **Audio Playback**: Play pre-recorded messages to customers
 * - **S3 Integration**: Store audio files in Amazon S3 for scalability
 * - **Multiple Formats**: Support for WAV and MP3 audio formats
 * - **Contact Flow Integration**: Use prompts in contact flow logic
 * - **Localization**: Support multiple languages and regional variations
 *
 * ## Usage Example
 *
 * ```typescript
 * const welcomePrompt = new Prompt(this, 'WelcomeMessage', {
 *   instance: connectInstance,
 *   name: 'Welcome Message',
 *   description: 'Greeting played to all incoming customers',
 *   s3Uri: 's3://my-prompts-bucket/welcome.wav',
 * });
 * ```
 *
 * ## Audio Requirements
 *
 * - **Format**: WAV (recommended) or MP3
 * - **Sample Rate**: 8 kHz or 16 kHz
 * - **Channels**: Mono (single channel)
 * - **Duration**: Keep messages concise for better customer experience
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html
 */
export class Prompt extends Resource implements IPrompt {
  /**
   * Import an existing prompt by name.
   *
   * This method creates a reference to an existing prompt in your Amazon Connect
   * instance, allowing you to use it in contact flows and other constructs.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param attrs - Attributes identifying the existing prompt
   * @returns A reference to the existing prompt
   */
  public static fromPromptName(scope: Construct, id: string, attrs: PromptAttributes): IPrompt {
    return new ImportedPrompt(scope, id, attrs);
  }

  /**
   * The Amazon Resource Name (ARN) of the prompt.
   */
  public readonly promptArn: string;

  /**
   * The unique identifier of the prompt.
   */
  public readonly promptId: string;

  /**
   * Creates a new Amazon Connect prompt.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the prompt
   */
  constructor(scope: Construct, id: string, props: PromptProps) {
    super(scope, id);

    const prompt = new connect.CfnPrompt(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      s3Uri: props.s3Uri,
    });

    this.promptId = prompt.ref;
    this.promptArn = prompt.attrPromptArn;

    this.node.addDependency(props.instance);
  }
}

class ImportedPrompt extends CustomResource implements IPrompt {
  public readonly promptArn: string;
  public readonly promptId: string;

  constructor(scope: Construct, id: string, attrs: PromptAttributes) {
    const provider = ImportedPromptProvider.getInstance(scope);

    super(scope, id, {
      serviceToken: provider.serviceToken,
      properties: {
        Parameters: {
          InstanceId: attrs.instance.instanceId,
          PromptName: attrs.name,
        },
      },
    });
    this.node.addDependency(provider);

    provider.addPolicyForInstance(attrs.instance.instanceArn);

    this.promptArn = this.getAttString('PromptArn');
    this.promptId = this.getAttString('PromptId');
  }
}

class ImportedPromptProvider extends Construct {
  public static getInstance(scope: Construct): ImportedPromptProvider {
    const stack = Stack.of(scope);
    const uniqueId = 'ImportedPromptProvider';
    return (stack.node.tryFindChild(uniqueId) as ImportedPromptProvider) ?? new ImportedPromptProvider(stack, uniqueId);
  }

  public readonly serviceToken: string;
  private readonly onEventHandler: lambda.IFunction;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const onEventHandler = new NodejsFunction(this, 'OnEventHandler', {
      entry: path.join(__dirname, 'prompt.fromPromptName.onEvent.ts'),
      handler: 'onEvent',
      runtime: lambda.Runtime.NODEJS_22_X,
      timeout: Duration.seconds(15),
      description: 'Provider handler for connect.listPrompts()',
    });
    this.onEventHandler = onEventHandler;
    nag_suppressions.addNagSuppressionsToLambda(onEventHandler);

    const provider = new custom_resources.Provider(this, 'Provider', {
      onEventHandler,
    });
    this.serviceToken = provider.serviceToken;
    nag_suppressions.addNagSuppressionsToProvider(provider);
  }

  public addPolicyForInstance(instanceArn: string) {
    this.onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['connect:ListPrompts'],
        resources: [instanceArn],
      }),
    );
  }
}
