import * as customerprofiles from 'aws-cdk-lib/aws-customerprofiles';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Integration, IntegrationOptions } from './integration';

/**
 * Configuration for profile matching in Customer Profiles.
 *
 * Defines how customer profiles from different sources are matched
 * and merged to create unified customer views.
 */
export interface MatchingProps {
  /**
   * Whether profile matching is enabled.
   *
   * When enabled, Customer Profiles will automatically identify
   * and merge profiles that represent the same customer.
   */
  readonly enabled: boolean;

  /**
   * Configuration for automatic profile merging.
   *
   * Defines how matched profiles are automatically combined,
   * including conflict resolution and data consolidation rules.
   */
  readonly autoMerging?: customerprofiles.CfnDomain.AutoMergingProperty;

  /**
   * Configuration for exporting matching results.
   *
   * Defines how matching results and merged profiles are
   * exported to external systems or data lakes.
   */
  readonly exportingConfig?: customerprofiles.CfnDomain.ExportingConfigProperty;

  /**
   * Schedule for running matching jobs.
   *
   * Defines when and how frequently the matching process
   * runs to identify and merge duplicate profiles.
   */
  readonly jobSchedule?: customerprofiles.CfnDomain.JobScheduleProperty;
}

/**
 * Configuration for rule-based profile matching.
 *
 * Provides more granular control over how profiles are matched
 * using custom rules and attribute comparisons.
 */
export interface RuleBasedMatchingProps {
  /**
   * Whether rule-based matching is enabled.
   *
   * When enabled, profiles are matched using the specified
   * rules and attribute comparisons.
   */
  readonly enabled: boolean;

  /**
   * Selector for attribute types to use in matching.
   *
   * Defines which profile attributes should be considered
   * when determining if profiles represent the same customer.
   */
  readonly attributeTypesSelector?: customerprofiles.CfnDomain.AttributeTypesSelectorProperty;

  /**
   * Configuration for resolving conflicts during matching.
   *
   * Defines how to handle conflicting data when merging
   * matched profiles, such as which source takes precedence.
   */
  readonly conflictResolution?: customerprofiles.CfnDomain.ConflictResolutionProperty;

  /**
   * Configuration for exporting matching results.
   *
   * Defines how rule-based matching results are exported
   * to external systems or data lakes.
   */
  readonly exportingConfig?: customerprofiles.CfnDomain.ExportingConfigProperty;

  /**
   * Custom matching rules for profile comparison.
   *
   * Defines specific rules for how profiles should be compared
   * and matched based on attribute values and patterns.
   */
  readonly matchingRules?: customerprofiles.CfnDomain.MatchingRuleProperty[];

  /**
   * Maximum rule level allowed for matching.
   *
   * Controls the complexity of matching rules that can be applied,
   * affecting performance and accuracy trade-offs.
   */
  readonly maxAllowedRuleLevelForMatching?: number;

  /**
   * Maximum rule level allowed for merging.
   *
   * Controls the complexity of merging rules that can be applied
   * when combining matched profiles.
   */
  readonly maxAllowedRuleLevelForMerging?: number;
}

/**
 * Properties for creating a Customer Profiles domain.
 */
export interface DomainProps {
  /**
   * The name of the Customer Profiles domain.
   *
   * Must be unique within your AWS account and region.
   */
  readonly domainName: string;

  /**
   * Default expiration time in days for customer profiles.
   *
   * Profiles that haven't been updated within this timeframe
   * may be automatically expired and removed from the domain.
   */
  readonly defaultExpirationDays: number;

  /**
   * URL of the dead letter queue for failed operations.
   *
   * Failed profile operations and integration errors will be
   * sent to this SQS queue for troubleshooting and retry processing.
   */
  readonly deadLetterQueueUrl?: string;

  /**
   * KMS key for encrypting customer profile data.
   *
   * If provided, all customer data in the domain will be
   * encrypted using this key for enhanced security.
   */
  readonly defaultEncryptionKey?: kms.IKey;

  /**
   * Configuration for automatic profile matching.
   *
   * Enables Customer Profiles to automatically identify and
   * merge profiles that represent the same customer.
   */
  readonly matching?: MatchingProps;

  /**
   * Configuration for rule-based profile matching.
   *
   * Provides more granular control over profile matching
   * using custom rules and attribute comparisons.
   */
  readonly ruleBasedMatching?: RuleBasedMatchingProps;
}

/**
 * Represents an Amazon Connect Customer Profiles domain.
 *
 * A domain is a container for customer profiles and defines the
 * configuration for profile management, matching, and data retention.
 */
