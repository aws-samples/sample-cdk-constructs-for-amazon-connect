/**
 * Amazon Connect Cases Constructs
 *
 * This module provides L2 CDK constructs for Amazon Connect Cases,
 * enabling structured case management capabilities for tracking, managing,
 * and resolving customer issues across multiple interactions and channels.
 *
 * ## Core Components
 *
 * - **Domain**: Container for case management with field definitions and workflows
 *
 * ## Key Capabilities
 *
 * - **Case Tracking**: Create and manage customer cases across interactions
 * - **Structured Data**: Define custom fields and case templates
 * - **Workflow Management**: Configure case status and resolution processes
 * - **Multi-channel Support**: Handle cases across voice, chat, and other channels
 * - **Agent Collaboration**: Enable multiple agents to work on complex cases
 *
 * ## Usage Pattern
 *
 * 1. Create a Cases Domain to contain case definitions
 * 2. Configure custom fields and case templates
 * 3. Set up workflows and status management
 * 4. Associate with Amazon Connect for agent access
 * 5. Enable case creation and management in contact flows
 *
 * ## Case Management Features
 *
 * - **Case Creation**: Automatically create cases from customer interactions
 * - **Case Updates**: Track progress and add notes throughout resolution
 * - **Case Assignment**: Route cases to appropriate agents or teams
 * - **Case History**: Maintain complete audit trail of case activities
 * - **Case Analytics**: Generate reports on case volume and resolution metrics
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/cases.html
 */

export * from './domain';
