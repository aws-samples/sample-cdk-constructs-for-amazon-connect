import * as path from 'path';
import { Resource, IResource, CustomResource, Stack, Duration } from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as custom_resources from 'aws-cdk-lib/custom-resources';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';
import { IHoursOfOperation } from './hours-of-operation';
import { IInstance, getInstanceArnFromInstanceId } from './instance';
import * as nag_suppressions from '../nag-suppressions';

/**
 * Properties for creating an Amazon Connect queue.
 */
export interface QueueProps {
  /**
   * The Amazon Connect instance to associate with this queue.
   */
  readonly instance: IInstance;

  /**
   * The name of the queue.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly name: string;

  /**
   * An optional description for the queue.
   *
   * Helps document the purpose and usage of the queue.
   */
  readonly description?: string;

  /**
   * The hours of operation for this queue.
   *
   * Determines when the queue is available to receive contacts.
   * Contacts received outside these hours can be handled according
   * to the configured after-hours behavior.
   */
  readonly hoursOfOperation: IHoursOfOperation;

  /**
   * The maximum number of contacts that can be in the queue.
   *
   * When this limit is reached, new contacts will be handled according
   * to the overflow behavior configured in the contact flow.
   *
   * @default No limit
   */
  readonly maxContacts?: number;

  /**
   * Configuration for outbound caller ID when agents make calls from this queue.
   *
   * Specifies the caller ID name and number that will be displayed
   * to customers when agents initiate outbound calls.
   */
  readonly outboundCallerConfig?: connect.CfnQueue.OutboundCallerConfigProperty;

  /**
   * ARNs of quick connects associated with this queue.
   *
   * Quick connects allow agents to quickly transfer customers to
   * predefined destinations like other agents, queues, or external numbers.
   */
  readonly quickConnectArns?: string[];

  /**
   * The status of the queue.
   *
   * Determines whether the queue is active and can receive contacts.
   *
   * @default 'ENABLED'
   */
  readonly status?: string;
}

/**
 * Represents an Amazon Connect queue.
 *
 * A queue holds contacts waiting to be handled by agents and defines
 * routing behavior, capacity limits, and operational hours.
 */
export interface IQueue extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * Used to reference the queue in contact flows, routing profiles,
   * and other Amazon Connect resources.
   */
  readonly queueArn: string;

  /**
   * The unique identifier of the queue.
   *
   * Used to reference the queue within Amazon Connect APIs.
   */
  readonly queueId: string;
}

/**
 * An Amazon Connect queue construct.
 *
 * Queues are fundamental components of contact centers that hold contacts
 * waiting to be handled by available agents. They provide routing logic,
 * capacity management, and operational controls for contact distribution.
 *
 * ## Key Features
 *
 * - **Contact Routing**: Distribute contacts to available agents based on routing profiles
 * - **Capacity Management**: Control maximum queue size and overflow behavior
 * - **Hours of Operation**: Define when the queue accepts contacts
 * - **Quick Connects**: Enable rapid transfers to predefined destinations
 * - **Outbound Configuration**: Set caller ID for agent-initiated calls
 *
 * ## Usage Example
 *
 * ```typescript
 * const queue = new Queue(this, 'CustomerServiceQueue', {
 *   instance: connectInstance,
 *   name: 'Customer Service',
 *   description: 'General customer service inquiries',
 *   hoursOfOperation: businessHours,
 *   maxContacts: 100,
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues.html
 */
export class Queue extends Resource implements IQueue {
  /**
   * Import an existing queue by name.
   *
   * This method creates a reference to an existing queue in your Amazon Connect
   * instance, allowing you to use it in routing profiles and other constructs.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param instanceId - The ID of the Amazon Connect instance
   * @param queueName - The name of the existing queue to import
   * @returns A reference to the existing queue
   */
  public static fromQueueName(scope: Construct, id: string, instanceId: string, queueName: string): IQueue {
    return new ImportedQueue(scope, id, instanceId, queueName);
  }

  /**
   * The Amazon Resource Name (ARN) of the queue.
   */
  public readonly queueArn: string;

  /**
   * The unique identifier of the queue.
   */
  public readonly queueId: string;

  /**
   * Creates a new Amazon Connect queue.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the queue
   */
  constructor(scope: Construct, id: string, props: QueueProps) {
    super(scope, id);

    const queue = new connect.CfnQueue(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      hoursOfOperationArn: props.hoursOfOperation.hoursOfOperationArn,
      maxContacts: props.maxContacts,
      outboundCallerConfig: props.outboundCallerConfig,
      quickConnectArns: props.quickConnectArns,
      status: props.status,
    });

    this.queueId = queue.ref;
    this.queueArn = queue.attrQueueArn;

    this.node.addDependency(props.instance);
    this.node.addDependency(props.hoursOfOperation);
  }
}

class ImportedQueue extends CustomResource implements IQueue {
  public readonly queueArn: string;
  public readonly queueId: string;

  constructor(scope: Construct, id: string, instanceId: string, queueName: string) {
    const provider = ImportedQueueProvider.getInstance(scope);

    super(scope, id, {
      serviceToken: provider.serviceToken,
      properties: {
        Parameters: {
          InstanceId: instanceId,
          QueueName: queueName,
        },
      },
    });
    this.node.addDependency(provider);

    const stack = Stack.of(scope);
    const instanceArn = getInstanceArnFromInstanceId(stack, instanceId);
    provider.addPolicyForInstance(instanceArn);

    this.queueArn = this.getAttString('QueueArn');
    this.queueId = this.getAttString('QueueId');
  }
}

class ImportedQueueProvider extends Construct {
  public static getInstance(scope: Construct): ImportedQueueProvider {
    const stack = Stack.of(scope);
    const uniqueId = 'ImportedQueueProvider';
    return (stack.node.tryFindChild(uniqueId) as ImportedQueueProvider) ?? new ImportedQueueProvider(stack, uniqueId);
  }

  public readonly serviceToken: string;
  private readonly onEventHandler: lambda.IFunction;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const onEventHandler = new NodejsFunction(this, 'OnEventHandler', {
      entry: path.join(__dirname, 'queue.fromQueueName.onEvent.ts'),
      handler: 'onEvent',
      runtime: lambda.Runtime.NODEJS_24_X,
      timeout: Duration.seconds(15),
      description: 'Provider handler for connect.listQueues()',
    });
    this.onEventHandler = onEventHandler;
    nag_suppressions.addNagSuppressionsToLambda(onEventHandler);

    const provider = new custom_resources.Provider(this, 'Provider', {
      onEventHandler,
    });
    this.serviceToken = provider.serviceToken;
    nag_suppressions.addNagSuppressionsToProvider(provider);
  }

  public addPolicyForInstance(instanceArn: string) {
    this.onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['connect:ListQueues'],
        resources: [instanceArn + '/queue/*'],
      }),
    );
    if (this.onEventHandler.role) {
      NagSuppressions.addResourceSuppressions(
        this.onEventHandler.role,
        [
          {
            id: 'AwsSolutions-IAM5',
            reason: 'Wildcard is required to list queues',
          },
        ],
        true,
      );
    }
  }
}
