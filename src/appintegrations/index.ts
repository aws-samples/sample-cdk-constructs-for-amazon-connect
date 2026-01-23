/**
 * Amazon AppIntegrations Constructs
 *
 * This module provides L2 CDK constructs for Amazon AppIntegrations,
 * enabling seamless integration between external applications and AWS services
 * like Amazon Connect, providing enhanced agent capabilities and data synchronization.
 *
 * ## Core Components
 *
 * - **Application**: Configuration for integrating external applications
 * - **DataIntegration**: Data source integration and synchronization settings
 *
 * ## Key Capabilities
 *
 * - **External System Integration**: Connect with CRM, helpdesk, and business applications
 * - **Secure Authentication**: Manage credentials and permissions for external systems
 * - **Data Synchronization**: Enable real-time or scheduled data exchange
 * - **Agent Workspace**: Embed external applications in agent interfaces
 * - **Custom Applications**: Support for proprietary and third-party systems
 *
 * ## Usage Pattern
 *
 * 1. Create an Application for external system integration
 * 2. Configure authentication and permissions
 * 3. Set up DataIntegration for data synchronization (if needed)
 * 4. Associate with Amazon Connect through integration associations
 * 5. Enable agent access through workspace embedding
 *
 * ## Supported Integration Types
 *
 * - **CRM Systems**: Salesforce, HubSpot, Microsoft Dynamics, ServiceNow
 * - **Knowledge Bases**: SharePoint, Confluence, custom document systems
 * - **Helpdesk Platforms**: Zendesk, ServiceNow, Jira Service Management
 * - **Custom Applications**: Proprietary business applications and services
 * - **Data Sources**: Databases, APIs, and file-based data systems
 *
 * ## Integration Patterns
 *
 * - **Screen Pop**: Display customer information when calls arrive
 * - **Click-to-Dial**: Initiate calls from external applications
 * - **Data Synchronization**: Keep customer data consistent across systems
 * - **Workflow Automation**: Trigger actions in external systems from Connect
 *
 * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html
 */

export * from './application';
export * from './data-integration';
