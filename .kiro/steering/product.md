---
inclusion: always
---

# Amazon Connect CDK Constructs

This project provides L2 AWS CDK Constructs for Amazon Connect and its related services, offering higher-level abstractions that are more developer-friendly than basic CloudFormation resources.

## Core Services & Constructs

- **Amazon Connect**: Core contact center resources (instances, queues, routing profiles, contact flows, users, security profiles)
- **Amazon Connect Cases**: Case management functionality
- **Amazon Connect Customer Profiles**: Customer data management and unification
- **Amazon Q in Connect**: AI-powered agent assistance (formerly Amazon Connect Wisdom)
- **Amazon AppIntegrations**: Third-party application integrations

## Construct Design Patterns

### L1 vs L2 Constructs
- **L1 Constructs**: Direct CloudFormation resource wrappers (prefixed with `L1`)
- **L2 Constructs**: Higher-level abstractions with opinionated defaults and helper methods
- Always prefer L2 constructs when available; create L1 constructs only when CloudFormation resources lack CDK support

### Interface Conventions
- `IResourceName`: Interface defining the resource contract (e.g., `IInstance`, `IQueue`)
- `ResourceNameProps`: Properties interface for construct initialization
- `ResourceName`: The construct implementation class
- Use `fromResourceNameArn()` and `fromResourceNameId()` static methods for importing existing resources

### Custom Resource Patterns
- Use `.onEvent.ts` suffix for Lambda handlers backing custom resources
- Implement proper error handling and idempotency in custom resource handlers
- Follow AWS SDK v3 patterns for API calls

## Code Conventions

### Naming & Structure
- Use descriptive, domain-specific names that reflect Amazon Connect terminology
- Group related functionality within service-specific directories
- Export all public constructs through service `index.ts` files

### Properties & Configuration
- Provide sensible defaults while allowing customization
- Use enums for well-defined option sets (e.g., `InstanceStorageType`, `ContactFlowType`)
- Validate required properties and provide clear error messages
- Support both ARN and ID-based resource references where applicable

### Documentation Standards
- Include JSDoc comments for all public APIs
- Provide usage examples in construct documentation
- Document any Amazon Connect service limitations or requirements
- Reference relevant AWS documentation links

## Integration Patterns

### Cross-Service Dependencies
- Amazon Connect instances are foundational - other resources typically depend on them
- Customer Profiles domains can be associated with Connect instances
- Q in Connect assistants require knowledge bases and can be associated with Connect instances
- Use proper dependency management to ensure correct deployment order

### Resource Relationships
- Model parent-child relationships explicitly (e.g., queues belong to instances)
- Support bulk operations where Amazon Connect APIs allow
- Handle eventual consistency in AWS APIs appropriately

## Best Practices

### Security & Compliance
- Follow least-privilege principles for IAM roles and policies
- Support encryption at rest and in transit where available
- Implement proper resource tagging for governance
- Consider CDK Nag suppressions only when justified

### Operational Excellence
- Include CloudWatch metrics and alarms where appropriate
- Support resource updates without service disruption when possible
- Provide clear error messages and troubleshooting guidance
- Consider resource limits and quotas in design