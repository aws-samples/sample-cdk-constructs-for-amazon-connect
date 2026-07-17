import { Connect, PromptSummary } from '@aws-sdk/client-connect';
import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceUpdateEvent,
} from 'aws-lambda';

export async function onEvent(event: CdkCustomResourceEvent): Promise<CdkCustomResourceResponse | undefined> {
  console.log('event = %o', event);
  if (event.RequestType === 'Create' || event.RequestType === 'Update') {
    return getPromptArn(event);
  } else if (event.RequestType === 'Delete') {
    console.log('No action required for delete');
    return {};
  }
  // This should never happen as we've handled all RequestType values
  console.log('Unexpected RequestType');
  return undefined;
}

async function getPromptArn(
  event: CloudFormationCustomResourceCreateEvent | CloudFormationCustomResourceUpdateEvent,
): Promise<CdkCustomResourceResponse> {
  const connect = new Connect({ maxAttempts: 10, retryMode: 'adaptive' });
  const ret = await connect.listPrompts({
    InstanceId: event.ResourceProperties.Parameters.InstanceId,
  });
  console.log(`connect.listPrompts() => %o`, ret);

  if (!ret.PromptSummaryList) {
    return {};
  }
  const prompt = ret.PromptSummaryList.find((p: PromptSummary) => {
    return p.Name && p.Name === event.ResourceProperties.Parameters.PromptName;
  });

  console.log(`returning prompt => %o`, prompt);
  return {
    PhysicalResourceId: prompt?.Arn,
    Data: {
      PromptArn: prompt?.Arn,
      PromptId: prompt?.Id,
    },
  };
}
