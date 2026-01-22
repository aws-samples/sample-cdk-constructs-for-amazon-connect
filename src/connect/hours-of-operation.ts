import { Resource, IResource } from 'aws-cdk-lib';
import * as connect from 'aws-cdk-lib/aws-connect';
import { Construct } from 'constructs';
import { IInstance } from './instance';

/**
 * Properties for creating hours of operation.
 */
export interface HoursOfOperationProps {
  /**
   * The Amazon Connect instance to associate with these hours of operation.
   */
  readonly instance: IInstance;

  /**
   * The name of the hours of operation.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly name: string;

  /**
   * An optional description for the hours of operation.
   *
   * Helps document the purpose and usage of these operating hours.
   */
  readonly description?: string;

  /**
   * The time zone for the hours of operation.
   *
   * Must be a valid IANA time zone identifier (e.g., 'America/New_York',
   * 'Europe/London', 'Asia/Tokyo'). All times in the configuration
   * will be interpreted in this time zone.
   *
   * @example 'America/New_York'
   * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   */
  readonly timeZone: string;

  /**
   * The configuration defining operating hours for each day.
   *
   * Each configuration entry specifies the day of the week and
   * the start/end times when the associated queues are operational.
   * Multiple time ranges can be specified for each day to handle
   * split shifts or lunch breaks.
   */
  readonly config: connect.CfnHoursOfOperation.HoursOfOperationConfigProperty[];
}

/**
 * Represents Amazon Connect hours of operation.
 *
 * Hours of operation define when queues are available to receive contacts
 * and when agents are expected to be available for customer interactions.
 */
export interface IHoursOfOperation extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the hours of operation.
   *
   * Used to reference the hours of operation in queue configurations
   * and other Amazon Connect resources.
   */
  readonly hoursOfOperationArn: string;

  /**
   * The unique identifier of the hours of operation.
   *
   * Used to reference the hours of operation within Amazon Connect APIs.
   */
  readonly hoursOfOperationId: string;
}

/**
 * An Amazon Connect hours of operation construct.
 *
 * Hours of operation define the schedule when your contact center queues
 * are available to receive and process customer contacts. They control
 * queue availability and can trigger different behaviors for contacts
 * received during and outside of business hours.
 *
 * ## Key Features
 *
 * - **Time Zone Support**: Configure operating hours in any IANA time zone
 * - **Daily Schedules**: Set different hours for each day of the week
 * - **Multiple Time Ranges**: Support split shifts and break periods
 * - **Queue Integration**: Automatically control queue availability
 * - **After-Hours Handling**: Enable different contact flow behavior outside business hours
 *
 * ## Usage Example
 *
 * ```typescript
 * const businessHours = new HoursOfOperation(this, 'BusinessHours', {
 *   instance: connectInstance,
 *   name: 'Standard Business Hours',
 *   description: 'Monday-Friday 9 AM to 5 PM EST',
 *   timeZone: 'America/New_York',
 *   config: [
 *     {
 *       day: 'MONDAY',
 *       startTime: { hours: 9, minutes: 0 },
 *       endTime: { hours: 17, minutes: 0 },
 *     },
 *     // ... other days
 *   ],
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html
 */
export class HoursOfOperation extends Resource implements IHoursOfOperation {
  /**
   * The Amazon Resource Name (ARN) of the hours of operation.
   */
  public readonly hoursOfOperationArn: string;

  /**
   * The unique identifier of the hours of operation.
   */
  public readonly hoursOfOperationId: string;

  /**
   * Creates new Amazon Connect hours of operation.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the hours of operation
   */
  constructor(scope: Construct, id: string, props: HoursOfOperationProps) {
    super(scope, id);

    const hoursOfOperation = new connect.CfnHoursOfOperation(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      timeZone: props.timeZone,
      config: props.config,
    });

    this.hoursOfOperationId = hoursOfOperation.ref;
    this.hoursOfOperationArn = hoursOfOperation.attrHoursOfOperationArn;

    this.node.addDependency(props.instance);
  }
}
