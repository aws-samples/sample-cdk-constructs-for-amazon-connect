import * as lex from 'aws-cdk-lib/aws-lex';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IInstance, Instance } from './instance';
import { L1IntegrationAssociation } from './l1-integration-association';
import { IApplication } from '../appintegrations/application';
import { IDomain } from '../connect-cases/domain';
import { IAssistant, IKnowledgeBase, KnowledgeBase } from '../qconnect';

/**
 * Types of integrations supported by Amazon Connect.
 *
 * Each type represents a different service or capability that can be
 * integrated with your Amazon Connect instance.
 */
export enum IntegrationType {
  /**
   * Amazon Lex bot integration.
   *
   * Enables natural language processing and conversational AI
   * capabilities within contact flows.
   */
  LEX_BOT = 'LEX_BOT',

  /**
   * AWS Lambda function integration.
   *
   * Allows contact flows to invoke Lambda functions for
   * custom business logic and external system integration.
   */
  LAMBDA_FUNCTION = 'LAMBDA_FUNCTION',

  /**
   * AppIntegrations application integration.
   *
   * Connects external applications and systems with Amazon Connect
   * for enhanced agent capabilities and data access.
   */
  APPLICATION = 'APPLICATION',

  /**
   * Amazon Q in Connect assistant integration.
   *
   * Provides AI-powered agent assistance with real-time
   * recommendations and knowledge articles.
   */
  WISDOM_ASSISTANT = 'WISDOM_ASSISTANT',

  /**
   * Amazon Q in Connect knowledge base integration.
   *
   * Enables access to knowledge repositories for agent
   * assistance and customer self-service.
   */
  WISDOM_KNOWLEDGE_BASE = 'WISDOM_KNOWLEDGE_BASE',

  /**
   * Amazon Connect Cases domain integration.
   *
   * Enables case management capabilities for tracking
   * and resolving customer issues.
   */
  CASES_DOMAIN = 'CASES_DOMAIN',
}

/**
 * Properties for creating an integration association.
 */
export interface IntegrationAssociationProps {
  /**
   * The Amazon Connect instance to associate with the integration.
   */
  readonly instance: IInstance;

  /**
   * The type of integration being associated.
   *
   * Determines how the integration will be used within Amazon Connect.
   */
  readonly integrationType: IntegrationType;

  /**
   * The ARN of the resource being integrated.
   *
   * Must be a valid ARN for the specified integration type.
   */
  readonly integrationArn: string;
}

/**
 * Represents an Amazon Connect integration association.
 *
 * An integration association connects external services and resources
 * with your Amazon Connect instance, enabling enhanced functionality
 * and capabilities.
 */
export interface IIntegrationAssociation extends IResource {
  /**
   * The unique identifier of the integration association.
   *
   * Used to reference the association within Amazon Connect APIs.
   */
  readonly integrationAssociationId: string;

  /**
   * The Amazon Resource Name (ARN) of the integration association.
   *
   * Used to reference the association in IAM policies and other AWS services.
   */
  readonly integrationAssociationArn: string;
}

/**
 * An Amazon Connect integration association construct.
 *
 * Integration associations enable Amazon Connect to work with external
 * services and resources, extending the capabilities of your contact center.
 * They provide the configuration and permissions needed for secure
 * integration with various AWS services and third-party applications.
 *
 * ## Key Features
 *
 * - **Service Integration**: Connect with Lex, Lambda, Q in Connect, and other services
 * - **External Applications**: Integrate third-party systems through AppIntegrations
 * - **Secure Access**: Manage permissions and authentication for integrated services
 * - **Real-time Capabilities**: Enable real-time data exchange and processing
 * - **Flexible Configuration**: Support various integration patterns and use cases
 *
 * ## Supported Integration Types
 *
 * - **Lex Bots**: Natural language processing and conversational AI
 * - **Lambda Functions**: Custom business logic and external system integration
 * - **Applications**: Third-party CRM, helpdesk, and business applications
 * - **Q in Connect**: AI-powered agent assistance and knowledge management
 * - **Connect Cases**: Case management and issue tracking
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-integration.html
 */
export class IntegrationAssociation extends Resource implements IIntegrationAssociation {
  /**
   * The unique identifier of the integration association.
   */
  public readonly integrationAssociationId: string;

  /**
   * The Amazon Resource Name (ARN) of the integration association.
   */
  public readonly integrationAssociationArn: string;

  /**
   * Creates a new Amazon Connect integration association.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the integration association
   */
  constructor(scope: Construct, id: string, props: IntegrationAssociationProps) {
    super(scope, id);

    // Use L1IntegrationAssociation which handles both CloudFormation-supported and unsupported types
    const l1IntegrationAssociation = new L1IntegrationAssociation(this, 'Resource', {
      instanceId: props.instance.instanceArn, // Note: provide the ARN to instanceId
      integrationType: props.integrationType,
      integrationArn: props.integrationArn,
    });
    if (props.instance instanceof Instance) {
      // Add dependency directly to CfnInstance to avoid circular dependency.
      l1IntegrationAssociation.node.addDependency(props.instance.cfnInstance);
    }

    this.integrationAssociationId = l1IntegrationAssociation.integrationAssociationId;
    this.integrationAssociationArn = l1IntegrationAssociation.integrationAssociationArn;
  }
}

/**
 * Options for creating a Lex integration association through Instance convenience methods.
 */
export interface LexIntegrationAssociationOptions {
  /**
   * The Lex bot alias to integrate with Amazon Connect.
   *
   * The bot alias represents a specific version of the Lex bot
   * that will be available in contact flows.
   */
  readonly botAlias: lex.CfnBotAlias;
}

