import * as path from 'path';
import { Resource, IResource, CustomResource, Stack, Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { CasesDomainAssociation, CasesDomainAssociationOptions } from '../connect/integration-association';
import * as nag_suppressions from '../nag-suppressions';

export interface DomainProps {
  readonly name: string;
}

export interface IDomain extends IResource {
  readonly domainArn: string;
  readonly domainId: string;
}

export class Domain extends Resource implements IDomain {
  public readonly domainArn: string;
  public readonly domainId: string;

  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    const provider = DomainProvider.getInstance(this);
    const resource = new CustomResource(this, 'Resource', {
      serviceToken: provider.serviceToken,
      properties: {
        Parameters: props,
      },
    });
    resource.node.addDependency(provider);

    this.domainId = resource.getAttString('DomainId');

    const stack = Stack.of(this);
    this.domainArn = `arn:aws:cases:${stack.region}:${stack.account}:domain/${this.domainId}`;
  }

  /**
   * Adds an integration association between this Cases domain and an Amazon Connect instance.
   *
   * This method creates a CasesDomainAssociation that enables the Cases domain
   * to be integrated with Amazon Connect, allowing agents to create and manage
   * customer cases directly from the Connect interface.
   *
   * @param id - The construct ID for the integration association
   * @param options - Configuration options containing the Connect instance
   * @returns The created Cases domain integration association
   */
  public addIntegrationAssociation(id: string, options: CasesDomainAssociationOptions): CasesDomainAssociation {
    return new CasesDomainAssociation(this, id, {
      instance: options.instance,
      domain: this,
    });
  }
}

class DomainProvider extends Construct {
  public static getInstance(scope: Construct): DomainProvider {
    const stack = Stack.of(scope);
    const uniqueId = 'ConnectCasesDomainProvider';
    return (stack.node.tryFindChild(uniqueId) as DomainProvider) ?? new DomainProvider(stack, uniqueId);
  }

  public readonly serviceToken: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const onEventHandler = new NodejsFunction(this, 'OnEventHandler', {
      entry: path.join(__dirname, 'domain.onEvent.ts'),
      handler: 'onEvent',
      runtime: Runtime.NODEJS_22_X,
      timeout: Duration.seconds(15),
      description: 'Provider handler for ConnectCases domain operations',
      bundling: {
        externalModules: ['aws-sdk'],
      },
    });

    onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['cases:CreateDomain', 'cases:DeleteDomain', 'cases:GetDomain'],
        resources: ['*'],
      }),
    );

    nag_suppressions.addNagSuppressionsToLambda(onEventHandler);
    NagSuppressions.addResourceSuppressions(
      onEventHandler,
      [
        {
          id: 'AwsSolutions-IAM5',
          reason: 'onEventHandler needs to access dynamically created ConnectCases resources',
        },
      ],
      true,
    );

    const provider = new Provider(this, 'Provider', {
      onEventHandler,
    });

    this.serviceToken = provider.serviceToken;
    nag_suppressions.addNagSuppressionsToProvider(provider);
  }
}
