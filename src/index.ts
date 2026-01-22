/**
 * Amazon Connect CDK Constructs Library
 *
 * This library provides L2 AWS CDK constructs for Amazon Connect and its related services,
 * offering higher-level abstractions that are more developer-friendly than basic CloudFormation resources.
 *
 * ## Modules
 *
 * - **connect**: Core Amazon Connect constructs (instances, queues, contact flows, users, etc.)
 * - **qconnect**: Amazon Q in Connect constructs for AI-powered agent assistance
 * - **customer_profiles**: Customer Profiles constructs for unified customer data management
 * - **connect_cases**: Connect Cases constructs for case management and tracking
 * - **appintegrations**: AppIntegrations constructs for external system integration
 *
 * ## Quick Start
 *
 * ```typescript
 * import { connect, qconnect } from 'cdk-constructs-for-amazon-connect';
 *
 * // Create a Connect instance
 * const instance = new connect.Instance(this, 'MyContactCenter', {
 *   identityManagementType: connect.IdentityManagementType.CONNECT_MANAGED,
 *   instanceAlias: 'my-contact-center',
 *   attributes: {
 *     inboundCalls: true,
 *     outboundCalls: true,
 *   },
 * });
 *
 * // Add AI assistance
 * const assistant = new qconnect.Assistant(this, 'AIAssistant', {
 *   name: 'Customer Service Assistant',
 *   type: qconnect.AssistantType.AGENT,
 * });
 * ```
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html
 */

export * as connect from './connect';
export * as appintegrations from './appintegrations';
export * as connect_cases from './connect-cases';
export * as customer_profiles from './customer-profiles';
export * as qconnect from './qconnect';