/**
 * Properties for creating a Lex integration association.
 */
export interface LexIntegrationAssociationProps {
  /**
   * The Amazon Connect instance to associate with the Lex bot.
   */
  readonly instance: IInstance;

  /**
   * The Lex bot alias to integrate with Amazon Connect.
   *
   * The bot alias represents a specific version of the Lex bot
   * that will be available in contact flows for natural language
   * processing and conversational AI capabilities.
   */
  // TODO: We do not have L2 constructs for Lex yet.
  readonly botAlias: lex.CfnBotAlias;
}

/**
 * An Amazon Connect Lex bot integration association.
 *
 * Enables Amazon Lex conversational AI capabilities within Amazon Connect
 * contact flows, allowing customers to interact with automated chatbots
 * and voice assistants for self-service and information gathering.
 *
 * ## Key Features
 *
 * - **Natural Language Processing**: Understand customer intent from speech and text
 * - **Multi-turn Conversations**: Support complex, context-aware dialogues
 * - **Slot Filling**: Collect required information through guided conversations
 * - **Intent Recognition**: Identify what customers want to accomplish
 * - **Multi-channel Support**: Work across voice and chat channels
 *
 * ## Usage Example
 *
 * ```typescript
 * const lexIntegration = new LexIntegrationAssociation(this, 'CustomerServiceBot', {
 *   instance: connectInstance,
 *   botAlias: lexBotAlias,
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-lex.html
 */
export class LexIntegrationAssociation extends IntegrationAssociation {
  /**
   * Creates a new Lex integration association.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the Lex integration
   */
  constructor(scope: Construct, id: string, props: LexIntegrationAssociationProps) {
    super(scope, id, {
      instance: props.instance,
      integrationType: IntegrationType.LEX_BOT,
      integrationArn: props.botAlias.attrArn,
    });

    this.node.addDependency(props.botAlias);
  }
}

/**
 * Options for creating an application integration association through Application convenience methods.
 */
export interface ApplicationIntegrationAssociationOptions {
  /**
   * The Amazon Connect instance to integrate with the application.
   */
  readonly instance: IInstance;
}

/**
 * Properties for creating an application integration association.
 */
export interface ApplicationIntegrationAssociationProps extends ApplicationIntegrationAssociationOptions {
  /**
   * The AppIntegrations application to integrate with Amazon Connect.
   */
  readonly application: IApplication;
}

/**
 * An Amazon Connect application integration association.
 *
 * Enables integration between Amazon Connect and external applications
 * through Amazon AppIntegrations, providing agents with access to
 * customer data and business applications during interactions.
 *
 * ## Key Features
 *
 * - **External System Access**: Connect with CRM, helpdesk, and business applications
 * - **Real-time Data**: Access customer information during live interactions
 * - **Unified Interface**: Embed external applications in the agent workspace
 * - **Secure Integration**: Manage authentication and permissions centrally
 * - **Custom Applications**: Support for proprietary and third-party systems
 *
 * ## Usage Example
 *
 * ```typescript
 * const appIntegration = new ApplicationIntegrationAssociation(this, 'SalesforceIntegration', {
 *   instance: connectInstance,
 *   application: salesforceApp,
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/app-integrations.html
 */
export class ApplicationIntegrationAssociation extends IntegrationAssociation {
  /**
   * Creates a new application integration association.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the application integration
   */
  constructor(scope: Construct, id: string, props: ApplicationIntegrationAssociationProps) {
    super(scope, id, {
      instance: props.instance,
      integrationType: IntegrationType.APPLICATION,
      integrationArn: props.application.applicationArn,
    });

    this.node.addDependency(props.application);
  }
}

export interface QconnectAssistantAssociationOptions {
  readonly instance: IInstance;
}

export interface QconnectAssistantAssociationProps {
  readonly instance: IInstance;
  readonly assistant: IAssistant;
}

export class QconnectAssistantAssociation extends IntegrationAssociation {
  constructor(scope: Construct, id: string, props: QconnectAssistantAssociationProps) {
    super(scope, id, {
      instance: props.instance,
      integrationType: IntegrationType.WISDOM_ASSISTANT,
      integrationArn: props.assistant.assistantArn,
    });

    this.node.addDependency(props.assistant);
  }
}

export interface QconnectKnowledgeBaseAssociationOptions {
  readonly instance: IInstance;
}

export interface QconnectKnowledgeBaseAssociationProps {
  readonly instance: IInstance;
  readonly knowledgeBase: IKnowledgeBase;
}

export class QconnectKnowledgeBaseAssociation extends IntegrationAssociation {
  constructor(scope: Construct, id: string, props: QconnectKnowledgeBaseAssociationProps) {
    super(scope, id, {
      instance: props.instance,
      integrationType: IntegrationType.WISDOM_KNOWLEDGE_BASE,
      integrationArn: props.knowledgeBase.knowledgeBaseArn,
    });

    if (props.knowledgeBase instanceof KnowledgeBase) {
      this.node.addDependency(props.knowledgeBase.cfnKnowledgeBase);
    }
  }
}

export interface CasesDomainAssociationOptions {
  readonly instance: IInstance;
}

export interface CasesDomainAssociationProps {
  readonly instance: IInstance;
  readonly domain: IDomain;
}

export class CasesDomainAssociation extends IntegrationAssociation {
  constructor(scope: Construct, id: string, props: CasesDomainAssociationProps) {
    super(scope, id, {
      instance: props.instance,
      integrationType: IntegrationType.CASES_DOMAIN,
      integrationArn: props.domain.domainArn,
    });

    this.node.addDependency(props.domain);
  }
}
