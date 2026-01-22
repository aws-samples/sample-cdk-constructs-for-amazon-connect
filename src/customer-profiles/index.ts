/**
 * Amazon Connect Customer Profiles Constructs
 *
 * This module provides L2 CDK constructs for Amazon Connect Customer Profiles,
 * enabling unified customer data management by collecting, matching, and merging
 * customer information from multiple sources to provide agents with comprehensive
 * customer views during interactions.
 *
 * ## Core Components
 *
 * - **Domain**: Container for customer profiles with matching and retention configuration
 * - **Integration**: Data source integrations for importing customer information
 * - **ObjectType**: Custom data schema definitions for structured customer data
 *
 * ## Key Capabilities
 *
 * - **Unified Customer View**: Combine data from CRM, databases, and applications
 * - **Automatic Matching**: Identify and merge duplicate customer records
 * - **Real-time Updates**: Keep customer information current across all sources
 * - **Data Privacy**: Manage retention, encryption, and compliance requirements
 * - **Flexible Schema**: Define custom object types for specific business needs
 *
 * ## Usage Pattern
 *
 * 1. Create a Domain to contain customer profiles
 * 2. Configure matching rules for duplicate detection
 * 3. Set up Integrations with data sources (CRM, databases, etc.)
 * 4. Define ObjectTypes for custom data structures
 * 5. Associate with Amazon Connect for agent access
 *
 * ## Integration Sources
 *
 * - **CRM Systems**: Salesforce, HubSpot, Microsoft Dynamics
 * - **Databases**: Customer databases and data warehouses
 * - **Applications**: Custom business applications and services
 * - **Files**: CSV, JSON, and other structured data files
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html
 */

export * from './domain';
export * from './integration';
export * from './object-type';
