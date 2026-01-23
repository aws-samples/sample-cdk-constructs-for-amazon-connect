import { ConnectCasesClient, CreateDomainCommand, DeleteDomainCommand } from '@aws-sdk/client-connectcases';
import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceUpdateEvent,
  CloudFormationCustomResourceDeleteEvent,
} from 'aws-lambda';

const casesClient = new ConnectCasesClient();

export async function onEvent(event: CdkCustomResourceEvent): Promise<CdkCustomResourceResponse> {
  console.log('event = %o', event);
  if (event.RequestType === 'Create') {
    return createDomain(event);
  } else if (event.RequestType === 'Update') {
    // Connect Cases doesn't support updating domains, so we'll just return the current state
    return getDomainInfo(event);
  } else if (event.RequestType === 'Delete') {
    return deleteDomain(event);
  }
  throw Error('Unexpected RequestType');
}

async function createDomain(event: CloudFormationCustomResourceCreateEvent): Promise<CdkCustomResourceResponse> {
  const props = event.ResourceProperties.Parameters as { name: string };

  const response = await casesClient.send(
    new CreateDomainCommand({
      name: props.name,
    }),
  );

  console.log(`connectcases.createDomain() => %o`, response);

  return {
    PhysicalResourceId: response.domainId,
    Data: {
      DomainId: response.domainId,
    },
  };
}

async function getDomainInfo(event: CloudFormationCustomResourceUpdateEvent): Promise<CdkCustomResourceResponse> {
  const domainId = event.PhysicalResourceId;

  // Since there's no direct GetDomain API, we'll just return the domain ID
  return {
    PhysicalResourceId: domainId,
    Data: {
      DomainId: domainId,
    },
  };
}

async function deleteDomain(event: CloudFormationCustomResourceDeleteEvent): Promise<CdkCustomResourceResponse> {
  const domainId = event.PhysicalResourceId;

  const response = await casesClient.send(
    new DeleteDomainCommand({
      domainId: domainId,
    }),
  );

  console.log(`connectcases.deleteDomain() => %o`, response);

  return {
    PhysicalResourceId: domainId,
    Data: {},
  };
}
