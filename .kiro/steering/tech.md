# Technical Stack & Build System

## Core Technologies
- **Language**: TypeScript
- **Framework**: AWS CDK (Cloud Development Kit) v2.206.0
- **Build System**: Projen
- **Package Manager**: npm/yarn

## Key Dependencies
- **aws-cdk-lib**: Core CDK library (v2.206.0)
- **constructs**: Constructs programming model (v10.0.5)
- **cdk-nag**: CDK Nag for best practice validation
- **AWS SDK Clients**:
  - @aws-sdk/client-connect
  - @aws-sdk/client-connectcases
  - @aws-sdk/client-qconnect

## Development Dependencies
- **jsii**: For multi-language support
- **jest**: For testing
- **prettier**: For code formatting

## Code Style
- TypeScript with Prettier formatting
- Single quotes
- Semicolons
- 2 space indentation
- 120 character line width
- Trailing commas in all locations

## Common Commands

### Project Management
```bash
# Initialize/update project structure
npx projen

# Upgrade dependencies
npx projen upgrade
```

### Development Workflow
```bash
# Build the project
npx projen build

# Run tests
npx projen test
npx projen test:watch  # Watch mode

# Compile TypeScript
npx projen compile

# Format code
npx projen prettier
```

### Release Process
```bash
# Create a release
npx projen release

# Package for distribution
npx projen package
npx projen package-all  # All formats
```

## JSII Configuration
The project uses JSII to compile TypeScript to multiple language targets. Output is configured to the `dist` directory with compiled TypeScript in the `lib` directory.