import { Connect, QueueSummary } from '@aws-sdk/client-connect';
import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceUpdateEvent,
} from 'aws-lambda';

export async function onEvent(event: CdkCustomResourceEvent): Promise<CdkCustomResourceResponse | undefined> {
  console.log('event = %o', event);
  if (event.RequestType === 'Create' || event.RequestType === 'Update') {
    return getQueueArn(event);
  } else if (event.RequestType === 'Delete') {
    console.log('No action required for delete');
    return {};
  }
  // This should never happen as we've handled all RequestType values
  console.log('Unexpected RequestType');
  return undefined;
}

async function getQueueArn(
  event: CloudFormationCustomResourceCreateEvent | CloudFormationCustomResourceUpdateEvent,
): Promise<CdkCustomResourceResponse> {
  const connect = new Connect({ maxAttempts: 10, retryMode: 'adaptive' });
  const ret = await connect.listQueues({
    InstanceId: event.ResourceProperties.Parameters.InstanceId,
  });
  console.log(`connect.listQueues() => %o`, ret);

  if (!ret.QueueSummaryList) {
    return {};
  }
  const queue = ret.QueueSummaryList.find((q: QueueSummary) => {
    return q.Name && q.Name === event.ResourceProperties.Parameters.QueueName;
  });

  console.log(`returning queue => %o`, queue);
  return {
    PhysicalResourceId: queue?.Arn,
    Data: {
      QueueArn: queue?.Arn,
      QueueId: queue?.Id,
    },
  };
}
