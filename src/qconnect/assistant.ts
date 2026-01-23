import * as kms from 'aws-cdk-lib/aws-kms';
import * as wisdom from 'aws-cdk-lib/aws-wisdom';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { AssistantAssociation, AssistantAssociationType, AssistantAssociationOptions } from './assistant-association';
import { QconnectAssistantAssociation, QconnectAssistantAssociationOptions } from '../connect/integration-association';

/**
 * Types of Amazon Q in Connect assistants.
 *
 * Determines the assistant's capabilities and how it interacts with agents.
 */
export enum AssistantType {
  /**
   * Agent assistant that provides real-time recommendations.
   *
   * Analyzes customer interactions and provides relevant knowledge
   * articles, suggested responses, and contextual information to agents
   * during customer conversations.
   */
  AGENT = 'AGENT',
}

/**
 * Properties for creating an Amazon Q in Connect assistant.
 */
export interface AssistantProps {
  /**
   * The name of the assistant.
   *
   * Must be unique within your AWS account and region.
   */
  readonly name: string;

  /**
   * An optional description for the assistant.
   *
   * Helps document the purpose and capabilities of the assistant.
   */
  readonly description?: string;

  /**
   * The type of assistant.
   *
   * Determines the assistant's behavior and integration capabilities.
   *
   * @default AssistantType.AGENT
   */
  readonly type?: AssistantType;

  /**
   * KMS key for encrypting assistant data.
   *
   * If provided, all data associated with the assistant will be
   * encrypted using this key. This includes knowledge base content,
   * recommendations, and interaction data.
   */
  readonly encryptionKey?: kms.IKey;
}

/**
 * Represents an Amazon Q in Connect assistant.
 *
 * An assistant provides AI-powered recommendations and knowledge to agents
 * during customer interactions, helping them provide better and faster service.
 */
export interface IAssistant extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the assistant.
   *
   * Used to reference the assistant in knowledge base associations,
   * Connect integrations, and IAM policies.
   */
  readonly assistantArn: string;

  /**
   * The unique identifier of the assistant.
   *
   * Used to reference the assistant within Amazon Q in Connect APIs.
   */
  readonly assistantId: string;
}

/**
 * An Amazon Q in Connect assistant construct.
 *
 * Amazon Q in Connect assistants provide AI-powered agent assistance by
 * analyzing customer interactions in real-time and delivering relevant
 * knowledge articles, suggested responses, and contextual information.
 * This helps agents provide faster, more accurate customer service.
 *
 * ## Key Features
 *
 * - **Real-time Recommendations**: Analyze conversations and provide relevant suggestions
 * - **Knowledge Integration**: Connect with knowledge bases for comprehensive information
 * - **AI-Powered Insights**: Use machine learning to understand customer intent
 * - **Multi-channel Support**: Work across voice, chat, and other communication channels
 * - **Secure**: Support encryption at rest and in transit
 *
 * ## Usage Example
 *
 * ```typescript
 * const assistant = new Assistant(this, 'CustomerServiceAssistant', {
 *   name: 'Customer Service AI Assistant',
 *   description: 'AI assistant for customer service agents',
 *   type: AssistantType.AGENT,
 *   encryptionKey: kmsKey,
 * });
 * ```
 *
 * ## Integration Workflow
 *
 * 1. Create an assistant with knowledge base associations
 * 2. Configure AI agents and prompts for specific use cases
 * 3. Integrate with Amazon Connect instance
 * 4. Agents receive real-time recommendations during customer interactions
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html
 */
export class Assistant extends Resource implements IAssistant {
  /**
   * The underlying CloudFormation assistant resource.
   */
  public readonly cfnAssistant: wisdom.CfnAssistant;

  /**
   * The Amazon Resource Name (ARN) of the assistant.
   */
  public readonly assistantArn: string;

  /**
   * The unique identifier of the assistant.
   */
  public readonly assistantId: string;

  /**
   * Creates a new Amazon Q in Connect assistant.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the assistant
   */
  constructor(scope: Construct, id: string, props: AssistantProps) {
    super(scope, id);

    const serverSideEncryptionConfiguration = props.encryptionKey
      ? { kmsKeyId: props.encryptionKey.keyArn }
      : undefined;

    const assistant = new wisdom.CfnAssistant(this, 'Resource', {
      name: props.name,
      description: props.description,
      type: props.type || AssistantType.AGENT,
      serverSideEncryptionConfiguration,
    });
    this.cfnAssistant = assistant;

    this.assistantArn = assistant.attrAssistantArn;
    this.assistantId = assistant.ref;
  }

  /**
   * Creates a knowledge base association for this assistant.
   *
   * @param id The construct ID for the association
   * @param options Configuration options for the knowledge base association
   * @returns The created AssistantAssociation
   */
  public addKnowledgeBaseAssociation(id: string, options: AssistantAssociationOptions): AssistantAssociation {
    return new AssistantAssociation(this, id, {
      assistant: this,
      associationType: AssistantAssociationType.KNOWLEDGE_BASE,
      knowledgeBase: options.knowledgeBase,
    });
  }

  /**
   * Adds an integration association between this assistant and an Amazon Connect instance.
   *
   * This method creates a QconnectAssistantAssociation that enables the assistant
   * to be integrated with Amazon Connect, providing AI-powered agent assistance
   * by delivering real-time recommendations and knowledge articles to agents during
   * customer interactions.
   *
   * @param id - The construct ID for the integration association
   * @param options - Configuration options containing the Connect instance
   * @returns The created Q in Connect assistant association
   */
  public addIntegrationAssociation(
    id: string,
    options: QconnectAssistantAssociationOptions,
  ): QconnectAssistantAssociation {
    return new QconnectAssistantAssociation(this, id, {
      instance: options.instance,
      assistant: this,
    });
  }
}
