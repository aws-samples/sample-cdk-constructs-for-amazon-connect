"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/connect/l1-instance-storage-config.onEvent.ts
var l1_instance_storage_config_onEvent_exports = {};
__export(l1_instance_storage_config_onEvent_exports, {
  onEvent: () => onEvent
});
module.exports = __toCommonJS(l1_instance_storage_config_onEvent_exports);
var import_client_connect = require("@aws-sdk/client-connect");
var connectClient = new import_client_connect.ConnectClient({ maxAttempts: 10, retryMode: "adaptive" });
function isResourceNotFoundError(error) {
  const name = error?.name ?? "";
  const message = error?.message ?? "";
  return name === "ResourceNotFoundException" || /not found/i.test(message);
}
async function onEvent(event) {
  console.log("event = %o", event);
  if (event.RequestType === "Create") {
    return associateInstanceStorageConfig(event);
  } else if (event.RequestType === "Update") {
    return updateInstanceStorageConfig(event);
  } else if (event.RequestType === "Delete") {
    return disassociateInstanceStorageConfig(event);
  }
  console.log("Unexpected RequestType");
  return void 0;
}
async function associateInstanceStorageConfig(event) {
  const cfnParams = event.ResourceProperties.Parameters;
  const sdkParams = convertCfnParamsToSdkParams(cfnParams);
  const ret = await connectClient.send(new import_client_connect.AssociateInstanceStorageConfigCommand(sdkParams));
  console.log(`connect.associateInstanceStorageConfig() => %o`, ret);
  return {
    PhysicalResourceId: ret.AssociationId,
    Data: {
      AssociationId: ret.AssociationId
    }
  };
}
async function updateInstanceStorageConfig(event) {
  const associationId = event.PhysicalResourceId;
  const cfnParams = event.ResourceProperties.Parameters;
  const sdkParams = convertCfnParamsToSdkParams(cfnParams);
  const ret = await connectClient.send(
    new import_client_connect.UpdateInstanceStorageConfigCommand({
      ...sdkParams,
      AssociationId: associationId
    })
  );
  console.log(`connect.updateInstanceStorageConfig() => %o`, ret);
  return {
    Data: {
      AssociationId: associationId
    }
  };
}
async function disassociateInstanceStorageConfig(event) {
  const associationId = event.PhysicalResourceId;
  const cfnParams = event.ResourceProperties.Parameters;
  const sdkParams = convertCfnParamsToSdkParams(cfnParams);
  try {
    const ret = await connectClient.send(
      new import_client_connect.DisassociateInstanceStorageConfigCommand({
        ...sdkParams,
        AssociationId: associationId
      })
    );
    console.log(`connect.disassociateInstanceStorageConfig() => %o`, ret);
  } catch (error) {
    if (isResourceNotFoundError(error)) {
      console.log("Storage config association already absent, treating delete as success: %o", error);
    } else {
      throw error;
    }
  }
  return {
    Data: {
      AssociationId: associationId
    }
  };
}
function convertCfnParamsToSdkParams(props) {
  const instanceId = props.instanceArn.split("/").pop();
  if (!instanceId) {
    throw new Error("Failed to extract instance ID from ARN: " + props.instanceArn);
  }
  const resourceType = props.resourceType;
  if (props.s3Config) {
    if (props.storageType !== "S3") {
      throw new Error(`Storage type mismatch: expected S3, got ${props.storageType}`);
    }
    const s3Config = props.s3Config;
    const encryptionConfig = s3Config.encryptionConfig;
    return {
      InstanceId: instanceId,
      ResourceType: resourceType,
      StorageConfig: {
        StorageType: "S3",
        S3Config: {
          BucketName: s3Config.bucketName,
          BucketPrefix: s3Config.bucketPrefix,
          EncryptionConfig: encryptionConfig ? {
            EncryptionType: "KMS",
            KeyId: encryptionConfig.keyId
          } : void 0
        }
      }
    };
  } else if (props.kinesisVideoStreamConfig) {
    if (props.storageType !== "KINESIS_VIDEO_STREAM") {
      throw new Error(`Storage type mismatch: expected KINESIS_VIDEO_STREAM, got ${props.storageType}`);
    }
    const kinesisVideoStreamConfig = props.kinesisVideoStreamConfig;
    const encryptionConfig = kinesisVideoStreamConfig.encryptionConfig;
    return {
      InstanceId: instanceId,
      ResourceType: resourceType,
      StorageConfig: {
        StorageType: "KINESIS_VIDEO_STREAM",
        KinesisVideoStreamConfig: {
          Prefix: kinesisVideoStreamConfig.prefix,
          RetentionPeriodHours: kinesisVideoStreamConfig.retentionPeriodHours,
          EncryptionConfig: {
            EncryptionType: "KMS",
            KeyId: encryptionConfig.keyId
          }
        }
      }
    };
  } else if (props.kinesisStreamConfig) {
    if (props.storageType !== "KINESIS_STREAM") {
      throw new Error(`Storage type mismatch: expected KINESIS_STREAM, got ${props.storageType}`);
    }
    const kinesisStreamConfig = props.kinesisStreamConfig;
    return {
      InstanceId: instanceId,
      ResourceType: resourceType,
      StorageConfig: {
        StorageType: "KINESIS_STREAM",
        KinesisStreamConfig: {
          StreamArn: kinesisStreamConfig.streamArn
        }
      }
    };
  } else if (props.kinesisFirehoseConfig) {
    if (props.storageType !== "KINESIS_FIREHOSE") {
      throw new Error(`Storage type mismatch: expected KINESIS_FIREHOSE, got ${props.storageType}`);
    }
    const kinesisFirehoseConfig = props.kinesisFirehoseConfig;
    return {
      InstanceId: instanceId,
      ResourceType: resourceType,
      StorageConfig: {
        StorageType: "KINESIS_FIREHOSE",
        KinesisFirehoseConfig: {
          FirehoseArn: kinesisFirehoseConfig.firehoseArn
        }
      }
    };
  }
  throw new Error("No storage config provided");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onEvent
});
