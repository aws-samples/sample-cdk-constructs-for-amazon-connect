import * as connect from 'aws-cdk-lib/aws-connect';
import { Resource, IResource, IResolvable, CfnTag } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IInstance } from './instance';

/**
 * Properties for creating a security profile.
 */
export interface SecurityProfileProps {
  /**
   * The Amazon Connect instance to associate with this security profile.
   */
  readonly instance: IInstance;

  /**
   * The name of the security profile.
   *
   * Must be unique within the Amazon Connect instance.
   */
  readonly securityProfileName: string;

  /**
   * An optional description for the security profile.
   *
   * Helps document the purpose and scope of permissions granted
   * by this security profile.
   */
  readonly description?: string;

  /**
   * Access control tags that users with this profile can view and edit.
   *
   * These tags control which resources (like queues, routing profiles,
   * or contact flows) users can access based on resource tagging.
   * Provides fine-grained access control beyond basic permissions.
   */
  readonly allowedAccessControlTags?: Array<CfnTag | IResolvable> | IResolvable;

  /**
   * List of permissions granted to users with this security profile.
   *
   * Permissions control what actions users can perform within Amazon Connect,
   * such as viewing reports, managing users, or accessing specific features.
   * Use Amazon Connect's predefined permission strings.
   *
   * @example ['BasicAgentAccess', 'OutboundCallAccess', 'ViewReports']
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-permissions.html
   */
  readonly permissions?: string[];
}

/**
 * Represents an Amazon Connect security profile.
 *
 * A security profile defines the permissions and access controls for users
 * within Amazon Connect, determining what features and resources they can access.
 */
export interface ISecurityProfile extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the security profile.
   *
   * Used to reference the security profile in user configurations
   * and IAM policies.
   */
  readonly securityProfileArn: string;

  /**
   * The unique identifier of the security profile.
   *
   * Used to reference the security profile within Amazon Connect APIs.
   */
  readonly securityProfileId: string;
}

/**
 * An Amazon Connect security profile construct.
 *
 * Security profiles control user access and permissions within Amazon Connect.
 * They define what features users can access, what actions they can perform,
 * and which resources they can view or modify. Security profiles are essential
 * for maintaining proper access control and compliance in your contact center.
 *
 * ## Key Features
 *
 * - **Permission Control**: Define granular permissions for Amazon Connect features
 * - **Resource Access**: Control access to specific queues, routing profiles, and flows
 * - **Tag-based Access**: Use access control tags for fine-grained resource filtering
 * - **Role-based Security**: Create profiles for different user roles (agents, supervisors, admins)
 * - **Compliance Support**: Ensure users only access appropriate data and functions
 *
 * ## Usage Example
 *
 * ```typescript
 * const agentProfile = new SecurityProfile(this, 'AgentSecurityProfile', {
 *   instance: connectInstance,
 *   securityProfileName: 'Customer Service Agent',
 *   description: 'Standard permissions for customer service agents',
 *   permissions: [
 *     'BasicAgentAccess',
 *     'OutboundCallAccess',
 *     'ViewCustomerProfiles',
 *   ],
 * });
 * ```
 *
 * ## Common Permission Categories
 *
 * - **Agent Permissions**: Basic contact handling, CCP access, customer interaction
 * - **Supervisor Permissions**: Real-time monitoring, historical reports, agent management
 * - **Admin Permissions**: User management, configuration changes, system settings
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
 */
export class SecurityProfile extends Resource implements ISecurityProfile {
  /**
   * The Amazon Resource Name (ARN) of the security profile.
   */
  public readonly securityProfileArn: string;

  /**
   * The unique identifier of the security profile.
   */
  public readonly securityProfileId: string;

  /**
   * Creates a new Amazon Connect security profile.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the security profile
   */
  constructor(scope: Construct, id: string, props: SecurityProfileProps) {
    super(scope, id);

    const securityProfile = new connect.CfnSecurityProfile(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      securityProfileName: props.securityProfileName,
      description: props.description,
      allowedAccessControlTags: props.allowedAccessControlTags,
      permissions: props.permissions,
    });

    this.securityProfileId = securityProfile.ref;
    this.securityProfileArn = securityProfile.attrSecurityProfileArn;

    this.node.addDependency(props.instance);
  }
}
