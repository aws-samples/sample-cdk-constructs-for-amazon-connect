# Project Structure

## Directory Organization

```
cdk-constructs-for-amazon-connect/
├── src/                  # Source code
│   ├── appintegrations/  # AppIntegrations service constructs
│   ├── connect/          # Core Amazon Connect service constructs
│   ├── connect-cases/    # Connect Cases service constructs
│   ├── customer-profiles/# Customer Profiles service constructs
│   ├── qconnect/         # QConnect (Wisdom) service constructs
│   ├── index.ts          # Main entry point and exports
│   ├── integ.default.ts  # Integration test
│   └── nag-suppressions.ts # CDK Nag suppression utilities
├── lib/                  # Compiled JavaScript output
├── test/                 # Test files
├── .projen/              # Projen configuration files
└── .projenrc.ts          # Projen project definition
```

## Code Organization Patterns

### Service Module Pattern
Each AWS service has its own directory with related constructs:
- `index.ts` - Exports all constructs for the service
- Individual files for each construct type (e.g., `instance.ts`, `queue.ts`)
- L1 custom resource handlers with `.onEvent.ts` suffix

### Construct Hierarchy
1. **L1 Constructs**: Low-level CloudFormation resources (prefixed with `L1`)
2. **L2 Constructs**: Higher-level abstractions with friendly APIs
3. **Helper Functions**: Utility functions for working with constructs

### Interface Pattern
Most constructs follow this pattern:
- `IResourceName` - Interface defining the resource contract
- `ResourceNameProps` - Interface for construct properties
- `ResourceName` - The actual construct implementation

## File Naming Conventions
- Kebab-case for filenames (`instance-storage-config.ts`)
- PascalCase for class names (`InstanceStorageConfig`)
- camelCase for methods and properties
- Special files:
  - `index.ts` - Module exports
  - `*.onEvent.ts` - Custom resource handlers

## Testing Structure
- Unit tests in `test/` directory with `.test.ts` suffix
- Integration tests in `src/integ.*.ts` files

## Build Output
- Compiled JavaScript in `lib/` (mirrors `src/` structure)
- Type definitions (`.d.ts` files) alongside JS files
- Distribution packages in `dist/`