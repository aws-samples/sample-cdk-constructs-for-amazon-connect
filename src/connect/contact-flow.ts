import { Resource, IResource } from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import { Construct } from 'constructs';
import { IInstance } from './instance';

/**
 * Properties for creating a contact flow.
 */
export interface ContactFlowProps {
  /**
   * The Amazon Connect instance to associate with this contact flow.
   */
  readonly instance: IInstance;

  /**
   * The name of the contact flow.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly name: string;

  /**
   * The type of contact flow.
   *
   * Determines how and when the contact flow can be invoked within Amazon Connect.
   */
  readonly type: ContactFlowType;

  /**
   * The JSON content that defines the contact flow logic.
   *
   * This should be a valid contact flow JSON structure that defines the
   * customer interaction logic, including prompts, routing decisions,
   * and integrations with other AWS services.
   */
  readonly content: string;

  /**
   * An optional description for the contact flow.
   *
   * Helps document the purpose and functionality of the contact flow.
   */
  readonly description?: string;
}

/**
 * Types of contact flows supported by Amazon Connect.
 *
 * Each type serves a specific purpose in the customer interaction workflow
 * and has different invocation patterns and capabilities.
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html
 */
export enum ContactFlowType {
  /**
   * Main contact flow that handles incoming customer contacts.
   *
   * This is the primary flow that customers interact with when they
   * contact your center. It can route calls, play prompts, and integrate
   * with other AWS services.
   */
  CONTACT_FLOW = 'CONTACT_FLOW',

  /**
   * Flow that plays while customers wait in a queue.
   *
   * Typically includes hold music, periodic announcements, and
   * estimated wait time information.
   */
  CUSTOMER_QUEUE = 'CUSTOMER_QUEUE',

  /**
   * Flow that plays when customers are placed on hold.
   *
   * Used during agent-initiated holds, different from queue hold.
   */
  CUSTOMER_HOLD = 'CUSTOMER_HOLD',

  /**
   * Flow that plays to customers before connecting to an agent.
   *
   * Often used to provide information or instructions to customers
   * before the agent conversation begins.
   */
  CUSTOMER_WHISPER = 'CUSTOMER_WHISPER',

  /**
   * Flow that plays to agents when they are placed on hold.
   *
   * Provides information or instructions to agents during hold periods.
   */
  AGENT_HOLD = 'AGENT_HOLD',

  /**
   * Flow that plays to agents before connecting to a customer.
   *
   * Provides context, customer information, or instructions to agents
   * before the customer conversation begins.
   */
  AGENT_WHISPER = 'AGENT_WHISPER',

  /**
   * Flow that plays to agents before making outbound calls.
   *
   * Used in outbound calling scenarios to provide context or
   * instructions to agents.
   */
  OUTBOUND_WHISPER = 'OUTBOUND_WHISPER',

  /**
   * Flow that handles agent-to-agent transfers.
   *
   * Manages the logic for transferring customers between agents,
   * including warm and cold transfers.
   */
  AGENT_TRANSFER = 'AGENT_TRANSFER',

  /**
   * Flow that handles transfers to queues.
   *
   * Manages the logic for moving customers between different queues
   * within the contact center.
   */
  QUEUE_TRANSFER = 'QUEUE_TRANSFER',

  /**
   * Flow used for outbound campaign calls.
   *
   * Specifically designed for outbound marketing or service campaigns
   * with specialized routing and handling logic.
   */
  CAMPAIGN = 'CAMPAIGN',
}

/**
 * Represents an Amazon Connect contact flow.
 *
 * A contact flow defines the customer experience and interaction logic
 * within your contact center, including routing decisions, prompts,
 * and integrations with other services.
 */
export interface IContactFlow extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the contact flow.
   *
   * Used to reference the contact flow in other AWS services and
   * IAM policies.
   */
  readonly contactFlowArn: string;

  /**
   * The unique identifier of the contact flow.
   *
   * Used to reference the contact flow within Amazon Connect APIs
   * and other contact flows.
   */
  readonly contactFlowId: string;
}

/**
 * An Amazon Connect contact flow construct.
 *
 * Contact flows define the customer experience by orchestrating interactions
 * between customers, agents, and automated systems. They control call routing,
 * play prompts, collect input, and integrate with external services.
 *
 * ## Key Features
 *
 * - **Visual Logic**: Define customer interaction paths using drag-and-drop interface
 * - **Dynamic Routing**: Route contacts based on customer input, agent availability, or business rules
 * - **Service Integration**: Connect with Lambda functions, Lex bots, and other AWS services
 * - **Multi-channel**: Support voice, chat, and task interactions
 *
 * ## Usage Example
 *
 * ```typescript
 * const contactFlow = new ContactFlow(this, 'MainFlow', {
 *   instance: connectInstance,
 *   name: 'Main Customer Flow',
 *   type: ContactFlowType.CONTACT_FLOW,
 *   content: JSON.stringify(contactFlowDefinition),
 *   description: 'Primary customer interaction flow',
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html
 */
export class ContactFlow extends Resource implements IContactFlow {
  /**
   * The Amazon Resource Name (ARN) of the contact flow.
   */
  public readonly contactFlowArn: string;

  /**
   * The unique identifier of the contact flow.
   */
  public readonly contactFlowId: string;

  /**
   * Creates a new Amazon Connect contact flow.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the contact flow
   */
  constructor(scope: Construct, id: string, props: ContactFlowProps) {
    super(scope, id);

    const contactFlow = new connect.CfnContactFlow(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      type: props.type,
      content: props.content,
      description: props.description,
    });

    this.contactFlowId = contactFlow.ref;
    this.contactFlowArn = contactFlow.attrContactFlowArn;

    this.node.addDependency(props.instance);
  }
}
