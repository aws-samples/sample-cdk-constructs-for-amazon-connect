import * as connect from 'aws-cdk-lib/aws-connect';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as kinesisfirehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IInstance, Instance } from './instance';
import { L1InstanceStorageConfig } from './l1-instance-storage-config';

// See also: https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateInstanceStorageConfig.html
export enum ResourceType {
  CHAT_TRANSCRIPTS = 'CHAT_TRANSCRIPTS',
  CALL_RECORDINGS = 'CALL_RECORDINGS',
  SCHEDULED_REPORTS = 'SCHEDULED_REPORTS',
  MEDIA_STREAMS = 'MEDIA_STREAMS',
  CONTACT_TRACE_RECORDS = 'CONTACT_TRACE_RECORDS',
  AGENT_EVENTS = 'AGENT_EVENTS',
  /** @deprecated Use REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS instead. */
  REAL_TIME_CONTACT_ANALYSIS_SEGMENTS = 'REAL_TIME_CONTACT_ANALYSIS_SEGMENTS',
  ATTACHMENTS = 'ATTACHMENTS',
  CONTACT_EVALUATIONS = 'CONTACT_EVALUATIONS',
  SCREEN_RECORDINGS = 'SCREEN_RECORDINGS',
  REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS = 'REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS',
  REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS = 'REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS',
  EMAIL_MESSAGES = 'EMAIL_MESSAGES',
}

export type S3ResourceType =
  | ResourceType.CHAT_TRANSCRIPTS
  | ResourceType.CALL_RECORDINGS
  | ResourceType.SCHEDULED_REPORTS
  | ResourceType.ATTACHMENTS
  | ResourceType.CONTACT_EVALUATIONS
  | ResourceType.SCREEN_RECORDINGS
  | ResourceType.EMAIL_MESSAGES;

export type KinesisStreamResouceType =
  | ResourceType.CONTACT_TRACE_RECORDS
  | ResourceType.AGENT_EVENTS
  | ResourceType.REAL_TIME_CONTACT_ANALYSIS_SEGMENTS
  | ResourceType.REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS
  | ResourceType.REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS;

export type KinesisFirehoseResourceType = ResourceType.CONTACT_TRACE_RECORDS;

export type KinesisVideoStreamResouceType = ResourceType.MEDIA_STREAMS;

export enum StorageType {
  S3 = 'S3',
  KINESIS_STREAM = 'KINESIS_STREAM',
  KINESIS_FIREHOSE = 'KINESIS_FIREHOSE',
  KINESIS_VIDEO_STREAM = 'KINESIS_VIDEO_STREAM',
}

export interface InstanceStorageConfigProps {
  readonly instance: IInstance;
  readonly resourceType: ResourceType;
  readonly storageType: StorageType;

  readonly kinesisFirehoseConfig?: connect.CfnInstanceStorageConfig.KinesisFirehoseConfigProperty;
  readonly kinesisStreamConfig?: connect.CfnInstanceStorageConfig.KinesisStreamConfigProperty;
  readonly kinesisVideoStreamConfig?: connect.CfnInstanceStorageConfig.KinesisVideoStreamConfigProperty;
  readonly s3Config?: connect.CfnInstanceStorageConfig.S3ConfigProperty;
}

export interface IInstanceStorageConfig extends IResource {
  readonly instance: IInstance;
  readonly associationId: string;
}

export class InstanceStorageConfig extends Resource implements IInstanceStorageConfig {
  private readonly l1InstanceStorageConfig: L1InstanceStorageConfig;
  public readonly instance: IInstance;
  public readonly associationId: string;

  constructor(scope: Construct, id: string, props: InstanceStorageConfigProps) {
    super(scope, id);

    this.l1InstanceStorageConfig = new L1InstanceStorageConfig(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      resourceType: props.resourceType,
      storageType: props.storageType,
      kinesisFirehoseConfig: props.kinesisFirehoseConfig,
      kinesisStreamConfig: props.kinesisStreamConfig,
      kinesisVideoStreamConfig: props.kinesisVideoStreamConfig,
      s3Config: props.s3Config,
    });

