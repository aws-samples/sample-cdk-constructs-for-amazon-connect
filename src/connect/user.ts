import * as connect from 'aws-cdk-lib/aws-connect';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IInstance } from './instance';
import { IRoutingProfile } from './routing-profile';
import { ISecurityProfile } from './security-profile';

/**
 * Phone types supported for Amazon Connect users.
 *
 * Determines how agents will handle voice interactions within the contact center.
 */
export enum PhoneType {
  /**
   * Software-based phone using the agent's computer.
   *
   * Agents use the Contact Control Panel (CCP) in their web browser
   * to handle voice calls. No physical phone hardware required.
   */
  SOFT_PHONE = 'SOFT_PHONE',

  /**
   * Physical desk phone connected to the agent's workstation.
   *
   * Agents use a traditional desk phone for voice interactions while
   * using the CCP for call control and customer information.
   */
  DESK_PHONE = 'DESK_PHONE',
}

/**
 * Phone configuration for an Amazon Connect user.
 *
 * Defines how the user will handle voice interactions and telephony settings.
 */
export interface UserPhoneConfiguration {
  /**
   * The type of phone the user will use.
   *
   * Determines whether the agent uses a software phone through their
   * browser or a physical desk phone.
   */
  readonly phoneType: PhoneType;

  /**
   * Time limit in seconds for after contact work (ACW).
   *
   * ACW is the time agents have to complete work related to a contact
   * after the contact ends, such as updating records or scheduling follow-ups.
   *
   * @default No limit
   */
  readonly afterContactWorkTimeLimit?: number;

  /**
   * Whether to automatically accept incoming calls.
   *
   * When enabled, calls are automatically connected to the agent without
   * requiring them to manually accept each call.
   *
   * @default false
   */
  readonly autoAccept?: boolean;

  /**
   * The desk phone number when using DESK_PHONE type.
   *
   * Required when phoneType is DESK_PHONE. Should be in E.164 format
   * (e.g., +1234567890).
   */
  readonly deskPhoneNumber?: string;
}

/**
 * Properties for creating an Amazon Connect user.
 */
export interface UserProps {
  /**
   * The Amazon Connect instance to associate with this user.
   */
  readonly instance: IInstance;

  /**
   * The username for the user account.
   *
   * Must be unique within the Amazon Connect instance and follow
   * the instance's identity management requirements.
   */
  readonly username: string;

  /**
   * The password for the user account.
   *
   * Required when using CONNECT_MANAGED identity management.
   * Not used with SAML or EXISTING_DIRECTORY identity management.
   */
  readonly password?: string;

  /**
   * Identity information for the user.
   *
   * Includes personal details like first name, last name, and email address.
   * Used for display purposes and contact information.
   */
  readonly identityInfo?: connect.CfnUser.UserIdentityInfoProperty;

  /**
   * Phone configuration for the user.
   *
   * Defines how the user will handle voice interactions, including
   * phone type, auto-accept settings, and after-contact work time limits.
   */
  readonly phoneConfig: UserPhoneConfiguration;

  /**
   * Security profiles assigned to the user.
   *
   * Security profiles define what permissions and access the user has
   * within Amazon Connect. Users can have multiple security profiles.
   */
  readonly securityProfiles: ISecurityProfile[];

  /**
   * The routing profile assigned to the user.
   *
   * Determines which queues the user can handle contacts from and
   * their media concurrency settings (voice, chat, task).
   */
  readonly routingProfile: IRoutingProfile;
}

/**
 * Represents an Amazon Connect user.
 *
 * A user represents an agent or administrator who can log into Amazon Connect
 * and handle customer contacts or perform administrative tasks.
 */
export interface IUser extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * Used to reference the user in IAM policies and other AWS services.
   */
  readonly userArn: string;

  /**
   * The unique identifier of the user.
   *
   * Used to reference the user within Amazon Connect APIs.
   */
  readonly userId: string;
}

/**
 * An Amazon Connect user construct.
 *
 * Users represent agents and administrators who interact with your contact center.
 * They define authentication, permissions, routing capabilities, and telephony
 * configuration for individuals accessing Amazon Connect.
 *
 * ## Key Features
 *
 * - **Identity Management**: Support for Connect-managed, SAML, or directory-based authentication
 * - **Security Profiles**: Fine-grained permission control through security profiles
 * - **Routing Configuration**: Queue assignments and media handling capabilities
 * - **Phone Configuration**: Flexible telephony options (soft phone or desk phone)
 * - **After Contact Work**: Configurable time for post-contact activities
 *
 * ## Usage Example
 *
 * ```typescript
 * const agent = new User(this, 'CustomerServiceAgent', {
 *   instance: connectInstance,
 *   username: 'john.doe',
 *   identityInfo: {
 *     firstName: 'John',
 *     lastName: 'Doe',
 *     email: 'john.doe@example.com',
 *   },
 *   phoneConfig: {
 *     phoneType: PhoneType.SOFT_PHONE,
 *     autoAccept: true,
 *     afterContactWorkTimeLimit: 300,
 *   },
 *   securityProfiles: [agentSecurityProfile],
 *   routingProfile: customerServiceRoutingProfile,
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html
 */
export class User extends Resource implements IUser {
  /**
   * The Amazon Resource Name (ARN) of the user.
   */
  public readonly userArn: string;

  /**
   * The unique identifier of the user.
   */
  public readonly userId: string;

  /**
   * Creates a new Amazon Connect user.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the user
   */
  constructor(scope: Construct, id: string, props: UserProps) {
    super(scope, id);

    const user = new connect.CfnUser(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      username: props.username,
      password: props.password,
      identityInfo: props.identityInfo,
      phoneConfig: {
        phoneType: props.phoneConfig.phoneType,
        autoAccept: props.phoneConfig.autoAccept,
        afterContactWorkTimeLimit: props.phoneConfig.afterContactWorkTimeLimit,
        deskPhoneNumber: props.phoneConfig.deskPhoneNumber,
      },
      securityProfileArns: props.securityProfiles.map((sp) => sp.securityProfileArn),
      routingProfileArn: props.routingProfile.routingProfileArn,
    });

    this.userId = user.ref;
    this.userArn = user.attrUserArn;

    this.node.addDependency(props.instance);
    this.node.addDependency(...props.securityProfiles);
    this.node.addDependency(props.routingProfile);
  }
}
