import { Stack } from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import {
  S3StorageConfig,
  S3StorageConfigOptions,
  KinesisStorageConfig,
  KinesisStreamStorageConfigOptions,
  KinesisFirehoseStorageConfig,
  KinesisFirehoseStorageConfigOptions,
  KinesisVideoStreamStorageConfig,
  KinesisVideoStreamStorageConfigOptions,
} from './instance-storage-config';
import { LexIntegrationAssociation, LexIntegrationAssociationOptions } from './integration-association';

/**
 * Identity management types supported by Amazon Connect instances.
 *
 * The identity management type determines how users are authenticated and managed
 * within your Amazon Connect instance. This setting cannot be changed after
 * instance creation.
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html
 */
export enum IdentityManagementType {
  /**
   * Use SAML 2.0-based authentication with an existing identity provider (IdP).
   *
   * This option enables single sign-on (SSO) from your organization's identity provider
   * to Amazon Connect. Users authenticate through your IdP and are federated to Amazon Connect.
   * Requires configuration of AWS IAM SAML federation.
   *
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html
   */
  SAML = 'SAML',

  /**
   * Store and manage users directly within Amazon Connect.
   *
   * Amazon Connect creates and manages user accounts internally. Users cannot be shared
   * with other applications. This is the simplest option for getting started.
   */
  CONNECT_MANAGED = 'CONNECT_MANAGED',

  /**
   * Link to an existing AWS Directory Service directory.
   *
   * Use an AWS Managed Microsoft AD or Simple AD directory to manage users.
   * Each directory can be used with one Amazon Connect instance at a time.
   *
   * @see https://docs.aws.amazon.com/directoryservice/
   */
  EXISTING_DIRECTORY = 'EXISTING_DIRECTORY',
}

/**
 * Properties for creating an Amazon Connect instance.
 */
export interface InstanceProps {
  /**
   * Configuration attributes that control various features and capabilities of the instance.
   *
   * These attributes include telephony settings (inbound/outbound calls, early media),
   * monitoring features (Contact Lens, enhanced monitoring), and other instance-level
   * feature toggles.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-connect-instance-attributes.html
   */
  readonly attributes: connect.CfnInstance.AttributesProperty;

  /**
   * The identity management type for the instance.
   *
   * This determines how users are authenticated and managed. The setting cannot be
   * changed after instance creation, so choose carefully based on your organization's
   * authentication requirements.
   *
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html
   */
  readonly identityManagementType: IdentityManagementType;

  /**
   * The alias for the instance, used in the access URL.
   *
   * The instance alias becomes part of the access URL (e.g., `alias.my.connect.aws`).
   * This must be unique across all Amazon Connect instances in all regions.
   *
   * Required when `identityManagementType` is `CONNECT_MANAGED` or `SAML`.
   * Not required when using `EXISTING_DIRECTORY`.
   *
   * @example 'my-contact-center'
   */
  readonly instanceAlias?: string;

  /**
   * The identifier for the AWS Directory Service directory.
   *
   * Required when `identityManagementType` is `EXISTING_DIRECTORY`.
   * Must be a valid directory ID in the format `d-xxxxxxxxxx`.
   *
   * @example 'd-1234567890'
   * @see https://docs.aws.amazon.com/directoryservice/
   */
  readonly directoryId?: string;
}

/**
 * Represents an Amazon Connect instance.
 *
 * An Amazon Connect instance is a virtual contact center that contains all the
 * resources and settings related to your contact center, including users, queues,
 * contact flows, and telephony configuration.
 */
export interface IInstance extends IResource {
  /**
   * The unique identifier of the Amazon Connect instance.
   *
   * This is a system-generated UUID that uniquely identifies the instance
   * within your AWS account and region.
   *
   * @example '12345678-1234-1234-1234-123456789012'
   */
  readonly instanceId: string;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * The ARN uniquely identifies the instance across all of AWS and can be used
   * to reference the instance in IAM policies and other AWS services.
   *
   * @example 'arn:aws:connect:us-east-1:123456789012:instance/12345678-1234-1234-1234-123456789012'
   */
  readonly instanceArn: string;

  /**
   * The IAM service role associated with the instance.
   *
   * This role is automatically created by Amazon Connect and is used by the service
   * to perform actions on your behalf, such as creating CloudWatch logs and accessing
   * other AWS services.
   */
  readonly serviceRole: iam.IRole;
}

/**
 * An Amazon Connect instance construct.
 *
 * Creates and configures a virtual contact center instance with all the necessary
 * resources and settings. The instance serves as the foundation for your contact center,
 * containing users, queues, contact flows, and telephony configuration.
 *
 * ## Key Features
 *
 * - **Identity Management**: Supports SAML, Connect-managed users, or AWS Directory Service
 * - **Telephony**: Configurable inbound/outbound calling with early media support
 * - **Monitoring**: Built-in support for Contact Lens and enhanced monitoring
 * - **Multi-party**: Support for conference calls and multi-party chats
 *
 * ## Usage Example
 *
 * ```typescript
 * const instance = new Instance(this, 'MyContactCenter', {
 *   identityManagementType: IdentityManagementType.CONNECT_MANAGED,
 *   instanceAlias: 'my-contact-center',
 *   attributes: {
 *     inboundCalls: true,
 *     outboundCalls: true,
 *     earlyMedia: true,
 *     contactLens: true,
 *   },
 * });
 * ```
 *
 * ## Important Notes
 *
 * - The identity management type cannot be changed after instance creation
 * - Instance alias must be unique across all Amazon Connect instances globally
 * - Amazon Connect enforces limits on instance creation/deletion (30-day window)
 * - Each AWS Directory Service directory can only be used with one instance
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 */
export class Instance extends Resource implements IInstance {
  /**
   * The underlying CloudFormation instance resource.
   */
  public readonly cfnInstance: connect.CfnInstance;

