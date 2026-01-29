import { awscdk } from 'projen';
import { GitlabConfiguration } from 'projen/lib/gitlab';
import { NodePackageManager, TrailingComma } from 'projen/lib/javascript';
const CDK_LIB_VERSION = '2.235.1';
const AWS_SDK_VERSION = '3.972.0';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  cdkVersion: CDK_LIB_VERSION,
  defaultReleaseBranch: 'main',
  release: true,
  releaseToNpm: false,
  depsUpgrade: false,

  jsiiVersion: '~5.9.23',
  name: 'cdk-constructs-for-amazon-connect',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/aws-samples/sample-cdk-constructs-for-amazon-connect.git',

  description: 'L2 AWS CDK Constructs for Amazon Connect and the related services',
  deps: ['cdk-nag'],
  bundledDeps: [
    `@aws-sdk/client-connect@${AWS_SDK_VERSION}`,
    `@aws-sdk/client-connectcases@${AWS_SDK_VERSION}`,
    `@aws-sdk/client-qconnect@${AWS_SDK_VERSION}`,
    '@types/aws-lambda',
  ],
  devDeps: [
    `@aws-cdk/integ-runner@2.193.5`,
    `@aws-cdk/integ-tests-alpha@${CDK_LIB_VERSION}-alpha.0`,
    'typedoc',
    'esbuild@0',
    'simple-git-hooks@^2.13.1',
    'lint-staged@^16.2.7',
    'cross-env@^10.1.0', // Note: only used to set ESLINT_USE_FLAT_CONFIG
    'jsii-docgen@^10.11.11', // Note: to avoid version error of jsii-rosetta
    'jsii-pacmak@^1.125.0',
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ALL,
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      printWidth: 120,
    },
    ignoreFileOptions: {
      ignorePatterns: [
        'API.md',
        'CODE_OF_CONDUCT.md',
        'CONTRIBUTING.md',
        '.eslintrc.json',
        '.mergify.yml',
        '.gitlab-ci.yml',
        '.prettierrc.json',
        'tsconfig*.json',
        'package*.json',
        '.projen/**/*',
        '.kiro/**/*',
        '.github/**/*',
        'test/*.snapshot/**/*',
      ],
    },
  },
  eslint: true,
  packageManager: NodePackageManager.NPM,
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc.',
  gitignore: ['/docs'],
  npmIgnoreOptions: {
    ignorePatterns: ['/.kiro', '/.gitlab-ci.yml'],
  },
});

project.addScripts({
  integ: 'npx integ-runner',
  'integ:update': 'npx integ-runner --update-on-failed',
  docs: 'npx typedoc src',
  format: 'prettier --write .',
  'format:check': 'prettier --check .',
});

project.addFields({
  'simple-git-hooks': {
    'pre-commit': 'npx lint-staged',
  },
  'lint-staged': {
    '*': ['git-secrets --scan'],
    '*.(ts|js)': [
      // Note: ESLINT_USE_FLAT_CONFIG=false is required because projen does not support ESLint 9 configuration.
      'cross-env ESLINT_USE_FLAT_CONFIG=false npx eslint --fix',
    ],
    '*.(ts|js|json|md)': ['npx prettier --write'],
  },
});

new GitlabConfiguration(project, {
  stages: ['build', 'test'],
  jobs: {
    build: {
      stage: 'build',
      image: { name: 'node:22' },
      cache: [{ paths: ['node_modules/'] }],
      beforeScript: ['npm ci'],
      script: ['npx projen build'],
      artifacts: {
        paths: ['lib/**/*', 'dist/**/*', '.jsii', 'tsconfig.json'],
      },
    },
    format: {
      stage: 'build',
      image: { name: 'node:22' },
      cache: [{ paths: ['node_modules/'] }],
      beforeScript: ['npm ci'],
      script: ['npm run format:check'],
    },
    test: {
      stage: 'test',
      image: { name: 'node:22' },
      cache: [{ paths: ['node_modules/'] }],
      beforeScript: ['npm ci'],
      script: ['npm run integ'],
      needs: ['build'],
    },
  },
  variables: {
    NODE_OPTIONS: '--max_old_space_size=3584',
  },
});

// Customize GitHub release workflow to attach build artifacts
project.release?.publisher.addGitHubPostPublishingSteps({
  name: 'Upload artifacts to release',
  run: 'gh release upload $(cat dist/releasetag.txt) -R $GITHUB_REPOSITORY dist/js/*.tgz --clobber',
  env: {
    GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
  },
});

project.synth();
