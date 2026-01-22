/**
 * Amazon Connect Core Constructs
 *
 * This module provides L2 CDK constructs for core Amazon Connect functionality,
 * including contact center infrastructure, user management, and service integrations.
 *
 * ## Core Components
 *
 * - **Instance**: The foundational Amazon Connect instance
 * - **Queue**: Contact queues for routing customer interactions
 * - **ContactFlow**: Customer interaction logic and routing rules
 * - **User**: Agents and administrators who handle customer contacts
 * - **RoutingProfile**: Defines which queues agents can handle contacts from
 * - **SecurityProfile**: Controls user permissions and access
 * - **HoursOfOperation**: Defines when queues are available
 * - **Prompt**: Audio messages played to customers
 *
 * ## Storage and Integration
 *
 * - **InstanceStorageConfig**: Configure storage for recordings, transcripts, and reports
 * - **IntegrationAssociation**: Connect with external services (Lex, Lambda, etc.)
 *
 * ## Usage Pattern
 *
 * 1. Create an Instance as the foundation
 * 2. Configure storage and integrations
 * 3. Set up queues, hours of operation, and contact flows
 * 4. Create security profiles and routing profiles
 * 5. Add users (agents and administrators)
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
 */

export * from './instance';
export * from './instance-storage-config';
export * from './contact-flow';
export * from './template-contact-flow';
export * from './integration-association';
export * from './queue';
export * from './hours-of-operation';
export * from './prompt';
export * from './user';
export * from './security-profile';
export * from './routing-profile';
export * from './l1-instance-storage-config';
export * from './l1-integration-association';