  /**
   * The unique identifier of the Amazon Connect instance.
   *
   * This is a system-generated UUID that uniquely identifies the instance
   * within your AWS account and region.
   */
  public readonly instanceId: string;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * The ARN uniquely identifies the instance across all of AWS and can be used
   * to reference the instance in IAM policies and other AWS services.
   */
  public readonly instanceArn: string;

  /**
   * The IAM service role associated with the instance.
   *
   * This role is automatically created by Amazon Connect and is used by the service
   * to perform actions on your behalf, such as creating CloudWatch logs and accessing
   * other AWS services.
   */
  public readonly serviceRole: iam.IRole;

  /**
   * The alias of the instance, if provided.
   *
   * This is the left-most part of the access URL and must be unique globally
   * across all Amazon Connect instances.
   */
  public readonly instanceAlias?: string;

  /**
   * The full domain name for accessing the instance.
   *
   * Constructed as `{instanceAlias}.my.connect.aws` when an alias is provided.
   * This is the URL where users will access the Amazon Connect interface.
   *
   * @example 'my-contact-center.my.connect.aws'
   */
  public readonly instanceDomain?: string;

  /**
   * Creates a new Amazon Connect instance.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the instance
   */
  constructor(scope: Construct, id: string, props: InstanceProps) {
    super(scope, id);

    this.cfnInstance = new connect.CfnInstance(this, 'Resource', {
      attributes: props.attributes,
      identityManagementType: props.identityManagementType,
      instanceAlias: props.instanceAlias,
      directoryId: props.directoryId,
    });

    this.instanceId = this.cfnInstance.attrId;
    this.instanceArn = this.cfnInstance.attrArn;
    this.serviceRole = iam.Role.fromRoleArn(this, 'ServiceRole', this.cfnInstance.attrServiceRole);

    this.instanceAlias = props.instanceAlias;
    if (this.instanceAlias) {
      this.instanceDomain = `${this.instanceAlias}.my.connect.aws`;
    }
  }

  /**
   * Adds an S3 storage configuration to this Amazon Connect instance.
   *
   * S3 storage is used for storing files and data such as call recordings,
   * chat transcripts, scheduled reports, attachments, contact evaluations,
   * screen recordings, and email messages.
   *
   * @param id - The construct ID for the storage configuration
   * @param options - Configuration options for S3 storage
   * @returns The created S3 storage configuration
   */
  public addS3StorageConfig(id: string, options: S3StorageConfigOptions): S3StorageConfig {
    return new S3StorageConfig(this, id, {
      instance: this,
      ...options,
    });
  }

  /**
   * Adds a Kinesis Stream storage configuration to this Amazon Connect instance.
   *
   * Kinesis Streams are used for real-time streaming of data such as contact trace records,
   * agent events, and real-time contact analysis segments for both chat and voice.
   *
   * @param id - The construct ID for the storage configuration
   * @param options - Configuration options for Kinesis Stream storage
   * @returns The created Kinesis Stream storage configuration
   */
  public addKinesisStreamStorageConfig(id: string, options: KinesisStreamStorageConfigOptions): KinesisStorageConfig {
    return new KinesisStorageConfig(this, id, {
      instance: this,
      ...options,
    });
  }

  /**
   * Adds a Kinesis Firehose storage configuration to this Amazon Connect instance.
   *
   * Kinesis Firehose is used for delivering streaming data to destinations like S3,
   * Redshift, or Elasticsearch. Currently supports contact trace records.
   *
   * @param id - The construct ID for the storage configuration
   * @param options - Configuration options for Kinesis Firehose storage
   * @returns The created Kinesis Firehose storage configuration
   */
  public addKinesisFirehoseStorageConfig(
    id: string,
    options: KinesisFirehoseStorageConfigOptions,
  ): KinesisFirehoseStorageConfig {
    return new KinesisFirehoseStorageConfig(this, id, {
      instance: this,
      ...options,
    });
  }

  /**
   * Adds a Kinesis Video Stream storage configuration to this Amazon Connect instance.
   *
   * Kinesis Video Streams are used for storing and streaming media content such as
   * video calls and screen recordings with configurable retention periods and encryption.
   *
   * @param id - The construct ID for the storage configuration
   * @param options - Configuration options for Kinesis Video Stream storage
   * @returns The created Kinesis Video Stream storage configuration
   */
  public addKinesisVideoStreamStorageConfig(
    id: string,
    options: KinesisVideoStreamStorageConfigOptions,
  ): KinesisVideoStreamStorageConfig {
    return new KinesisVideoStreamStorageConfig(this, id, {
      instance: this,
      ...options,
    });
  }

  /**
   * Adds a Lex bot integration association to this Amazon Connect instance.
   *
   * Lex bot integrations enable natural language processing capabilities within
   * contact flows, allowing customers to interact with automated conversational
   * interfaces powered by Amazon Lex.
   *
   * @param id - The construct ID for the integration association
   * @param options - Configuration options for the Lex bot integration
   * @returns The created Lex integration association
   */
  public addLexIntegrationAssociation(
    id: string,
    options: LexIntegrationAssociationOptions,
  ): LexIntegrationAssociation {
    return new LexIntegrationAssociation(this, id, {
      instance: this,
      ...options,
    });
  }
}

/** @hidden */
export function getInstanceArnFromInstanceId(stack: Stack, instanceId: string): string {
  return `arn:aws:connect:${stack.region}:${stack.account}:instance/${instanceId}`;
}
