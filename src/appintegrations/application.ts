import { Resource, IResource } from 'aws-cdk-lib';
import * as appintegrations from 'aws-cdk-lib/aws-appintegrations';
import { Construct } from 'constructs';
import {
  ApplicationIntegrationAssociation,
  ApplicationIntegrationAssociationOptions,
} from '../connect/integration-association';

/**
 * Properties for creating an AppIntegrations application.
 */
export interface ApplicationProps {
  /**
   * Configuration for the application source.
   *
   * Defines how the application connects to external systems
   * and what data sources it can access.
   */
  readonly applicationSourceConfig: appintegrations.CfnApplication.ApplicationSourceConfigProperty;

  /**
   * A description of the application.
   *
   * Helps document the purpose and functionality of the application
   * integration.
   */
  readonly description: string;

  /**
   * The name of the application.
   *
   * Must be unique within your AWS account and region.
   */
  readonly name: string;

  /**
   * The namespace for the application.
   *
   * Provides logical grouping and organization for related
   * applications and integrations.
   */
  readonly namespace: string;

  /**
   * Permissions granted to the application.
   *
   * Defines what actions the application can perform and
   * what resources it can access within the integration.
   */
  readonly permissions?: string[];
}

/**
 * Represents an Amazon AppIntegrations application.
 *
 * An application defines the configuration and permissions for
 * integrating external systems with AWS services like Amazon Connect.
 */
export interface IApplication extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * Used to reference the application in integration associations,
   * IAM policies, and other AWS services.
   */
  readonly applicationArn: string;
}

/**
 * An Amazon AppIntegrations application construct.
 *
 * AppIntegrations applications enable seamless integration between
 * external systems and AWS services. They provide the configuration,
 * authentication, and permissions needed to connect third-party
 * applications with services like Amazon Connect, allowing for
 * enhanced customer service capabilities and data synchronization.
 *
 * ## Key Features
 *
 * - **External System Integration**: Connect with CRM, helpdesk, and other business applications
 * - **Secure Authentication**: Manage credentials and authentication for external systems
 * - **Permission Management**: Control what actions applications can perform
 * - **Data Synchronization**: Enable real-time or batch data exchange
 * - **Amazon Connect Integration**: Enhance contact center capabilities with external data
 *
 * ## Usage Example
 *
 * ```typescript
 * const salesforceApp = new Application(this, 'SalesforceIntegration', {
 *   name: 'Salesforce CRM Integration',
 *   description: 'Integration with Salesforce for customer data',
 *   namespace: 'customer-service',
 *   applicationSourceConfig: {
 *     externalUrlConfig: {
 *       accessUrl: 'https://mycompany.salesforce.com',
 *       approvedOrigins: ['https://mycompany.my.connect.aws'],
 *     },
 *   },
 *   permissions: ['read:contacts', 'read:accounts', 'write:cases'],
 * });
 * ```
 *
 * ## Integration Patterns
 *
 * 1. **CRM Integration**: Connect with Salesforce, HubSpot, or other CRM systems
 * 2. **Helpdesk Integration**: Integrate with ServiceNow, Zendesk, or similar platforms
 * 3. **Knowledge Base Integration**: Connect with SharePoint, Confluence, or document systems
 * 4. **Custom Applications**: Integrate with proprietary business applications
 *
 * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html
 */
export class Application extends Resource implements IApplication {
  /**
   * The underlying CloudFormation application resource.
   */
  private readonly application: appintegrations.CfnApplication;

  /**
   * The Amazon Resource Name (ARN) of the application.
   */
  public readonly applicationArn: string;

  /**
   * Creates a new Amazon AppIntegrations application.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the application
   */
  constructor(scope: Construct, id: string, props: ApplicationProps) {
    super(scope, id);

    this.application = new appintegrations.CfnApplication(this, 'Resource', {
      applicationSourceConfig: props.applicationSourceConfig,
      description: props.description,
      name: props.name,
      namespace: props.namespace,
      permissions: props.permissions,
    });

    this.applicationArn = this.application.attrApplicationArn;
  }

  /**
   * Adds an integration association between this application and an Amazon Connect instance.
   *
   * This method creates an ApplicationIntegrationAssociation that enables the application
   * to be integrated with Amazon Connect, allowing for enhanced functionality and data
   * exchange between the external application and the contact center.
   *
   * @param id - The construct ID for the integration association
   * @param options - Configuration options containing the Connect instance
   * @returns The created application integration association
   */
  public addIntegrationAssociation(
    id: string,
    options: ApplicationIntegrationAssociationOptions,
  ): ApplicationIntegrationAssociation {
    return new ApplicationIntegrationAssociation(this, id, {
      instance: options.instance,
      application: this,
    });
  }
}
