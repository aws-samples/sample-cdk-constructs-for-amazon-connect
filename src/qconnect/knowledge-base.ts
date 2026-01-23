import { Resource, IResource } from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as wisdom from 'aws-cdk-lib/aws-wisdom';
import { Construct } from 'constructs';

import { IDataIntegration } from '../appintegrations/data-integration';
import {
  QconnectKnowledgeBaseAssociation,
  QconnectKnowledgeBaseAssociationOptions,
} from '../connect/integration-association';

/**
 * Types of knowledge bases supported by Amazon Q in Connect.
 *
 * Each type serves different content management and integration needs.
 */
export enum KnowledgeBaseType {
  /**
   * External knowledge base with data from external sources.
   *
   * Integrates with external systems through AppIntegrations to
   * automatically sync content from sources like SharePoint,
   * Salesforce, or other document repositories.
   */
  EXTERNAL = 'EXTERNAL',

  /**
   * Custom knowledge base with manually managed content.
   *
   * Allows direct upload and management of knowledge articles
   * through the Amazon Q in Connect console or APIs.
   */
  CUSTOM = 'CUSTOM',

  /**
   * Knowledge base containing message templates.
   *
   * Stores pre-written message templates that agents can use
   * for consistent communication across different channels.
   */
  MESSAGE_TEMPLATES = 'MESSAGE_TEMPLATES',

  /**
   * Managed knowledge base with AWS-curated content.
   *
   * Contains AWS-managed knowledge articles and best practices
   * that are automatically updated and maintained.
   */
  MANAGED = 'MANAGED',

  /**
   * Knowledge base for quick response templates.
   *
   * Stores short, frequently-used responses that agents can
   * quickly insert into conversations.
   */
  QUICK_RESPONSES = 'QUICK_RESPONSES',
}

/**
 * Properties for creating a knowledge base.
 */
export interface KnowledgeBaseProps {
  /**
   * The name of the knowledge base.
   *
   * Must be unique within your AWS account and region.
   */
  readonly name: string;

  /**
   * An optional description for the knowledge base.
   *
   * Helps document the purpose and content of the knowledge base.
   */
  readonly description?: string;

  /**
   * The type of knowledge base.
   *
   * Determines how content is managed and integrated with external sources.
   */
  readonly knowledgeBaseType: KnowledgeBaseType;

  /**
   * Configuration for rendering knowledge base content.
   *
   * Controls how content is displayed to agents, including
   * formatting, styling, and presentation options.
   */
  readonly renderingConfiguration?: wisdom.CfnKnowledgeBase.RenderingConfigurationProperty;

  /**
   * KMS key for encrypting knowledge base content.
   *
   * If provided, all content in the knowledge base will be
   * encrypted using this key for enhanced security.
   */
  readonly encryptionKey?: kms.IKey;

  /**
   * Data integration for external knowledge bases.
   *
   * Required for EXTERNAL knowledge base types. Defines the
   * connection to external data sources for automatic content sync.
   */
  readonly dataIntegration?: IDataIntegration;

  /**
   * Object fields to sync from the data integration.
   *
   * Specifies which fields from the external data source should
   * be included in the knowledge base content.
   */
  readonly objectFields?: string[];
}

/**
 * Represents an Amazon Q in Connect knowledge base.
 *
 * A knowledge base stores and organizes information that can be used
 * by AI assistants to provide recommendations and answers to agents
 * during customer interactions.
 */
export interface IKnowledgeBase extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * Used to reference the knowledge base in assistant associations,
   * Connect integrations, and IAM policies.
   */
  readonly knowledgeBaseArn: string;

  /**
   * The unique identifier of the knowledge base.
   *
   * Used to reference the knowledge base within Amazon Q in Connect APIs.
   */
  readonly knowledgeBaseId: string;
}

/**
 * An Amazon Q in Connect knowledge base construct.
 *
 * Knowledge bases are repositories of information that power AI-driven
 * agent assistance. They can contain articles, FAQs, procedures, templates,
 * and other content that helps agents provide accurate and consistent
 * customer service. Knowledge bases can be populated manually or
 * automatically synchronized from external sources.
 *
 * ## Key Features
 *
 * - **Content Management**: Store and organize knowledge articles and templates
 * - **External Integration**: Sync content from SharePoint, Salesforce, and other sources
 * - **AI-Powered Search**: Enable intelligent content discovery and recommendations
 * - **Multi-format Support**: Handle text, documents, and structured data
 * - **Real-time Updates**: Keep content current with automatic synchronization
 *
 * ## Usage Example
 *
 * ```typescript
 * const knowledgeBase = new KnowledgeBase(this, 'ProductKnowledgeBase', {
 *   name: 'Product Information KB',
 *   description: 'Knowledge base containing product documentation',
 *   knowledgeBaseType: KnowledgeBaseType.EXTERNAL,
 *   dataIntegration: sharepointIntegration,
 *   objectFields: ['title', 'content', 'category', 'lastModified'],
 *   encryptionKey: kmsKey,
 * });
 * ```
 *
 * ## Content Types
 *
 * - **Articles**: Detailed information and procedures
 * - **FAQs**: Frequently asked questions and answers
 * - **Templates**: Pre-written responses and messages
 * - **Quick Responses**: Short, commonly-used phrases
 * - **Procedures**: Step-by-step instructions
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html
 */
export class KnowledgeBase extends Resource implements IKnowledgeBase {
  /**
   * The underlying CloudFormation knowledge base resource.
   */
  public readonly cfnKnowledgeBase: wisdom.CfnKnowledgeBase;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   */
  public readonly knowledgeBaseArn: string;

  /**
   * The unique identifier of the knowledge base.
   */
  public readonly knowledgeBaseId: string;

  /**
   * Creates a new Amazon Q in Connect knowledge base.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the knowledge base
   */
  constructor(scope: Construct, id: string, props: KnowledgeBaseProps) {
    super(scope, id);

    const serverSideEncryptionConfiguration = props.encryptionKey
      ? { kmsKeyId: props.encryptionKey.keyArn }
      : undefined;

    let sourceConfiguration;
    if (props.dataIntegration) {
      sourceConfiguration = {
        appIntegrations: {
          appIntegrationArn: props.dataIntegration.dataIntegrationArn,
          objectFields: props.objectFields,
        },
      };
    }

    const knowledgeBase = new wisdom.CfnKnowledgeBase(this, 'Resource', {
      name: props.name,
      description: props.description,
      knowledgeBaseType: props.knowledgeBaseType,
      renderingConfiguration: props.renderingConfiguration,
      sourceConfiguration,
      serverSideEncryptionConfiguration,
    });
    this.cfnKnowledgeBase = knowledgeBase;

    this.knowledgeBaseArn = knowledgeBase.attrKnowledgeBaseArn;
    this.knowledgeBaseId = knowledgeBase.ref;
  }

  /**
   * Adds an integration association between this knowledge base and an Amazon Connect instance.
   *
   * This method creates a QconnectKnowledgeBaseAssociation that enables the knowledge base
   * to be integrated with Amazon Connect, providing AI-powered recommendations and knowledge
   * articles to agents during customer interactions.
   *
   * @param id - The construct ID for the integration association
   * @param options - Configuration options containing the Connect instance
   * @returns The created Q in Connect knowledge base association
   */
  public addIntegrationAssociation(
    id: string,
    options: QconnectKnowledgeBaseAssociationOptions,
  ): QconnectKnowledgeBaseAssociation {
    return new QconnectKnowledgeBaseAssociation(this, id, {
      instance: options.instance,
      knowledgeBase: this,
    });
  }
}