    if (props.instance instanceof Instance) {
      // Add dependency directly to CfnInstance to avoid circular dependency.
      this.node.addDependency(props.instance.cfnInstance);
    }
    this.instance = props.instance;
    this.associationId = this.l1InstanceStorageConfig.attrAssociationId;
  }
}

export interface S3StorageConfigOptions {
  readonly resourceType: S3ResourceType;
  readonly bucket: s3.IBucket;
  readonly bucketPrefix: string;
  readonly key?: kms.IKey;
}

export interface KinesisStreamStorageConfigOptions {
  readonly resourceType: KinesisStreamResouceType;
  readonly stream: kinesis.IStream;
}

export interface KinesisFirehoseStorageConfigOptions {
  readonly resourceType: KinesisFirehoseResourceType;
  readonly deliveryStream: kinesisfirehose.CfnDeliveryStream;
}

export interface KinesisVideoStreamStorageConfigOptions {
  readonly resourceType: KinesisVideoStreamResouceType;
  readonly stream: kinesis.IStream;
  readonly encryptionConfig?: connect.CfnInstanceStorageConfig.EncryptionConfigProperty;
  readonly prefix?: string;
  readonly retentionPeriodHours?: number;
}

export interface S3StorageConfigProps extends S3StorageConfigOptions {
  readonly instance: IInstance;
}

export class S3StorageConfig extends InstanceStorageConfig {
  constructor(scope: Construct, id: string, props: S3StorageConfigProps) {
    super(scope, id, {
      instance: props.instance,
      resourceType: props.resourceType,
      storageType: StorageType.S3,
      s3Config: {
        bucketName: props.bucket.bucketName,
        bucketPrefix: props.bucketPrefix,
        encryptionConfig: props.key
          ? {
              encryptionType: 'KMS',
              keyId: props.key.keyArn, // provide the full ARN, not the ID
            }
          : undefined,
      },
    });

    this.node.addDependency(props.bucket);
    if (props.key) {
      this.node.addDependency(props.key);
    }
  }
}

export interface KinesisStreamStorageConfigProps extends KinesisStreamStorageConfigOptions {
  readonly instance: IInstance;
}

export class KinesisStorageConfig extends InstanceStorageConfig {
  constructor(scope: Construct, id: string, props: KinesisStreamStorageConfigProps) {
    super(scope, id, {
      instance: props.instance,
      resourceType: props.resourceType,
      storageType: StorageType.KINESIS_STREAM,
      kinesisStreamConfig: {
        streamArn: props.stream.streamArn,
      },
    });

    this.node.addDependency(props.stream);
  }
}

export interface KinesisFirehoseStorageConfigProps extends KinesisFirehoseStorageConfigOptions {
  readonly instance: IInstance;
}

export class KinesisFirehoseStorageConfig extends InstanceStorageConfig {
  constructor(scope: Construct, id: string, props: KinesisFirehoseStorageConfigProps) {
    super(scope, id, {
      instance: props.instance,
      resourceType: props.resourceType,
      storageType: StorageType.KINESIS_FIREHOSE,
      kinesisFirehoseConfig: {
        firehoseArn: props.deliveryStream.attrArn,
      },
    });

    this.node.addDependency(props.deliveryStream);
  }
}

export interface KinesisVideoStreamStorageConfigProps extends KinesisVideoStreamStorageConfigOptions {
  readonly instance: IInstance;
}

export class KinesisVideoStreamStorageConfig extends InstanceStorageConfig {
  constructor(scope: Construct, id: string, props: KinesisVideoStreamStorageConfigProps) {
    const config: any = {};

    if (props.encryptionConfig) {
      config.encryptionConfig = props.encryptionConfig;
    }
    if (props.prefix) {
      config.prefix = props.prefix;
    }
    if (props.retentionPeriodHours !== undefined) {
      config.retentionPeriodHours = props.retentionPeriodHours;
    }

    super(scope, id, {
      instance: props.instance,
      resourceType: props.resourceType,
      storageType: StorageType.KINESIS_VIDEO_STREAM,
      kinesisVideoStreamConfig: config,
    });

    this.node.addDependency(props.stream);
  }
}
