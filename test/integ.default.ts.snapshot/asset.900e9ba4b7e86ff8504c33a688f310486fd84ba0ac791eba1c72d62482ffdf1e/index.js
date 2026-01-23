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

// src/connect/l1-integration-association.onEvent.ts
var l1_integration_association_onEvent_exports = {};
__export(l1_integration_association_onEvent_exports, {
  onEvent: () => onEvent
});
module.exports = __toCommonJS(l1_integration_association_onEvent_exports);
var import_client_connect = require("@aws-sdk/client-connect");
var connectClient = new import_client_connect.ConnectClient();
async function onEvent(event) {
  console.log("event = %o", event);
  if (event.RequestType === "Create") {
    return createIntegrationAssociation(event);
  } else if (event.RequestType === "Update") {
    await deleteIntegrationAssociation(event);
    return createIntegrationAssociation(event);
  } else if (event.RequestType === "Delete") {
    return deleteIntegrationAssociation(event);
  }
  console.log("Unexpected RequestType");
  return void 0;
}
async function createIntegrationAssociation(event) {
  const cfnParams = event.ResourceProperties.Parameters;
  const instanceId = cfnParams.instanceId.split("/").pop();
  if (!instanceId) {
    throw new Error("Failed to extract instance ID from ARN: " + cfnParams.instanceId);
  }
  const command = new import_client_connect.CreateIntegrationAssociationCommand({
    InstanceId: instanceId,
    IntegrationType: cfnParams.integrationType,
    IntegrationArn: cfnParams.integrationArn
  });
  const response = await connectClient.send(command);
  console.log(`connect.createIntegrationAssociation() => %o`, response);
  return {
    PhysicalResourceId: response.IntegrationAssociationId,
    Data: {
      IntegrationAssociationId: response.IntegrationAssociationId,
      IntegrationAssociationArn: response.IntegrationAssociationArn
    }
  };
}
async function deleteIntegrationAssociation(event) {
  const associationId = event.PhysicalResourceId;
  const cfnParams = event.ResourceProperties.Parameters;
  const instanceId = cfnParams.instanceId.split("/").pop();
  if (!instanceId) {
    throw new Error("Failed to extract instance ID from ARN: " + cfnParams.instanceId);
  }
  try {
    const command = new import_client_connect.DeleteIntegrationAssociationCommand({
      InstanceId: instanceId,
      IntegrationAssociationId: associationId
    });
    const response = await connectClient.send(command);
    console.log(`connect.deleteIntegrationAssociation() => %o`, response);
  } catch (error) {
    console.error("Error during integration association deletion:", error);
  }
  return {
    Data: {
      IntegrationAssociationId: associationId
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onEvent
});
