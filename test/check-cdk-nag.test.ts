import * as cdk from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks } from 'cdk-nag';
import { TestConnectStack } from './integ.default';

test('No unsuppressed errors', () => {
  const app = new cdk.App();
  const stack = new TestConnectStack(app, 'TestConnectStack');
  cdk.Aspects.of(app).add(new AwsSolutionsChecks());
  const errors = Annotations.fromStack(stack).findError('*', Match.stringLikeRegexp('AwsSolutions-.*'));
  expect(errors).toHaveLength(0);
});
