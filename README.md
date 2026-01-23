# CDK Constructs for Amazon Connect

![Stability: Experimental](https://img.shields.io/badge/stability-Experimental-important.svg?style=for-the-badge)

> All classes are under active development and subject to non-backward compatible changes or removal in any
> future version. These are not subject to the [Semantic Versioning](https://semver.org/) model.
> This means that while you may use them, you may need to update your source code when upgrading to a newer version of this package.

This library implements of the L2 CDK constructs for Amazon Connect and the related services including Amazon Q in Connect and Amazon AppIntegrations.

## Usage

```typescript
const instance = new connect.Instance(this, 'TestConnectInstance', {
  attributes: {
    inboundCalls: true,
    outboundCalls: true,
    contactflowLogs: true,
  },
  identityManagementType: connect.IdentityManagementType.CONNECT_MANAGED,
  instanceAlias: `test-connect-instance`,
});
```

You can create other resources in Amazon Connect. See the test code for more information.

## Reference

[API Reference](API.md)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

---

&copy; Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