export interface IDomain extends IResource {
  /**
   * The name of the Customer Profiles domain.
   */
  readonly domainName: string;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   *
   * Used to reference the domain in integrations, IAM policies,
   * and other AWS services.
   */
  readonly domainArn: string;
}

/**
 * An Amazon Connect Customer Profiles domain construct.
 *
 * Customer Profiles domains provide unified customer views by collecting,
 * matching, and merging customer data from multiple sources. They enable
 * contact center agents to access comprehensive customer information
 * during interactions, improving service quality and personalization.
 *
 * ## Key Features
 *
 * - **Unified Customer View**: Combine data from multiple sources into single profiles
 * - **Automatic Matching**: Identify and merge duplicate customer records
 * - **Data Integration**: Connect with CRM systems, databases, and applications
 * - **Real-time Updates**: Keep customer information current across all sources
 * - **Privacy Controls**: Manage data retention and encryption for compliance
 *
 * ## Usage Example
 *
 * ```typescript
 * const customerDomain = new Domain(this, 'CustomerProfilesDomain', {
 *   domainName: 'customer-service-profiles',
 *   defaultExpirationDays: 1095, // 3 years
 *   defaultEncryptionKey: kmsKey,
 *   matching: {
 *     enabled: true,
 *     autoMerging: {
 *       enabled: true,
 *       conflictResolution: {
 *         conflictResolvingModel: 'RECENCY',
 *         sourceName: 'Salesforce',
 *       },
 *     },
 *   },
 * });
 * ```
 *
 * ## Integration Patterns
 *
 * 1. **CRM Integration**: Sync customer data from Salesforce, HubSpot, or other CRMs
 * 2. **Database Integration**: Connect to customer databases and data warehouses
 * 3. **Application Integration**: Integrate with custom applications and services
 * 4. **Real-time Updates**: Use streaming integrations for live data synchronization
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html
 */
export class Domain extends Resource implements IDomain {
  /**
   * The underlying CloudFormation domain resource.
   */
  public readonly cfnDomain: customerprofiles.CfnDomain;

  /**
   * The name of the Customer Profiles domain.
   */
  public readonly domainName: string;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   */
  public readonly domainArn: string;

  /**
   * The status of rule-based matching for this domain.
   *
   * Indicates whether rule-based matching is active, pending, or disabled.
   */
  public readonly ruleBasedMatchingStatus?: string;

  /**
   * Creates a new Amazon Connect Customer Profiles domain.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the domain
   */
  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    const domain = new customerprofiles.CfnDomain(this, 'Resource', {
      domainName: props.domainName,
      defaultExpirationDays: props.defaultExpirationDays,
      deadLetterQueueUrl: props.deadLetterQueueUrl,
      defaultEncryptionKey: props.defaultEncryptionKey?.keyArn,
      matching: props.matching
        ? {
            enabled: props.matching.enabled,
            autoMerging: props.matching.autoMerging,
            exportingConfig: props.matching.exportingConfig,
            jobSchedule: props.matching.jobSchedule,
          }
        : undefined,
      ruleBasedMatching: props.ruleBasedMatching
        ? {
            enabled: props.ruleBasedMatching.enabled,
            attributeTypesSelector: props.ruleBasedMatching.attributeTypesSelector,
            conflictResolution: props.ruleBasedMatching.conflictResolution,
            exportingConfig: props.ruleBasedMatching.exportingConfig,
            matchingRules: props.ruleBasedMatching.matchingRules,
            maxAllowedRuleLevelForMatching: props.ruleBasedMatching.maxAllowedRuleLevelForMatching,
            maxAllowedRuleLevelForMerging: props.ruleBasedMatching.maxAllowedRuleLevelForMerging,
          }
        : undefined,
    });
    this.cfnDomain = domain;

    if (props.defaultEncryptionKey) {
      domain.node.addDependency(props.defaultEncryptionKey);
    }

    this.domainName = props.domainName;
    this.domainArn = `arn:aws:profile:${this.stack.region}:${this.stack.account}:domains/${props.domainName}`;
  }

  /**
   * Adds an integration to this Customer Profiles domain.
   *
   * This method creates an Integration that enables data ingestion from external
   * sources into the Customer Profiles domain, allowing for unified customer
   * profile creation and management.
   *
   * @param id - The construct ID for the integration
   * @param options - Configuration options for the integration
   * @returns The created integration
   */
  public addIntegration(id: string, options: IntegrationOptions): Integration {
    return new Integration(this, id, {
      domain: this,
      ...options,
    });
  }
}
