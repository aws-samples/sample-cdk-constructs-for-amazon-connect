import {
  ConnectClient,
  CreateIntegrationAssociationCommand,
  DeleteIntegrationAssociationCommand,
  IntegrationType,
} from '@aws-sdk/client-connect';
import * as connect from 'aws-cdk-lib/aws-connect';
import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceUpdateEvent,
  CloudFormationCustomResourceDeleteEvent,
} from 'aws-lambda';

// Use adaptive retries so parallel Connect API calls tolerate throttling
// (TooManyRequestsException) via client-side backoff.
const connectClient = new ConnectClient({ maxAttempts: 10, retryMode: 'adaptive' });

export async function onEvent(event: CdkCustomResourceEvent): Promise<CdkCustomResourceResponse | undefined> {
  console.log('event = %o', event);
  if (event.RequestType === 'Create') {
    return createIntegrationAssociation(event);
  } else if (event.RequestType === 'Update') {
    // For updates, delete the old association and create a new one
    await deleteIntegrationAssociation(event);
    return createIntegrationAssociation(event);
  } else if (event.RequestType === 'Delete') {
    return deleteIntegrationAssociation(event);
  }
  // This should never happen as we've handled all RequestType values
  console.log('Unexpected RequestType');
  return undefined;
}

async function createIntegrationAssociation(
  event: CloudFormationCustomResourceCreateEvent | CloudFormationCustomResourceUpdateEvent,
): Promise<CdkCustomResourceResponse> {
  const cfnParams = event.ResourceProperties.Parameters as connect.CfnIntegrationAssociationProps;

  // Extract instance ID from ARN
  const instanceId = (cfnParams.instanceId as string).split('/').pop(); // TODO: remove cast
  if (!instanceId) {
    throw new Error('Failed to extract instance ID from ARN: ' + cfnParams.instanceId);
  }

  const command = new CreateIntegrationAssociationCommand({
    InstanceId: instanceId,
    IntegrationType: cfnParams.integrationType as IntegrationType,
    IntegrationArn: cfnParams.integrationArn,
  });

  const response = await connectClient.send(command);
  console.log(`connect.createIntegrationAssociation() => %o`, response);

  return {
    PhysicalResourceId: response.IntegrationAssociationId,
    Data: {
      IntegrationAssociationId: response.IntegrationAssociationId,
      IntegrationAssociationArn: response.IntegrationAssociationArn,
    },
  };
}

async function deleteIntegrationAssociation(
  event: CloudFormationCustomResourceUpdateEvent | CloudFormationCustomResourceDeleteEvent,
): Promise<CdkCustomResourceResponse> {
  const associationId = event.PhysicalResourceId;

  const cfnParams = event.ResourceProperties.Parameters as connect.CfnIntegrationAssociationProps;

  // Extract instance ID from ARN
  const instanceId = (cfnParams.instanceId as string).split('/').pop(); // TODO: remove cast
  if (!instanceId) {
    throw new Error('Failed to extract instance ID from ARN: ' + cfnParams.instanceId);
  }

  try {
    const command = new DeleteIntegrationAssociationCommand({
      InstanceId: instanceId,
      IntegrationAssociationId: associationId,
    });

    const response = await connectClient.send(command);
    console.log(`connect.deleteIntegrationAssociation() => %o`, response);
  } catch (error) {
    console.error('Error during integration association deletion:', error);
    // Don't throw on deletion errors to allow stack deletion to proceed
  }

  return {
    Data: {
      IntegrationAssociationId: associationId,
    },
  };
}
