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

// src/connect/prompt.fromPromptName.onEvent.ts
var prompt_fromPromptName_onEvent_exports = {};
__export(prompt_fromPromptName_onEvent_exports, {
  onEvent: () => onEvent
});
module.exports = __toCommonJS(prompt_fromPromptName_onEvent_exports);
var import_client_connect = require("@aws-sdk/client-connect");
async function onEvent(event) {
  console.log("event = %o", event);
  if (event.RequestType === "Create" || event.RequestType === "Update") {
    return getPromptArn(event);
  } else if (event.RequestType === "Delete") {
    console.log("No action required for delete");
    return {};
  }
  console.log("Unexpected RequestType");
  return void 0;
}
async function getPromptArn(event) {
  const connect = new import_client_connect.Connect();
  const ret = await connect.listPrompts({
    InstanceId: event.ResourceProperties.Parameters.InstanceId
  });
  console.log(`connect.listPrompts() => %o`, ret);
  if (!ret.PromptSummaryList) {
    return {};
  }
  const prompt = ret.PromptSummaryList.find((p) => {
    return p.Name && p.Name === event.ResourceProperties.Parameters.PromptName;
  });
  console.log(`returning prompt => %o`, prompt);
  return {
    PhysicalResourceId: prompt?.Arn,
    Data: {
      PromptArn: prompt?.Arn,
      PromptId: prompt?.Id
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onEvent
});
