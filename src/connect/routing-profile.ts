import * as connect from 'aws-cdk-lib/aws-connect';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IInstance } from './instance';
import { IQueue } from './queue';

/**
 * Communication channels supported by Amazon Connect.
 *
 * Each channel represents a different way customers can interact
 * with your contact center.
 */
export enum ChannelType {
  /**
   * Voice calls (inbound and outbound).
   *
   * Traditional phone conversations between customers and agents.
   */
  VOICE = 'VOICE',

  /**
   * Text-based chat conversations.
   *
   * Real-time messaging between customers and agents through
   * web chat, mobile apps, or other messaging platforms.
   */
  CHAT = 'CHAT',

  /**
   * Task-based interactions.
   *
   * Work items that don't require real-time customer interaction,
   * such as follow-up activities, case reviews, or administrative tasks.
   */
  TASK = 'TASK',

  /**
   * Email communications.
   *
   * Asynchronous email exchanges between customers and agents.
   */
  EMAIL = 'EMAIL',
}

/**
 * Media concurrency configuration for a routing profile.
 *
 * Defines how many simultaneous contacts an agent can handle
 * for each communication channel.
 */
export interface MediaConcurrency {
  /**
   * The communication channel type.
   */
  readonly channel: ChannelType;

  /**
   * The maximum number of simultaneous contacts for this channel.
   *
   * For voice, this is typically 1. For chat, task, and email,
   * agents can often handle multiple simultaneous contacts.
   */
  readonly concurrency: number;
}

/**
 * Queue configuration for a routing profile.
 *
 * Defines how contacts from specific queues are routed to agents
 * with this routing profile.
 */
export interface RoutingProfileQueueConfig {
  /**
   * The queue to include in this routing profile.
   */
  readonly queue: IQueue;

  /**
   * The priority of this queue relative to other queues.
   *
   * Lower numbers indicate higher priority. Contacts from higher
   * priority queues are routed to agents first.
   */
  readonly priority: number;

  /**
   * The delay in seconds before routing contacts from this queue.
   *
   * Allows for prioritization by introducing delays for lower
   * priority queues.
   */
  readonly delay: number;

  /**
   * The channel type for contacts from this queue.
   *
   * Must match one of the channels configured in the routing
   * profile's media concurrency settings.
   */
  readonly channel: ChannelType;
}

/**
 * Properties for creating a routing profile.
 */
export interface RoutingProfileProps {
  /**
   * The Amazon Connect instance to associate with this routing profile.
   */
  readonly instance: IInstance;

  /**
   * The name of the routing profile.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly routingProfileName: string;

  /**
   * A description of the routing profile.
   *
   * Helps document the purpose and usage of the routing profile.
   */
  readonly description: string;

  /**
   * The default queue for outbound calls made by agents with this profile.
   *
   * When agents initiate outbound calls, they will be associated
   * with this queue for reporting and routing purposes.
   */
  readonly defaultOutboundQueue: IQueue;

  /**
   * Media concurrency settings for each channel type.
   *
   * Defines how many simultaneous contacts agents can handle
   * for voice, chat, task, and email channels.
   */
  readonly mediaConcurrencies: MediaConcurrency[];

  /**
   * Queue configurations that define which queues agents can handle.
   *
   * Each configuration specifies a queue, its priority, routing delay,
   * and the channel type for contacts from that queue.
   */
  readonly queueConfigs?: RoutingProfileQueueConfig[];
}

/**
 * Represents an Amazon Connect routing profile.
 *
 * A routing profile determines which queues agents can receive contacts from
 * and how many simultaneous contacts they can handle across different channels.
 */
export interface IRoutingProfile extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   *
   * Used to reference the routing profile in user configurations
   * and other Amazon Connect resources.
   */
  readonly routingProfileArn: string;

  /**
   * The unique identifier of the routing profile.
   *
   * Used to reference the routing profile within Amazon Connect APIs.
   */
  readonly routingProfileId: string;
}

/**
 * An Amazon Connect routing profile construct.
 *
 * Routing profiles control how contacts are distributed to agents by defining
 * queue assignments, channel concurrency limits, and routing priorities.
 * They are essential for managing agent workload and ensuring efficient
 * contact distribution.
 *
 * ## Key Features
 *
 * - **Queue Assignment**: Define which queues agents can receive contacts from
 * - **Media Concurrency**: Control simultaneous contact limits per channel
 * - **Priority Routing**: Set queue priorities and routing delays
 * - **Multi-channel Support**: Handle voice, chat, task, and email contacts
 * - **Outbound Configuration**: Set default queue for agent-initiated calls
 *
 * ## Usage Example
 *
 * ```typescript
 * const routingProfile = new RoutingProfile(this, 'CustomerServiceProfile', {
 *   instance: connectInstance,
 *   routingProfileName: 'Customer Service Agents',
 *   description: 'Routing profile for general customer service',
 *   defaultOutboundQueue: outboundQueue,
 *   mediaConcurrencies: [
 *     { channel: ChannelType.VOICE, concurrency: 1 },
 *     { channel: ChannelType.CHAT, concurrency: 3 },
 *     { channel: ChannelType.TASK, concurrency: 5 },
 *   ],
 *   queueConfigs: [
 *     {
 *       queue: customerServiceQueue,
 *       priority: 1,
 *       delay: 0,
 *       channel: ChannelType.VOICE,
 *     },
 *   ],
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html
 */
export class RoutingProfile extends Resource implements IRoutingProfile {
  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   */
  public readonly routingProfileArn: string;

  /**
   * The unique identifier of the routing profile.
   */
  public readonly routingProfileId: string;

  /**
   * Creates a new Amazon Connect routing profile.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the routing profile
   */
  constructor(scope: Construct, id: string, props: RoutingProfileProps) {
    super(scope, id);

    const routingProfile = new connect.CfnRoutingProfile(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.routingProfileName,
      description: props.description,
      defaultOutboundQueueArn: props.defaultOutboundQueue.queueArn,
      mediaConcurrencies: props.mediaConcurrencies.map((mediaConcurrency) => ({
        channel: mediaConcurrency.channel,
        concurrency: mediaConcurrency.concurrency,
      })),
      queueConfigs: props.queueConfigs?.map((queueConfig) => ({
        priority: queueConfig.priority,
        delay: queueConfig.delay,
        queueReference: {
          queueArn: queueConfig.queue.queueArn,
          channel: queueConfig.channel,
        },
      })),
    });

    this.routingProfileId = routingProfile.ref;
    this.routingProfileArn = routingProfile.attrRoutingProfileArn;

    this.node.addDependency(props.instance);
    this.node.addDependency(props.defaultOutboundQueue);
  }
}
