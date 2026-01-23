import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { NagSuppressions } from 'cdk-nag';

export function addNagSuppressionsToLambda(func: lambda.Function) {
  if (func.role) {
    NagSuppressions.addResourceSuppressions(func.role, [
      {
        id: 'AwsSolutions-IAM4',
        reason: 'AWSLambdaBasicExecutionRole is used',
      },
    ]);
  }
}

export function addNagSuppressionsToProvider(provider: Provider) {
  NagSuppressions.addResourceSuppressions(
    provider,
    [
      {
        id: 'AwsSolutions-L1',
        reason: 'Non-latest nodejs function is used inside Provider',
      },
      {
        id: 'AwsSolutions-IAM4',
        reason: 'AWSLambdaBasicExecutionRole is used inside Provider',
      },
      {
        id: 'AwsSolutions-IAM5',
        reason: 'Wildcard policy is used inside Provider',
      },
      {
        id: 'AwsSolutions-SF1',
        reason: 'This is just a sample application. No default output all logs',
      },
      {
        id: 'AwsSolutions-SF2',
        reason: 'This is just a sample application. No X-Ray',
      },
    ],
    true,
  );
}
