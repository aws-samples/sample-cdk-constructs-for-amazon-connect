# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AIAgent <a name="AIAgent" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAIAgent

An Amazon Q in Connect AI agent construct.

AI agents are specialized components within Amazon Q in Connect assistants
that provide different types of AI-powered assistance. They use configured
AI prompts and machine learning models to analyze customer interactions,
search knowledge bases, and generate appropriate responses or recommendations.

## Key Features

- **Specialized AI Capabilities**: Different agent types for various use cases
- **Prompt-Driven Behavior**: Customizable AI prompts for specific scenarios
- **Real-time Processing**: Analyze conversations and provide instant assistance
- **Multi-language Support**: Configurable locales for international support
- **Knowledge Integration**: Leverage knowledge bases for accurate responses

## Usage Example

```typescript
const aiAgent = new AIAgent(this, 'AnswerRecommendationAgent', {
  name: 'Customer Service AI Agent',
  description: 'Provides real-time answer recommendations',
  assistant: assistant,
  type: AIAgentType.ANSWER_RECOMMENDATION,
  answerRecommendationConfiguration: {
    answerGenerationPrompt: answerPromptVersion,
    queryReformulationPrompt: queryPromptVersion,
    intentLabelingGenerationPrompt: intentPromptVersion,
    locale: 'en_US',
  },
});
```

## Agent Types

- **Answer Recommendation**: Automatic real-time suggestions during conversations
- **Manual Search**: Enhanced search capabilities for agent-initiated queries
- **Self-Service**: Customer-facing automated assistance and resolution

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AIAgent(scope: Construct, id: string, props: AIAgentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIAgentProps</code> | - Configuration properties for the AI agent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIAgentProps

Configuration properties for the AI agent.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgent.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgent.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgent.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.aiAgentArn">aiAgentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AI agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The unique identifier of the AI agent. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiAgentArn`<sup>Required</sup> <a name="aiAgentArn" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.aiAgentArn"></a>

```typescript
public readonly aiAgentArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AI agent.

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="cdk-constructs-for-amazon-connect.qconnect.AIAgent.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The unique identifier of the AI agent.

---


### AIAgentVersion <a name="AIAgentVersion" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AIAgentVersion(scope: Construct, id: string, props: AIAgentVersionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgentVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgentVersion.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIAgentVersion.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.aiAgentVersionId">aiAgentVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.versionNumber">versionNumber</a></code> | <code>aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiAgentVersionId`<sup>Required</sup> <a name="aiAgentVersionId" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.aiAgentVersionId"></a>

```typescript
public readonly aiAgentVersionId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

---


### AIPrompt <a name="AIPrompt" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAIPrompt

An Amazon Q in Connect AI prompt construct.

AI prompts are templates that define how AI models should process and
respond to different types of customer interactions. They provide the
instructions, context, and formatting guidelines that ensure AI agents
generate appropriate, consistent, and helpful responses.

## Key Features

- **Model Flexibility**: Support for multiple AI models (Claude, Nova, etc.)
- **Format Options**: Different API formats for various model types
- **Specialized Types**: Purpose-built prompts for different AI agent functions
- **Template Variables**: Dynamic content insertion for personalized responses
- **Multi-language Support**: Compatible with different model capabilities

## Usage Example

```typescript
const answerPrompt = new AIPrompt(this, 'AnswerGenerationPrompt', {
  name: 'Customer Service Answer Generation',
  description: 'Generates helpful answers from knowledge base content',
  assistant: assistant,
  apiFormat: AIPromptApiFormat.ANTHROPIC_CLAUDE_MESSAGES,
  modelId: 'us.anthropic.claude-3-haiku-20240307-v1:0',
  templateType: AIPromptTemplateType.TEXT,
  type: AIPromptType.ANSWER_GENERATION,
  templateText: 'Based on the following knowledge: {knowledge}\n\nAnswer the customer question: {question}',
});
```

## Prompt Engineering Best Practices

- **Clear Instructions**: Provide specific, unambiguous guidance to the AI
- **Context Awareness**: Include relevant context about the customer and situation
- **Consistent Tone**: Maintain brand voice and professional communication style
- **Error Handling**: Include instructions for handling unclear or incomplete inputs
- **Variable Usage**: Use template variables for dynamic content insertion

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AIPrompt(scope: Construct, id: string, props: AIPromptProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIPromptProps</code> | - Configuration properties for the AI prompt. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIPromptProps

Configuration properties for the AI prompt.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPrompt.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPrompt.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPrompt.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.aiPromptArn">aiPromptArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.aiPromptId">aiPromptId</a></code> | <code>string</code> | The unique identifier of the AI prompt. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiPromptArn`<sup>Required</sup> <a name="aiPromptArn" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.aiPromptArn"></a>

```typescript
public readonly aiPromptArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AI prompt.

---

##### `aiPromptId`<sup>Required</sup> <a name="aiPromptId" id="cdk-constructs-for-amazon-connect.qconnect.AIPrompt.property.aiPromptId"></a>

```typescript
public readonly aiPromptId: string;
```

- *Type:* string

The unique identifier of the AI prompt.

---


### AIPromptVersion <a name="AIPromptVersion" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AIPromptVersion(scope: Construct, id: string, props: AIPromptVersionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPromptVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPromptVersion.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AIPromptVersion.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.aiPromptVersionId">aiPromptVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.versionNumber">versionNumber</a></code> | <code>aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiPromptVersionId`<sup>Required</sup> <a name="aiPromptVersionId" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.aiPromptVersionId"></a>

```typescript
public readonly aiPromptVersionId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

---


### Application <a name="Application" id="cdk-constructs-for-amazon-connect.appintegrations.Application"></a>

- *Implements:* cdk-constructs-for-amazon-connect.appintegrations.IApplication

An Amazon AppIntegrations application construct.

AppIntegrations applications enable seamless integration between
external systems and AWS services. They provide the configuration,
authentication, and permissions needed to connect third-party
applications with services like Amazon Connect, allowing for
enhanced customer service capabilities and data synchronization.

## Key Features

- **External System Integration**: Connect with CRM, helpdesk, and other business applications
- **Secure Authentication**: Manage credentials and authentication for external systems
- **Permission Management**: Control what actions applications can perform
- **Data Synchronization**: Enable real-time or batch data exchange
- **Amazon Connect Integration**: Enhance contact center capabilities with external data

## Usage Example

```typescript
const salesforceApp = new Application(this, 'SalesforceIntegration', {
  name: 'Salesforce CRM Integration',
  description: 'Integration with Salesforce for customer data',
  namespace: 'customer-service',
  applicationSourceConfig: {
    externalUrlConfig: {
      accessUrl: 'https://mycompany.salesforce.com',
      approvedOrigins: ['https://mycompany.my.connect.aws'],
    },
  },
  permissions: ['read:contacts', 'read:accounts', 'write:cases'],
});
```

## Integration Patterns

1. **CRM Integration**: Connect with Salesforce, HubSpot, or other CRM systems
2. **Helpdesk Integration**: Integrate with ServiceNow, Zendesk, or similar platforms
3. **Knowledge Base Integration**: Connect with SharePoint, Confluence, or document systems
4. **Custom Applications**: Integrate with proprietary business applications

> [https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html](https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

new appintegrations.Application(scope: Construct, id: string, props: ApplicationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps</code> | - Configuration properties for the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.appintegrations.Application.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps

Configuration properties for the application.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.addIntegrationAssociation">addIntegrationAssociation</a></code> | Adds an integration association between this application and an Amazon Connect instance. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.appintegrations.Application.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.appintegrations.Application.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.appintegrations.Application.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addIntegrationAssociation` <a name="addIntegrationAssociation" id="cdk-constructs-for-amazon-connect.appintegrations.Application.addIntegrationAssociation"></a>

```typescript
public addIntegrationAssociation(id: string, options: ApplicationIntegrationAssociationOptions): ApplicationIntegrationAssociation
```

Adds an integration association between this application and an Amazon Connect instance.

This method creates an ApplicationIntegrationAssociation that enables the application
to be integrated with Amazon Connect, allowing for enhanced functionality and data
exchange between the external application and the contact center.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.appintegrations.Application.addIntegrationAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the integration association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.appintegrations.Application.addIntegrationAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationOptions

Configuration options containing the Connect instance.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isConstruct"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.Application.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isOwnedResource"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.Application.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isResource"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.Application.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.appintegrations.Application.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.Application.property.applicationArn">applicationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the application. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.appintegrations.Application.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.appintegrations.Application.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.appintegrations.Application.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="cdk-constructs-for-amazon-connect.appintegrations.Application.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the application.

---


### ApplicationIntegrationAssociation <a name="ApplicationIntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation"></a>

An Amazon Connect application integration association.

Enables integration between Amazon Connect and external applications
through Amazon AppIntegrations, providing agents with access to
customer data and business applications during interactions.

## Key Features

- **External System Access**: Connect with CRM, helpdesk, and business applications
- **Real-time Data**: Access customer information during live interactions
- **Unified Interface**: Embed external applications in the agent workspace
- **Secure Integration**: Manage authentication and permissions centrally
- **Custom Applications**: Support for proprietary and third-party systems

## Usage Example

```typescript
const appIntegration = new ApplicationIntegrationAssociation(this, 'SalesforceIntegration', {
  instance: connectInstance,
  application: salesforceApp,
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/app-integrations.html](https://docs.aws.amazon.com/connect/latest/adminguide/app-integrations.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.ApplicationIntegrationAssociation(scope: Construct, id: string, props: ApplicationIntegrationAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps</code> | - Configuration properties for the application integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps

Configuration properties for the application integration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ApplicationIntegrationAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ApplicationIntegrationAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ApplicationIntegrationAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### Assistant <a name="Assistant" id="cdk-constructs-for-amazon-connect.qconnect.Assistant"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

An Amazon Q in Connect assistant construct.

Amazon Q in Connect assistants provide AI-powered agent assistance by
analyzing customer interactions in real-time and delivering relevant
knowledge articles, suggested responses, and contextual information.
This helps agents provide faster, more accurate customer service.

## Key Features

- **Real-time Recommendations**: Analyze conversations and provide relevant suggestions
- **Knowledge Integration**: Connect with knowledge bases for comprehensive information
- **AI-Powered Insights**: Use machine learning to understand customer intent
- **Multi-channel Support**: Work across voice, chat, and other communication channels
- **Secure**: Support encryption at rest and in transit

## Usage Example

```typescript
const assistant = new Assistant(this, 'CustomerServiceAssistant', {
  name: 'Customer Service AI Assistant',
  description: 'AI assistant for customer service agents',
  type: AssistantType.AGENT,
  encryptionKey: kmsKey,
});
```

## Integration Workflow

1. Create an assistant with knowledge base associations
2. Configure AI agents and prompts for specific use cases
3. Integrate with Amazon Connect instance
4. Agents receive real-time recommendations during customer interactions

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.Assistant(scope: Construct, id: string, props: AssistantProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AssistantProps</code> | - Configuration properties for the assistant. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantProps

Configuration properties for the assistant.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.addIntegrationAssociation">addIntegrationAssociation</a></code> | Adds an integration association between this assistant and an Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.addKnowledgeBaseAssociation">addKnowledgeBaseAssociation</a></code> | Creates a knowledge base association for this assistant. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addIntegrationAssociation` <a name="addIntegrationAssociation" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addIntegrationAssociation"></a>

```typescript
public addIntegrationAssociation(id: string, options: QconnectAssistantAssociationOptions): QconnectAssistantAssociation
```

Adds an integration association between this assistant and an Amazon Connect instance.

This method creates a QconnectAssistantAssociation that enables the assistant
to be integrated with Amazon Connect, providing AI-powered agent assistance
by delivering real-time recommendations and knowledge articles to agents during
customer interactions.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addIntegrationAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the integration association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addIntegrationAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationOptions

Configuration options containing the Connect instance.

---

##### `addKnowledgeBaseAssociation` <a name="addKnowledgeBaseAssociation" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addKnowledgeBaseAssociation"></a>

```typescript
public addKnowledgeBaseAssociation(id: string, options: AssistantAssociationOptions): AssistantAssociation
```

Creates a knowledge base association for this assistant.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addKnowledgeBaseAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.addKnowledgeBaseAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationOptions

Configuration options for the knowledge base association.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.Assistant.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.Assistant.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.Assistant.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.assistantArn">assistantArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the assistant. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.assistantId">assistantId</a></code> | <code>string</code> | The unique identifier of the assistant. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.Assistant.property.cfnAssistant">cfnAssistant</a></code> | <code>aws-cdk-lib.aws_wisdom.CfnAssistant</code> | The underlying CloudFormation assistant resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the assistant.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The unique identifier of the assistant.

---

##### `cfnAssistant`<sup>Required</sup> <a name="cfnAssistant" id="cdk-constructs-for-amazon-connect.qconnect.Assistant.property.cfnAssistant"></a>

```typescript
public readonly cfnAssistant: CfnAssistant;
```

- *Type:* aws-cdk-lib.aws_wisdom.CfnAssistant

The underlying CloudFormation assistant resource.

---


### AssistantAIAgentConfiguration <a name="AssistantAIAgentConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AssistantAIAgentConfiguration(scope: Construct, id: string, props: AssistantAIAgentConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AssistantAIAgentConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### AssistantAssociation <a name="AssistantAssociation" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.AssistantAssociation(scope: Construct, id: string, props: AssistantAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AssistantAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AssistantAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.AssistantAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.assistantAssociationArn">assistantAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.assistantAssociationId">assistantAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assistantAssociationArn`<sup>Required</sup> <a name="assistantAssociationArn" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.assistantAssociationArn"></a>

```typescript
public readonly assistantAssociationArn: string;
```

- *Type:* string

---

##### `assistantAssociationId`<sup>Required</sup> <a name="assistantAssociationId" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation.property.assistantAssociationId"></a>

```typescript
public readonly assistantAssociationId: string;
```

- *Type:* string

---


### CasesDomainAssociation <a name="CasesDomainAssociation" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.CasesDomainAssociation(scope: Construct, id: string, props: CasesDomainAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.CasesDomainAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.CasesDomainAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.CasesDomainAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### ContactFlow <a name="ContactFlow" id="cdk-constructs-for-amazon-connect.connect.ContactFlow"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IContactFlow

An Amazon Connect contact flow construct.

Contact flows define the customer experience by orchestrating interactions
between customers, agents, and automated systems. They control call routing,
play prompts, collect input, and integrate with external services.

## Key Features

- **Visual Logic**: Define customer interaction paths using drag-and-drop interface
- **Dynamic Routing**: Route contacts based on customer input, agent availability, or business rules
- **Service Integration**: Connect with Lambda functions, Lex bots, and other AWS services
- **Multi-channel**: Support voice, chat, and task interactions

## Usage Example

```typescript
const contactFlow = new ContactFlow(this, 'MainFlow', {
  instance: connectInstance,
  name: 'Main Customer Flow',
  type: ContactFlowType.CONTACT_FLOW,
  content: JSON.stringify(contactFlowDefinition),
  description: 'Primary customer interaction flow',
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.ContactFlow(scope: Construct, id: string, props: ContactFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ContactFlowProps</code> | - Configuration properties for the contact flow. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.ContactFlowProps

Configuration properties for the contact flow.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ContactFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ContactFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.ContactFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlow.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | The unique identifier of the contact flow. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact flow.

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="cdk-constructs-for-amazon-connect.connect.ContactFlow.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

The unique identifier of the contact flow.

---


### DataIntegration <a name="DataIntegration" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration"></a>

- *Implements:* cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

new appintegrations.DataIntegration(scope: Construct, id: string, props: DataIntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isConstruct"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.DataIntegration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isOwnedResource"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.DataIntegration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isResource"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

appintegrations.DataIntegration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.dataIntegrationArn">dataIntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `dataIntegrationArn`<sup>Required</sup> <a name="dataIntegrationArn" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.dataIntegrationArn"></a>

```typescript
public readonly dataIntegrationArn: string;
```

- *Type:* string

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegration.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

---


### Domain <a name="Domain" id="cdk-constructs-for-amazon-connect.connect_cases.Domain"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect_cases.IDomain

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer"></a>

```typescript
import { connect_cases } from 'cdk-constructs-for-amazon-connect'

new connect_cases.Domain(scope: Construct, id: string, props: DomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect_cases.DomainProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect_cases.DomainProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.addIntegrationAssociation">addIntegrationAssociation</a></code> | Adds an integration association between this Cases domain and an Amazon Connect instance. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addIntegrationAssociation` <a name="addIntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.addIntegrationAssociation"></a>

```typescript
public addIntegrationAssociation(id: string, options: CasesDomainAssociationOptions): CasesDomainAssociation
```

Adds an integration association between this Cases domain and an Amazon Connect instance.

This method creates a CasesDomainAssociation that enables the Cases domain
to be integrated with Amazon Connect, allowing agents to create and manage
customer cases directly from the Connect interface.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.addIntegrationAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the integration association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.addIntegrationAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationOptions

Configuration options containing the Connect instance.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isConstruct"></a>

```typescript
import { connect_cases } from 'cdk-constructs-for-amazon-connect'

connect_cases.Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isOwnedResource"></a>

```typescript
import { connect_cases } from 'cdk-constructs-for-amazon-connect'

connect_cases.Domain.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isResource"></a>

```typescript
import { connect_cases } from 'cdk-constructs-for-amazon-connect'

connect_cases.Domain.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.Domain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-constructs-for-amazon-connect.connect_cases.Domain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---


### Domain <a name="Domain" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain"></a>

- *Implements:* cdk-constructs-for-amazon-connect.customer_profiles.IDomain

An Amazon Connect Customer Profiles domain construct.

Customer Profiles domains provide unified customer views by collecting,
matching, and merging customer data from multiple sources. They enable
contact center agents to access comprehensive customer information
during interactions, improving service quality and personalization.

## Key Features

- **Unified Customer View**: Combine data from multiple sources into single profiles
- **Automatic Matching**: Identify and merge duplicate customer records
- **Data Integration**: Connect with CRM systems, databases, and applications
- **Real-time Updates**: Keep customer information current across all sources
- **Privacy Controls**: Manage data retention and encryption for compliance

## Usage Example

```typescript
const customerDomain = new Domain(this, 'CustomerProfilesDomain', {
  domainName: 'customer-service-profiles',
  defaultExpirationDays: 1095, // 3 years
  defaultEncryptionKey: kmsKey,
  matching: {
    enabled: true,
    autoMerging: {
      enabled: true,
      conflictResolution: {
        conflictResolvingModel: 'RECENCY',
        sourceName: 'Salesforce',
      },
    },
  },
});
```

## Integration Patterns

1. **CRM Integration**: Sync customer data from Salesforce, HubSpot, or other CRMs
2. **Database Integration**: Connect to customer databases and data warehouses
3. **Application Integration**: Integrate with custom applications and services
4. **Real-time Updates**: Use streaming integrations for live data synchronization

> [https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html](https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

new customer_profiles.Domain(scope: Construct, id: string, props: DomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.DomainProps</code> | - Configuration properties for the domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.DomainProps

Configuration properties for the domain.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.addIntegration">addIntegration</a></code> | Adds an integration to this Customer Profiles domain. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addIntegration` <a name="addIntegration" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.addIntegration"></a>

```typescript
public addIntegration(id: string, options: IntegrationOptions): Integration
```

Adds an integration to this Customer Profiles domain.

This method creates an Integration that enables data ingestion from external
sources into the Customer Profiles domain, allowing for unified customer
profile creation and management.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.addIntegration.parameter.id"></a>

- *Type:* string

The construct ID for the integration.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.addIntegration.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions

Configuration options for the integration.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isConstruct"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isOwnedResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Domain.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Domain.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.cfnDomain">cfnDomain</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain</code> | The underlying CloudFormation domain resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.domainArn">domainArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the domain. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.domainName">domainName</a></code> | <code>string</code> | The name of the Customer Profiles domain. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.ruleBasedMatchingStatus">ruleBasedMatchingStatus</a></code> | <code>string</code> | The status of rule-based matching for this domain. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnDomain`<sup>Required</sup> <a name="cfnDomain" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.cfnDomain"></a>

```typescript
public readonly cfnDomain: CfnDomain;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain

The underlying CloudFormation domain resource.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the domain.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the Customer Profiles domain.

---

##### `ruleBasedMatchingStatus`<sup>Optional</sup> <a name="ruleBasedMatchingStatus" id="cdk-constructs-for-amazon-connect.customer_profiles.Domain.property.ruleBasedMatchingStatus"></a>

```typescript
public readonly ruleBasedMatchingStatus: string;
```

- *Type:* string

The status of rule-based matching for this domain.

Indicates whether rule-based matching is active, pending, or disabled.

---


### HoursOfOperation <a name="HoursOfOperation" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IHoursOfOperation

An Amazon Connect hours of operation construct.

Hours of operation define the schedule when your contact center queues
are available to receive and process customer contacts. They control
queue availability and can trigger different behaviors for contacts
received during and outside of business hours.

## Key Features

- **Time Zone Support**: Configure operating hours in any IANA time zone
- **Daily Schedules**: Set different hours for each day of the week
- **Multiple Time Ranges**: Support split shifts and break periods
- **Queue Integration**: Automatically control queue availability
- **After-Hours Handling**: Enable different contact flow behavior outside business hours

## Usage Example

```typescript
const businessHours = new HoursOfOperation(this, 'BusinessHours', {
  instance: connectInstance,
  name: 'Standard Business Hours',
  description: 'Monday-Friday 9 AM to 5 PM EST',
  timeZone: 'America/New_York',
  config: [
    {
      day: 'MONDAY',
      startTime: { hours: 9, minutes: 0 },
      endTime: { hours: 17, minutes: 0 },
    },
    // ... other days
  ],
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html](https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.HoursOfOperation(scope: Construct, id: string, props: HoursOfOperationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps</code> | - Configuration properties for the hours of operation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps

Configuration properties for the hours of operation.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.HoursOfOperation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.HoursOfOperation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.HoursOfOperation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hours of operation. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | The unique identifier of the hours of operation. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hours of operation.

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperation.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

The unique identifier of the hours of operation.

---


### Instance <a name="Instance" id="cdk-constructs-for-amazon-connect.connect.Instance"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IInstance

An Amazon Connect instance construct.

Creates and configures a virtual contact center instance with all the necessary
resources and settings. The instance serves as the foundation for your contact center,
containing users, queues, contact flows, and telephony configuration.

## Key Features

- **Identity Management**: Supports SAML, Connect-managed users, or AWS Directory Service
- **Telephony**: Configurable inbound/outbound calling with early media support
- **Monitoring**: Built-in support for Contact Lens and enhanced monitoring
- **Multi-party**: Support for conference calls and multi-party chats

## Usage Example

```typescript
const instance = new Instance(this, 'MyContactCenter', {
  identityManagementType: IdentityManagementType.CONNECT_MANAGED,
  instanceAlias: 'my-contact-center',
  attributes: {
    inboundCalls: true,
    outboundCalls: true,
    earlyMedia: true,
    contactLens: true,
  },
});
```

## Important Notes

- The identity management type cannot be changed after instance creation
- Instance alias must be unique across all Amazon Connect instances globally
- Amazon Connect enforces limits on instance creation/deletion (30-day window)
- Each AWS Directory Service directory can only be used with one instance

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.Instance.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.Instance(scope: Construct, id: string, props: InstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.InstanceProps</code> | - Configuration properties for the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.Instance.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.InstanceProps

Configuration properties for the instance.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.addKinesisFirehoseStorageConfig">addKinesisFirehoseStorageConfig</a></code> | Adds a Kinesis Firehose storage configuration to this Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.addKinesisStreamStorageConfig">addKinesisStreamStorageConfig</a></code> | Adds a Kinesis Stream storage configuration to this Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.addKinesisVideoStreamStorageConfig">addKinesisVideoStreamStorageConfig</a></code> | Adds a Kinesis Video Stream storage configuration to this Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.addLexIntegrationAssociation">addLexIntegrationAssociation</a></code> | Adds a Lex bot integration association to this Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.addS3StorageConfig">addS3StorageConfig</a></code> | Adds an S3 storage configuration to this Amazon Connect instance. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.Instance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.Instance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addKinesisFirehoseStorageConfig` <a name="addKinesisFirehoseStorageConfig" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisFirehoseStorageConfig"></a>

```typescript
public addKinesisFirehoseStorageConfig(id: string, options: KinesisFirehoseStorageConfigOptions): KinesisFirehoseStorageConfig
```

Adds a Kinesis Firehose storage configuration to this Amazon Connect instance.

Kinesis Firehose is used for delivering streaming data to destinations like S3,
Redshift, or Elasticsearch. Currently supports contact trace records.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisFirehoseStorageConfig.parameter.id"></a>

- *Type:* string

The construct ID for the storage configuration.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisFirehoseStorageConfig.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions

Configuration options for Kinesis Firehose storage.

---

##### `addKinesisStreamStorageConfig` <a name="addKinesisStreamStorageConfig" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisStreamStorageConfig"></a>

```typescript
public addKinesisStreamStorageConfig(id: string, options: KinesisStreamStorageConfigOptions): KinesisStorageConfig
```

Adds a Kinesis Stream storage configuration to this Amazon Connect instance.

Kinesis Streams are used for real-time streaming of data such as contact trace records,
agent events, and real-time contact analysis segments for both chat and voice.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisStreamStorageConfig.parameter.id"></a>

- *Type:* string

The construct ID for the storage configuration.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisStreamStorageConfig.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions

Configuration options for Kinesis Stream storage.

---

##### `addKinesisVideoStreamStorageConfig` <a name="addKinesisVideoStreamStorageConfig" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisVideoStreamStorageConfig"></a>

```typescript
public addKinesisVideoStreamStorageConfig(id: string, options: KinesisVideoStreamStorageConfigOptions): KinesisVideoStreamStorageConfig
```

Adds a Kinesis Video Stream storage configuration to this Amazon Connect instance.

Kinesis Video Streams are used for storing and streaming media content such as
video calls and screen recordings with configurable retention periods and encryption.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisVideoStreamStorageConfig.parameter.id"></a>

- *Type:* string

The construct ID for the storage configuration.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect.Instance.addKinesisVideoStreamStorageConfig.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions

Configuration options for Kinesis Video Stream storage.

---

##### `addLexIntegrationAssociation` <a name="addLexIntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.Instance.addLexIntegrationAssociation"></a>

```typescript
public addLexIntegrationAssociation(id: string, options: LexIntegrationAssociationOptions): LexIntegrationAssociation
```

Adds a Lex bot integration association to this Amazon Connect instance.

Lex bot integrations enable natural language processing capabilities within
contact flows, allowing customers to interact with automated conversational
interfaces powered by Amazon Lex.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.addLexIntegrationAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the integration association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect.Instance.addLexIntegrationAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationOptions

Configuration options for the Lex bot integration.

---

##### `addS3StorageConfig` <a name="addS3StorageConfig" id="cdk-constructs-for-amazon-connect.connect.Instance.addS3StorageConfig"></a>

```typescript
public addS3StorageConfig(id: string, options: S3StorageConfigOptions): S3StorageConfig
```

Adds an S3 storage configuration to this Amazon Connect instance.

S3 storage is used for storing files and data such as call recordings,
chat transcripts, scheduled reports, attachments, contact evaluations,
screen recordings, and email messages.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Instance.addS3StorageConfig.parameter.id"></a>

- *Type:* string

The construct ID for the storage configuration.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.connect.Instance.addS3StorageConfig.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions

Configuration options for S3 storage.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.Instance.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Instance.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.Instance.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Instance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Instance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.Instance.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Instance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Instance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.cfnInstance">cfnInstance</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstance</code> | The underlying CloudFormation instance resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.instanceArn">instanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.instanceId">instanceId</a></code> | <code>string</code> | The unique identifier of the Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.serviceRole">serviceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM service role associated with the instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | The alias of the instance, if provided. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Instance.property.instanceDomain">instanceDomain</a></code> | <code>string</code> | The full domain name for accessing the instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.Instance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.Instance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnInstance`<sup>Required</sup> <a name="cfnInstance" id="cdk-constructs-for-amazon-connect.connect.Instance.property.cfnInstance"></a>

```typescript
public readonly cfnInstance: CfnInstance;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstance

The underlying CloudFormation instance resource.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="cdk-constructs-for-amazon-connect.connect.Instance.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the instance.

The ARN uniquely identifies the instance across all of AWS and can be used
to reference the instance in IAM policies and other AWS services.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-constructs-for-amazon-connect.connect.Instance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The unique identifier of the Amazon Connect instance.

This is a system-generated UUID that uniquely identifies the instance
within your AWS account and region.

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="cdk-constructs-for-amazon-connect.connect.Instance.property.serviceRole"></a>

```typescript
public readonly serviceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM service role associated with the instance.

This role is automatically created by Amazon Connect and is used by the service
to perform actions on your behalf, such as creating CloudWatch logs and accessing
other AWS services.

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="cdk-constructs-for-amazon-connect.connect.Instance.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

The alias of the instance, if provided.

This is the left-most part of the access URL and must be unique globally
across all Amazon Connect instances.

---

##### `instanceDomain`<sup>Optional</sup> <a name="instanceDomain" id="cdk-constructs-for-amazon-connect.connect.Instance.property.instanceDomain"></a>

```typescript
public readonly instanceDomain: string;
```

- *Type:* string

The full domain name for accessing the instance.

Constructed as `{instanceAlias}.my.connect.aws` when an alias is provided.
This is the URL where users will access the Amazon Connect interface.

---

*Example*

```typescript
'my-contact-center.my.connect.aws'
```



### InstanceStorageConfig <a name="InstanceStorageConfig" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.InstanceStorageConfig(scope: Construct, id: string, props: InstanceStorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.InstanceStorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.InstanceStorageConfig.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.InstanceStorageConfig.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---


### Integration <a name="Integration" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration"></a>

- *Implements:* cdk-constructs-for-amazon-connect.customer_profiles.IIntegration

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

new customer_profiles.Integration(scope: Construct, id: string, props: IntegrationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isConstruct"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Integration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isOwnedResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Integration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.Integration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `uri`<sup>Optional</sup> <a name="uri" id="cdk-constructs-for-amazon-connect.customer_profiles.Integration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---


### IntegrationAssociation <a name="IntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation

An Amazon Connect integration association construct.

Integration associations enable Amazon Connect to work with external
services and resources, extending the capabilities of your contact center.
They provide the configuration and permissions needed for secure
integration with various AWS services and third-party applications.

## Key Features

- **Service Integration**: Connect with Lex, Lambda, Q in Connect, and other services
- **External Applications**: Integrate third-party systems through AppIntegrations
- **Secure Access**: Manage permissions and authentication for integrated services
- **Real-time Capabilities**: Enable real-time data exchange and processing
- **Flexible Configuration**: Support various integration patterns and use cases

## Supported Integration Types

- **Lex Bots**: Natural language processing and conversational AI
- **Lambda Functions**: Custom business logic and external system integration
- **Applications**: Third-party CRM, helpdesk, and business applications
- **Q in Connect**: AI-powered agent assistance and knowledge management
- **Connect Cases**: Case management and issue tracking

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-integration.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-integration.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.IntegrationAssociation(scope: Construct, id: string, props: IntegrationAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps</code> | - Configuration properties for the integration association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps

Configuration properties for the integration association.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.IntegrationAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.IntegrationAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.IntegrationAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### KinesisFirehoseStorageConfig <a name="KinesisFirehoseStorageConfig" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.KinesisFirehoseStorageConfig(scope: Construct, id: string, props: KinesisFirehoseStorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisFirehoseStorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisFirehoseStorageConfig.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisFirehoseStorageConfig.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---


### KinesisStorageConfig <a name="KinesisStorageConfig" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.KinesisStorageConfig(scope: Construct, id: string, props: KinesisStreamStorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisStorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisStorageConfig.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisStorageConfig.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---


### KinesisVideoStreamStorageConfig <a name="KinesisVideoStreamStorageConfig" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.KinesisVideoStreamStorageConfig(scope: Construct, id: string, props: KinesisVideoStreamStorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisVideoStreamStorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisVideoStreamStorageConfig.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.KinesisVideoStreamStorageConfig.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---


### KnowledgeBase <a name="KnowledgeBase" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase"></a>

- *Implements:* cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase

An Amazon Q in Connect knowledge base construct.

Knowledge bases are repositories of information that power AI-driven
agent assistance. They can contain articles, FAQs, procedures, templates,
and other content that helps agents provide accurate and consistent
customer service. Knowledge bases can be populated manually or
automatically synchronized from external sources.

## Key Features

- **Content Management**: Store and organize knowledge articles and templates
- **External Integration**: Sync content from SharePoint, Salesforce, and other sources
- **AI-Powered Search**: Enable intelligent content discovery and recommendations
- **Multi-format Support**: Handle text, documents, and structured data
- **Real-time Updates**: Keep content current with automatic synchronization

## Usage Example

```typescript
const knowledgeBase = new KnowledgeBase(this, 'ProductKnowledgeBase', {
  name: 'Product Information KB',
  description: 'Knowledge base containing product documentation',
  knowledgeBaseType: KnowledgeBaseType.EXTERNAL,
  dataIntegration: sharepointIntegration,
  objectFields: ['title', 'content', 'category', 'lastModified'],
  encryptionKey: kmsKey,
});
```

## Content Types

- **Articles**: Detailed information and procedures
- **FAQs**: Frequently asked questions and answers
- **Templates**: Pre-written responses and messages
- **Quick Responses**: Short, commonly-used phrases
- **Procedures**: Step-by-step instructions

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

new qconnect.KnowledgeBase(scope: Construct, id: string, props: KnowledgeBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps</code> | - Configuration properties for the knowledge base. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps

Configuration properties for the knowledge base.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.addIntegrationAssociation">addIntegrationAssociation</a></code> | Adds an integration association between this knowledge base and an Amazon Connect instance. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addIntegrationAssociation` <a name="addIntegrationAssociation" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.addIntegrationAssociation"></a>

```typescript
public addIntegrationAssociation(id: string, options: QconnectKnowledgeBaseAssociationOptions): QconnectKnowledgeBaseAssociation
```

Adds an integration association between this knowledge base and an Amazon Connect instance.

This method creates a QconnectKnowledgeBaseAssociation that enables the knowledge base
to be integrated with Amazon Connect, providing AI-powered recommendations and knowledge
articles to agents during customer interactions.

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.addIntegrationAssociation.parameter.id"></a>

- *Type:* string

The construct ID for the integration association.

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.addIntegrationAssociation.parameter.options"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationOptions

Configuration options containing the Connect instance.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isConstruct"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.KnowledgeBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isOwnedResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.KnowledgeBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isResource"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

qconnect.KnowledgeBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.cfnKnowledgeBase">cfnKnowledgeBase</a></code> | <code>aws-cdk-lib.aws_wisdom.CfnKnowledgeBase</code> | The underlying CloudFormation knowledge base resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The unique identifier of the knowledge base. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnKnowledgeBase`<sup>Required</sup> <a name="cfnKnowledgeBase" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.cfnKnowledgeBase"></a>

```typescript
public readonly cfnKnowledgeBase: CfnKnowledgeBase;
```

- *Type:* aws-cdk-lib.aws_wisdom.CfnKnowledgeBase

The underlying CloudFormation knowledge base resource.

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the knowledge base.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The unique identifier of the knowledge base.

---


### L1InstanceStorageConfig <a name="L1InstanceStorageConfig" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.L1InstanceStorageConfig(scope: Construct, id: string, props: CfnInstanceStorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.L1InstanceStorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.property.attrAssociationId">attrAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `attrAssociationId`<sup>Required</sup> <a name="attrAssociationId" id="cdk-constructs-for-amazon-connect.connect.L1InstanceStorageConfig.property.attrAssociationId"></a>

```typescript
public readonly attrAssociationId: string;
```

- *Type:* string

---


### L1IntegrationAssociation <a name="L1IntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.L1IntegrationAssociation(scope: Construct, id: string, props: CfnIntegrationAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_connect.CfnIntegrationAssociationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_connect.CfnIntegrationAssociationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.L1IntegrationAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.L1IntegrationAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

---


### LexIntegrationAssociation <a name="LexIntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation"></a>

An Amazon Connect Lex bot integration association.

Enables Amazon Lex conversational AI capabilities within Amazon Connect
contact flows, allowing customers to interact with automated chatbots
and voice assistants for self-service and information gathering.

## Key Features

- **Natural Language Processing**: Understand customer intent from speech and text
- **Multi-turn Conversations**: Support complex, context-aware dialogues
- **Slot Filling**: Collect required information through guided conversations
- **Intent Recognition**: Identify what customers want to accomplish
- **Multi-channel Support**: Work across voice and chat channels

## Usage Example

```typescript
const lexIntegration = new LexIntegrationAssociation(this, 'CustomerServiceBot', {
  instance: connectInstance,
  botAlias: lexBotAlias,
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/amazon-lex.html](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-lex.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.LexIntegrationAssociation(scope: Construct, id: string, props: LexIntegrationAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps</code> | - Configuration properties for the Lex integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps

Configuration properties for the Lex integration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.LexIntegrationAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.LexIntegrationAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.LexIntegrationAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### ObjectType <a name="ObjectType" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType"></a>

- *Implements:* aws-cdk-lib.IResource

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

new customer_profiles.ObjectType(scope: Construct, id: string, props: ObjectTypeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isConstruct"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.ObjectType.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isOwnedResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.ObjectType.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isResource"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

customer_profiles.ObjectType.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectType.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### Prompt <a name="Prompt" id="cdk-constructs-for-amazon-connect.connect.Prompt"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IPrompt

An Amazon Connect prompt construct.

Prompts are audio messages played to customers during their contact center
experience. They provide information, instructions, or entertainment while
customers wait or navigate through contact flows. Prompts are essential
for creating professional and informative customer interactions.

## Key Features

- **Audio Playback**: Play pre-recorded messages to customers
- **S3 Integration**: Store audio files in Amazon S3 for scalability
- **Multiple Formats**: Support for WAV and MP3 audio formats
- **Contact Flow Integration**: Use prompts in contact flow logic
- **Localization**: Support multiple languages and regional variations

## Usage Example

```typescript
const welcomePrompt = new Prompt(this, 'WelcomeMessage', {
  instance: connectInstance,
  name: 'Welcome Message',
  description: 'Greeting played to all incoming customers',
  s3Uri: 's3://my-prompts-bucket/welcome.wav',
});
```

## Audio Requirements

- **Format**: WAV (recommended) or MP3
- **Sample Rate**: 8 kHz or 16 kHz
- **Channels**: Mono (single channel)
- **Duration**: Keep messages concise for better customer experience

> [https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html](https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.Prompt.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.Prompt(scope: Construct, id: string, props: PromptProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.PromptProps</code> | - Configuration properties for the prompt. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.Prompt.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.PromptProps

Configuration properties for the prompt.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.Prompt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.Prompt.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.Prompt.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.fromPromptName">fromPromptName</a></code> | Import an existing prompt by name. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.Prompt.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Prompt.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.Prompt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.Prompt.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Prompt.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Prompt.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.Prompt.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Prompt.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Prompt.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPromptName` <a name="fromPromptName" id="cdk-constructs-for-amazon-connect.connect.Prompt.fromPromptName"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Prompt.fromPromptName(scope: Construct, id: string, attrs: PromptAttributes)
```

Import an existing prompt by name.

This method creates a reference to an existing prompt in your Amazon Connect
instance, allowing you to use it in contact flows and other constructs.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.Prompt.fromPromptName.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Prompt.fromPromptName.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-constructs-for-amazon-connect.connect.Prompt.fromPromptName.parameter.attrs"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.PromptAttributes

Attributes identifying the existing prompt.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.property.promptArn">promptArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Prompt.property.promptId">promptId</a></code> | <code>string</code> | The unique identifier of the prompt. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.Prompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.Prompt.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.Prompt.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="cdk-constructs-for-amazon-connect.connect.Prompt.property.promptArn"></a>

```typescript
public readonly promptArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the prompt.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="cdk-constructs-for-amazon-connect.connect.Prompt.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The unique identifier of the prompt.

---


### QconnectAssistantAssociation <a name="QconnectAssistantAssociation" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.QconnectAssistantAssociation(scope: Construct, id: string, props: QconnectAssistantAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectAssistantAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectAssistantAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectAssistantAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### QconnectKnowledgeBaseAssociation <a name="QconnectKnowledgeBaseAssociation" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.QconnectKnowledgeBaseAssociation(scope: Construct, id: string, props: QconnectKnowledgeBaseAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectKnowledgeBaseAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectKnowledgeBaseAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.QconnectKnowledgeBaseAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

---


### Queue <a name="Queue" id="cdk-constructs-for-amazon-connect.connect.Queue"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IQueue

An Amazon Connect queue construct.

Queues are fundamental components of contact centers that hold contacts
waiting to be handled by available agents. They provide routing logic,
capacity management, and operational controls for contact distribution.

## Key Features

- **Contact Routing**: Distribute contacts to available agents based on routing profiles
- **Capacity Management**: Control maximum queue size and overflow behavior
- **Hours of Operation**: Define when the queue accepts contacts
- **Quick Connects**: Enable rapid transfers to predefined destinations
- **Outbound Configuration**: Set caller ID for agent-initiated calls

## Usage Example

```typescript
const queue = new Queue(this, 'CustomerServiceQueue', {
  instance: connectInstance,
  name: 'Customer Service',
  description: 'General customer service inquiries',
  hoursOfOperation: businessHours,
  maxContacts: 100,
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues.html](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.Queue.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.Queue(scope: Construct, id: string, props: QueueProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.QueueProps</code> | - Configuration properties for the queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.Queue.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.QueueProps

Configuration properties for the queue.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.Queue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.Queue.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.Queue.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName">fromQueueName</a></code> | Import an existing queue by name. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.Queue.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Queue.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.Queue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.Queue.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Queue.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Queue.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.Queue.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Queue.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.Queue.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromQueueName` <a name="fromQueueName" id="cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.Queue.fromQueueName(scope: Construct, id: string, instanceId: string, queueName: string)
```

Import an existing queue by name.

This method creates a reference to an existing queue in your Amazon Connect
instance, allowing you to use it in routing profiles and other constructs.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

###### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName.parameter.instanceId"></a>

- *Type:* string

The ID of the Amazon Connect instance.

---

###### `queueName`<sup>Required</sup> <a name="queueName" id="cdk-constructs-for-amazon-connect.connect.Queue.fromQueueName.parameter.queueName"></a>

- *Type:* string

The name of the existing queue to import.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.property.queueArn">queueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.Queue.property.queueId">queueId</a></code> | <code>string</code> | The unique identifier of the queue. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.Queue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.Queue.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.Queue.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="cdk-constructs-for-amazon-connect.connect.Queue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the queue.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="cdk-constructs-for-amazon-connect.connect.Queue.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The unique identifier of the queue.

---


### RoutingProfile <a name="RoutingProfile" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IRoutingProfile

An Amazon Connect routing profile construct.

Routing profiles control how contacts are distributed to agents by defining
queue assignments, channel concurrency limits, and routing priorities.
They are essential for managing agent workload and ensuring efficient
contact distribution.

## Key Features

- **Queue Assignment**: Define which queues agents can receive contacts from
- **Media Concurrency**: Control simultaneous contact limits per channel
- **Priority Routing**: Set queue priorities and routing delays
- **Multi-channel Support**: Handle voice, chat, task, and email contacts
- **Outbound Configuration**: Set default queue for agent-initiated calls

## Usage Example

```typescript
const routingProfile = new RoutingProfile(this, 'CustomerServiceProfile', {
  instance: connectInstance,
  routingProfileName: 'Customer Service Agents',
  description: 'Routing profile for general customer service',
  defaultOutboundQueue: outboundQueue,
  mediaConcurrencies: [
    { channel: ChannelType.VOICE, concurrency: 1 },
    { channel: ChannelType.CHAT, concurrency: 3 },
    { channel: ChannelType.TASK, concurrency: 5 },
  ],
  queueConfigs: [
    {
      queue: customerServiceQueue,
      priority: 1,
      delay: 0,
      channel: ChannelType.VOICE,
    },
  ],
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.RoutingProfile(scope: Construct, id: string, props: RoutingProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.RoutingProfileProps</code> | - Configuration properties for the routing profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.RoutingProfileProps

Configuration properties for the routing profile.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.RoutingProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.RoutingProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.RoutingProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the routing profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | The unique identifier of the routing profile. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the routing profile.

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="cdk-constructs-for-amazon-connect.connect.RoutingProfile.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

The unique identifier of the routing profile.

---


### S3StorageConfig <a name="S3StorageConfig" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.S3StorageConfig(scope: Construct, id: string, props: S3StorageConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.S3StorageConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.S3StorageConfig.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.S3StorageConfig.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---


### SecurityProfile <a name="SecurityProfile" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.ISecurityProfile

An Amazon Connect security profile construct.

Security profiles control user access and permissions within Amazon Connect.
They define what features users can access, what actions they can perform,
and which resources they can view or modify. Security profiles are essential
for maintaining proper access control and compliance in your contact center.

## Key Features

- **Permission Control**: Define granular permissions for Amazon Connect features
- **Resource Access**: Control access to specific queues, routing profiles, and flows
- **Tag-based Access**: Use access control tags for fine-grained resource filtering
- **Role-based Security**: Create profiles for different user roles (agents, supervisors, admins)
- **Compliance Support**: Ensure users only access appropriate data and functions

## Usage Example

```typescript
const agentProfile = new SecurityProfile(this, 'AgentSecurityProfile', {
  instance: connectInstance,
  securityProfileName: 'Customer Service Agent',
  description: 'Standard permissions for customer service agents',
  permissions: [
    'BasicAgentAccess',
    'OutboundCallAccess',
    'ViewCustomerProfiles',
  ],
});
```

## Common Permission Categories

- **Agent Permissions**: Basic contact handling, CCP access, customer interaction
- **Supervisor Permissions**: Real-time monitoring, historical reports, agent management
- **Admin Permissions**: User management, configuration changes, system settings

> [https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html](https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.SecurityProfile(scope: Construct, id: string, props: SecurityProfileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.SecurityProfileProps</code> | - Configuration properties for the security profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.SecurityProfileProps

Configuration properties for the security profile.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.SecurityProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.SecurityProfile.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.SecurityProfile.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the security profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.securityProfileId">securityProfileId</a></code> | <code>string</code> | The unique identifier of the security profile. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the security profile.

---

##### `securityProfileId`<sup>Required</sup> <a name="securityProfileId" id="cdk-constructs-for-amazon-connect.connect.SecurityProfile.property.securityProfileId"></a>

```typescript
public readonly securityProfileId: string;
```

- *Type:* string

The unique identifier of the security profile.

---


### TemplateContactFlow <a name="TemplateContactFlow" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow"></a>

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.TemplateContactFlow(scope: Construct, id: string, props: TemplateContactFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.TemplateContactFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.TemplateContactFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.TemplateContactFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | The unique identifier of the contact flow. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact flow.

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlow.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

The unique identifier of the contact flow.

---


### User <a name="User" id="cdk-constructs-for-amazon-connect.connect.User"></a>

- *Implements:* cdk-constructs-for-amazon-connect.connect.IUser

An Amazon Connect user construct.

Users represent agents and administrators who interact with your contact center.
They define authentication, permissions, routing capabilities, and telephony
configuration for individuals accessing Amazon Connect.

## Key Features

- **Identity Management**: Support for Connect-managed, SAML, or directory-based authentication
- **Security Profiles**: Fine-grained permission control through security profiles
- **Routing Configuration**: Queue assignments and media handling capabilities
- **Phone Configuration**: Flexible telephony options (soft phone or desk phone)
- **After Contact Work**: Configurable time for post-contact activities

## Usage Example

```typescript
const agent = new User(this, 'CustomerServiceAgent', {
  instance: connectInstance,
  username: 'john.doe',
  identityInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  },
  phoneConfig: {
    phoneType: PhoneType.SOFT_PHONE,
    autoAccept: true,
    afterContactWorkTimeLimit: 300,
  },
  securityProfiles: [agentSecurityProfile],
  routingProfile: customerServiceRoutingProfile,
});
```

> [https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html](https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html)

#### Initializers <a name="Initializers" id="cdk-constructs-for-amazon-connect.connect.User.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

new connect.User(scope: Construct, id: string, props: UserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.props">props</a></code> | <code>cdk-constructs-for-amazon-connect.connect.UserProps</code> | - Configuration properties for the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs-for-amazon-connect.connect.User.Initializer.parameter.props"></a>

- *Type:* cdk-constructs-for-amazon-connect.connect.UserProps

Configuration properties for the user.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-constructs-for-amazon-connect.connect.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-constructs-for-amazon-connect.connect.User.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-constructs-for-amazon-connect.connect.User.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-constructs-for-amazon-connect.connect.User.isConstruct"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.User.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs-for-amazon-connect.connect.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-constructs-for-amazon-connect.connect.User.isOwnedResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.User.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.User.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-constructs-for-amazon-connect.connect.User.isResource"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

connect.User.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-constructs-for-amazon-connect.connect.User.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.property.userArn">userArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.User.property.userId">userId</a></code> | <code>string</code> | The unique identifier of the user. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.User.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.User.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="cdk-constructs-for-amazon-connect.connect.User.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the user.

---

##### `userId`<sup>Required</sup> <a name="userId" id="cdk-constructs-for-amazon-connect.connect.User.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique identifier of the user.

---


## Structs <a name="Structs" id="Structs"></a>

### AIAgentProps <a name="AIAgentProps" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps"></a>

Properties for creating an AI agent.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const aIAgentProps: qconnect.AIAgentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | The assistant that this AI agent belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.name">name</a></code> | <code>string</code> | The name of the AI agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.type">type</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIAgentType</code> | The type of AI agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.answerRecommendationConfiguration">answerRecommendationConfiguration</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration</code> | Configuration for answer recommendation AI agents. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.description">description</a></code> | <code>string</code> | An optional description for the AI agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.manualSearchConfiguration">manualSearchConfiguration</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration</code> | Configuration for manual search AI agents. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.selfServiceConfiguration">selfServiceConfiguration</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration</code> | Configuration for self-service AI agents. |

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

The assistant that this AI agent belongs to.

The AI agent will be associated with this assistant and
inherit its configuration and knowledge base associations.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AI agent.

Must be unique within the assistant.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.type"></a>

```typescript
public readonly type: AIAgentType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIAgentType

The type of AI agent.

Determines the agent's behavior and the configuration
properties that are required.

---

##### `answerRecommendationConfiguration`<sup>Optional</sup> <a name="answerRecommendationConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.answerRecommendationConfiguration"></a>

```typescript
public readonly answerRecommendationConfiguration: AnswerRecommendationAIAgentConfiguration;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration

Configuration for answer recommendation AI agents.

Required when type is ANSWER_RECOMMENDATION.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the AI agent.

Helps document the purpose and capabilities of the AI agent.

---

##### `manualSearchConfiguration`<sup>Optional</sup> <a name="manualSearchConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.manualSearchConfiguration"></a>

```typescript
public readonly manualSearchConfiguration: ManualSearchAIAgentConfiguration;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration

Configuration for manual search AI agents.

Required when type is MANUAL_SEARCH.

---

##### `selfServiceConfiguration`<sup>Optional</sup> <a name="selfServiceConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentProps.property.selfServiceConfiguration"></a>

```typescript
public readonly selfServiceConfiguration: SelfServiceAIAgentConfiguration;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration

Configuration for self-service AI agents.

Required when type is SELF_SERVICE.

---

### AIAgentVersionProps <a name="AIAgentVersionProps" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const aIAgentVersionProps: qconnect.AIAgentVersionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.aiAgent">aiAgent</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIAgent</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `aiAgent`<sup>Required</sup> <a name="aiAgent" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.aiAgent"></a>

```typescript
public readonly aiAgent: IAIAgent;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIAgent

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

---

##### `modifiedTimeSeconds`<sup>Optional</sup> <a name="modifiedTimeSeconds" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentVersionProps.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

### AIPromptProps <a name="AIPromptProps" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps"></a>

Properties for creating an AI prompt.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const aIPromptProps: qconnect.AIPromptProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.apiFormat">apiFormat</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat</code> | The API format for the AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.modelId">modelId</a></code> | <code>string</code> | The AI model identifier to use with this prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.templateText">templateText</a></code> | <code>string</code> | The template text for the AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.templateType">templateType</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIPromptTemplateType</code> | The template type for the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.type">type</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIPromptType</code> | The type of AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | The assistant that this AI prompt belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.description">description</a></code> | <code>string</code> | An optional description for the AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.name">name</a></code> | <code>string</code> | The name of the AI prompt. |

---

##### `apiFormat`<sup>Required</sup> <a name="apiFormat" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.apiFormat"></a>

```typescript
public readonly apiFormat: AIPromptApiFormat;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat

The API format for the AI prompt.

Must be compatible with the specified model ID.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The AI model identifier to use with this prompt.

Choose a model that supports the specified API format
and is available in your deployment region.

---

##### `templateText`<sup>Required</sup> <a name="templateText" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.templateText"></a>

```typescript
public readonly templateText: string;
```

- *Type:* string

The template text for the AI prompt.

This is the actual prompt content that will be sent to the AI model.
Can include variables and formatting instructions specific to the
chosen model and API format.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.templateType"></a>

```typescript
public readonly templateType: AIPromptTemplateType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIPromptTemplateType

The template type for the prompt.

Determines how the prompt template is structured.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.type"></a>

```typescript
public readonly type: AIPromptType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIPromptType

The type of AI prompt.

Determines the prompt's purpose and how it will be used
by AI agents.

---

##### `assistant`<sup>Optional</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

The assistant that this AI prompt belongs to.

If provided, the prompt will be associated with the assistant.
Otherwise, it can be used across multiple assistants.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the AI prompt.

Helps document the purpose and usage of the prompt.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AI prompt.

If not provided, a name will be automatically generated.

---

### AIPromptVersionProps <a name="AIPromptVersionProps" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const aIPromptVersionProps: qconnect.AIPromptVersionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.prompt">prompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPrompt</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.prompt"></a>

```typescript
public readonly prompt: IAIPrompt;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPrompt

---

##### `modifiedTimeSeconds`<sup>Optional</sup> <a name="modifiedTimeSeconds" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptVersionProps.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

### AnswerRecommendationAIAgentConfiguration <a name="AnswerRecommendationAIAgentConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration"></a>

Configuration for answer recommendation AI agents.

Defines the AI prompts and settings used for real-time agent assistance.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const answerRecommendationAIAgentConfiguration: qconnect.AnswerRecommendationAIAgentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.answerGenerationPrompt">answerGenerationPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for generating answers from knowledge base content. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.intentLabelingGenerationPrompt">intentLabelingGenerationPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for identifying customer intent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.locale">locale</a></code> | <code>string</code> | The locale for language-specific processing. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.queryReformulationPrompt">queryReformulationPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for reformulating customer queries. |

---

##### `answerGenerationPrompt`<sup>Required</sup> <a name="answerGenerationPrompt" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.answerGenerationPrompt"></a>

```typescript
public readonly answerGenerationPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for generating answers from knowledge base content.

This prompt guides how the AI formulates responses based on
retrieved knowledge articles and customer context.

---

##### `intentLabelingGenerationPrompt`<sup>Required</sup> <a name="intentLabelingGenerationPrompt" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.intentLabelingGenerationPrompt"></a>

```typescript
public readonly intentLabelingGenerationPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for identifying customer intent.

Analyzes customer messages to understand their intent and
categorize the type of assistance needed.

---

##### `locale`<sup>Required</sup> <a name="locale" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The locale for language-specific processing.

Determines the language and regional settings for AI processing,
affecting prompt interpretation and response generation.

---

*Example*

```typescript
'en_US', 'es_ES', 'fr_FR'
```


##### `queryReformulationPrompt`<sup>Required</sup> <a name="queryReformulationPrompt" id="cdk-constructs-for-amazon-connect.qconnect.AnswerRecommendationAIAgentConfiguration.property.queryReformulationPrompt"></a>

```typescript
public readonly queryReformulationPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for reformulating customer queries.

Helps improve search accuracy by rephrasing customer questions
into more effective knowledge base queries.

---

### ApplicationIntegrationAssociationOptions <a name="ApplicationIntegrationAssociationOptions" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationOptions"></a>

Options for creating an application integration association through Application convenience methods.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const applicationIntegrationAssociationOptions: connect.ApplicationIntegrationAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationOptions.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to integrate with the application. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationOptions.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to integrate with the application.

---

### ApplicationIntegrationAssociationProps <a name="ApplicationIntegrationAssociationProps" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps"></a>

Properties for creating an application integration association.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const applicationIntegrationAssociationProps: connect.ApplicationIntegrationAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to integrate with the application. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps.property.application">application</a></code> | <code>cdk-constructs-for-amazon-connect.appintegrations.IApplication</code> | The AppIntegrations application to integrate with Amazon Connect. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to integrate with the application.

---

##### `application`<sup>Required</sup> <a name="application" id="cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociationProps.property.application"></a>

```typescript
public readonly application: IApplication;
```

- *Type:* cdk-constructs-for-amazon-connect.appintegrations.IApplication

The AppIntegrations application to integrate with Amazon Connect.

---

### ApplicationProps <a name="ApplicationProps" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps"></a>

Properties for creating an AppIntegrations application.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.Initializer"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

const applicationProps: appintegrations.ApplicationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.applicationSourceConfig">applicationSourceConfig</a></code> | <code>aws-cdk-lib.aws_appintegrations.CfnApplication.ApplicationSourceConfigProperty</code> | Configuration for the application source. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.description">description</a></code> | <code>string</code> | A description of the application. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.name">name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.namespace">namespace</a></code> | <code>string</code> | The namespace for the application. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.permissions">permissions</a></code> | <code>string[]</code> | Permissions granted to the application. |

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.applicationSourceConfig"></a>

```typescript
public readonly applicationSourceConfig: ApplicationSourceConfigProperty;
```

- *Type:* aws-cdk-lib.aws_appintegrations.CfnApplication.ApplicationSourceConfigProperty

Configuration for the application source.

Defines how the application connects to external systems
and what data sources it can access.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the application.

Helps document the purpose and functionality of the application
integration.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application.

Must be unique within your AWS account and region.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace for the application.

Provides logical grouping and organization for related
applications and integrations.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="cdk-constructs-for-amazon-connect.appintegrations.ApplicationProps.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Permissions granted to the application.

Defines what actions the application can perform and
what resources it can access within the integration.

---

### AssistantAIAgentConfigurationProps <a name="AssistantAIAgentConfigurationProps" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const assistantAIAgentConfigurationProps: qconnect.AssistantAIAgentConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.agent">agent</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.agentType">agentType</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AIAgentType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | *No description.* |

---

##### `agent`<sup>Required</sup> <a name="agent" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.agent"></a>

```typescript
public readonly agent: IAIAgentVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.agentType"></a>

```typescript
public readonly agentType: AIAgentType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AIAgentType

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAIAgentConfigurationProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

---

### AssistantAssociationOptions <a name="AssistantAssociationOptions" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationOptions.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const assistantAssociationOptions: qconnect.AssistantAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationOptions.property.knowledgeBase">knowledgeBase</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase</code> | *No description.* |

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationOptions.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: IKnowledgeBase;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase

---

### AssistantAssociationProps <a name="AssistantAssociationProps" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const assistantAssociationProps: qconnect.AssistantAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.associationType">associationType</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.knowledgeBase">knowledgeBase</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase</code> | *No description.* |

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.associationType"></a>

```typescript
public readonly associationType: AssistantAssociationType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationType

---

##### `knowledgeBase`<sup>Optional</sup> <a name="knowledgeBase" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationProps.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: IKnowledgeBase;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase

---

### AssistantProps <a name="AssistantProps" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps"></a>

Properties for creating an Amazon Q in Connect assistant.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const assistantProps: qconnect.AssistantProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.name">name</a></code> | <code>string</code> | The name of the assistant. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.description">description</a></code> | <code>string</code> | An optional description for the assistant. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS key for encrypting assistant data. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.type">type</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.AssistantType</code> | The type of assistant. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the assistant.

Must be unique within your AWS account and region.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the assistant.

Helps document the purpose and capabilities of the assistant.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS key for encrypting assistant data.

If provided, all data associated with the assistant will be
encrypted using this key. This includes knowledge base content,
recommendations, and interaction data.

---

##### `type`<sup>Optional</sup> <a name="type" id="cdk-constructs-for-amazon-connect.qconnect.AssistantProps.property.type"></a>

```typescript
public readonly type: AssistantType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.AssistantType
- *Default:* AssistantType.AGENT

The type of assistant.

Determines the assistant's behavior and integration capabilities.

---

### CasesDomainAssociationOptions <a name="CasesDomainAssociationOptions" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const casesDomainAssociationOptions: connect.CasesDomainAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationOptions.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationOptions.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### CasesDomainAssociationProps <a name="CasesDomainAssociationProps" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const casesDomainAssociationProps: connect.CasesDomainAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps.property.domain">domain</a></code> | <code>cdk-constructs-for-amazon-connect.connect_cases.IDomain</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* cdk-constructs-for-amazon-connect.connect_cases.IDomain

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.CasesDomainAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### ContactFlowProps <a name="ContactFlowProps" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps"></a>

Properties for creating a contact flow.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const contactFlowProps: connect.ContactFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.content">content</a></code> | <code>string</code> | The JSON content that defines the contact flow logic. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.name">name</a></code> | <code>string</code> | The name of the contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.type">type</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ContactFlowType</code> | The type of contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.description">description</a></code> | <code>string</code> | An optional description for the contact flow. |

---

##### `content`<sup>Required</sup> <a name="content" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The JSON content that defines the contact flow logic.

This should be a valid contact flow JSON structure that defines the
customer interaction logic, including prompts, routing decisions,
and integrations with other AWS services.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this contact flow.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact flow.

Must be unique within the Amazon Connect instance.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.type"></a>

```typescript
public readonly type: ContactFlowType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ContactFlowType

The type of contact flow.

Determines how and when the contact flow can be invoked within Amazon Connect.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.ContactFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the contact flow.

Helps document the purpose and functionality of the contact flow.

---

### DataIntegrationProps <a name="DataIntegrationProps" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.Initializer"></a>

```typescript
import { appintegrations } from 'cdk-constructs-for-amazon-connect'

const dataIntegrationProps: appintegrations.DataIntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.sourceUri">sourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.fileConfiguration">fileConfiguration</a></code> | <code>aws-cdk-lib.aws_appintegrations.CfnDataIntegration.FileConfigurationProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.objectConfiguration">objectConfiguration</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.scheduleConfig">scheduleConfig</a></code> | <code>aws-cdk-lib.aws_appintegrations.CfnDataIntegration.ScheduleConfigProperty</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.sourceUri"></a>

```typescript
public readonly sourceUri: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileConfiguration`<sup>Optional</sup> <a name="fileConfiguration" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.fileConfiguration"></a>

```typescript
public readonly fileConfiguration: FileConfigurationProperty;
```

- *Type:* aws-cdk-lib.aws_appintegrations.CfnDataIntegration.FileConfigurationProperty

---

##### `objectConfiguration`<sup>Optional</sup> <a name="objectConfiguration" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.objectConfiguration"></a>

```typescript
public readonly objectConfiguration: any;
```

- *Type:* any

---

##### `scheduleConfig`<sup>Optional</sup> <a name="scheduleConfig" id="cdk-constructs-for-amazon-connect.appintegrations.DataIntegrationProps.property.scheduleConfig"></a>

```typescript
public readonly scheduleConfig: ScheduleConfigProperty;
```

- *Type:* aws-cdk-lib.aws_appintegrations.CfnDataIntegration.ScheduleConfigProperty

---

### DomainProps <a name="DomainProps" id="cdk-constructs-for-amazon-connect.connect_cases.DomainProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect_cases.DomainProps.Initializer"></a>

```typescript
import { connect_cases } from 'cdk-constructs-for-amazon-connect'

const domainProps: connect_cases.DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.DomainProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect_cases.DomainProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### DomainProps <a name="DomainProps" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps"></a>

Properties for creating a Customer Profiles domain.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const domainProps: customer_profiles.DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.defaultExpirationDays">defaultExpirationDays</a></code> | <code>number</code> | Default expiration time in days for customer profiles. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.domainName">domainName</a></code> | <code>string</code> | The name of the Customer Profiles domain. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>string</code> | URL of the dead letter queue for failed operations. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS key for encrypting customer profile data. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.matching">matching</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps</code> | Configuration for automatic profile matching. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.ruleBasedMatching">ruleBasedMatching</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps</code> | Configuration for rule-based profile matching. |

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.defaultExpirationDays"></a>

```typescript
public readonly defaultExpirationDays: number;
```

- *Type:* number

Default expiration time in days for customer profiles.

Profiles that haven't been updated within this timeframe
may be automatically expired and removed from the domain.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the Customer Profiles domain.

Must be unique within your AWS account and region.

---

##### `deadLetterQueueUrl`<sup>Optional</sup> <a name="deadLetterQueueUrl" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.deadLetterQueueUrl"></a>

```typescript
public readonly deadLetterQueueUrl: string;
```

- *Type:* string

URL of the dead letter queue for failed operations.

Failed profile operations and integration errors will be
sent to this SQS queue for troubleshooting and retry processing.

---

##### `defaultEncryptionKey`<sup>Optional</sup> <a name="defaultEncryptionKey" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.defaultEncryptionKey"></a>

```typescript
public readonly defaultEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS key for encrypting customer profile data.

If provided, all customer data in the domain will be
encrypted using this key for enhanced security.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.matching"></a>

```typescript
public readonly matching: MatchingProps;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps

Configuration for automatic profile matching.

Enables Customer Profiles to automatically identify and
merge profiles that represent the same customer.

---

##### `ruleBasedMatching`<sup>Optional</sup> <a name="ruleBasedMatching" id="cdk-constructs-for-amazon-connect.customer_profiles.DomainProps.property.ruleBasedMatching"></a>

```typescript
public readonly ruleBasedMatching: RuleBasedMatchingProps;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps

Configuration for rule-based profile matching.

Provides more granular control over profile matching
using custom rules and attribute comparisons.

---

### FieldMapProps <a name="FieldMapProps" id="cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const fieldMapProps: customer_profiles.FieldMapProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps.property.objectTypeField">objectTypeField</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectTypeField`<sup>Required</sup> <a name="objectTypeField" id="cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps.property.objectTypeField"></a>

```typescript
public readonly objectTypeField: ObjectTypeFieldProps;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps

---

### FlowDefinitionProps <a name="FlowDefinitionProps" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const flowDefinitionProps: customer_profiles.FlowDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.flowName">flowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.kmsArn">kmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.sourceFlowConfig">sourceFlowConfig</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnIntegration.SourceFlowConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.tasks">tasks</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnIntegration.TaskProperty[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.triggerConfig">triggerConfig</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnIntegration.TriggerConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

---

##### `sourceFlowConfig`<sup>Required</sup> <a name="sourceFlowConfig" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.sourceFlowConfig"></a>

```typescript
public readonly sourceFlowConfig: SourceFlowConfigProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnIntegration.SourceFlowConfigProperty

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.tasks"></a>

```typescript
public readonly tasks: TaskProperty[];
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnIntegration.TaskProperty[]

---

##### `triggerConfig`<sup>Required</sup> <a name="triggerConfig" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.triggerConfig"></a>

```typescript
public readonly triggerConfig: TriggerConfigProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnIntegration.TriggerConfigProperty

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### HoursOfOperationProps <a name="HoursOfOperationProps" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps"></a>

Properties for creating hours of operation.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const hoursOfOperationProps: connect.HoursOfOperationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.config">config</a></code> | <code>aws-cdk-lib.aws_connect.CfnHoursOfOperation.HoursOfOperationConfigProperty[]</code> | The configuration defining operating hours for each day. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with these hours of operation. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone for the hours of operation. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.description">description</a></code> | <code>string</code> | An optional description for the hours of operation. |

---

##### `config`<sup>Required</sup> <a name="config" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.config"></a>

```typescript
public readonly config: HoursOfOperationConfigProperty[];
```

- *Type:* aws-cdk-lib.aws_connect.CfnHoursOfOperation.HoursOfOperationConfigProperty[]

The configuration defining operating hours for each day.

Each configuration entry specifies the day of the week and
the start/end times when the associated queues are operational.
Multiple time ranges can be specified for each day to handle
split shifts or lunch breaks.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with these hours of operation.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

Must be unique within the Amazon Connect instance.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone for the hours of operation.

Must be a valid IANA time zone identifier (e.g., 'America/New_York',
'Europe/London', 'Asia/Tokyo'). All times in the configuration
will be interpreted in this time zone.

> [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

---

*Example*

```typescript
'America/New_York'
```


##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.HoursOfOperationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the hours of operation.

Helps document the purpose and usage of these operating hours.

---

### InstanceProps <a name="InstanceProps" id="cdk-constructs-for-amazon-connect.connect.InstanceProps"></a>

Properties for creating an Amazon Connect instance.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.InstanceProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const instanceProps: connect.InstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceProps.property.attributes">attributes</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstance.AttributesProperty</code> | Configuration attributes that control various features and capabilities of the instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceProps.property.identityManagementType">identityManagementType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IdentityManagementType</code> | The identity management type for the instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceProps.property.directoryId">directoryId</a></code> | <code>string</code> | The identifier for the AWS Directory Service directory. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceProps.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | The alias for the instance, used in the access URL. |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="cdk-constructs-for-amazon-connect.connect.InstanceProps.property.attributes"></a>

```typescript
public readonly attributes: AttributesProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstance.AttributesProperty

Configuration attributes that control various features and capabilities of the instance.

These attributes include telephony settings (inbound/outbound calls, early media),
monitoring features (Contact Lens, enhanced monitoring), and other instance-level
feature toggles.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-connect-instance-attributes.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-connect-instance-attributes.html)

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="cdk-constructs-for-amazon-connect.connect.InstanceProps.property.identityManagementType"></a>

```typescript
public readonly identityManagementType: IdentityManagementType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IdentityManagementType

The identity management type for the instance.

This determines how users are authenticated and managed. The setting cannot be
changed after instance creation, so choose carefully based on your organization's
authentication requirements.

> [https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html](https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html)

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="cdk-constructs-for-amazon-connect.connect.InstanceProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The identifier for the AWS Directory Service directory.

Required when `identityManagementType` is `EXISTING_DIRECTORY`.
Must be a valid directory ID in the format `d-xxxxxxxxxx`.

> [https://docs.aws.amazon.com/directoryservice/](https://docs.aws.amazon.com/directoryservice/)

---

*Example*

```typescript
'd-1234567890'
```


##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="cdk-constructs-for-amazon-connect.connect.InstanceProps.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

The alias for the instance, used in the access URL.

The instance alias becomes part of the access URL (e.g., `alias.my.connect.aws`).
This must be unique across all Amazon Connect instances in all regions.

Required when `identityManagementType` is `CONNECT_MANAGED` or `SAML`.
Not required when using `EXISTING_DIRECTORY`.

---

*Example*

```typescript
'my-contact-center'
```


### InstanceStorageConfigProps <a name="InstanceStorageConfigProps" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const instanceStorageConfigProps: connect.InstanceStorageConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.storageType">storageType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.StorageType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisFirehoseConfig">kinesisFirehoseConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisFirehoseConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisStreamConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisVideoStreamConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.s3Config">s3Config</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.S3ConfigProperty</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.storageType"></a>

```typescript
public readonly storageType: StorageType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.StorageType

---

##### `kinesisFirehoseConfig`<sup>Optional</sup> <a name="kinesisFirehoseConfig" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisFirehoseConfig"></a>

```typescript
public readonly kinesisFirehoseConfig: KinesisFirehoseConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisFirehoseConfigProperty

---

##### `kinesisStreamConfig`<sup>Optional</sup> <a name="kinesisStreamConfig" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: KinesisStreamConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisStreamConfigProperty

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: KinesisVideoStreamConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.KinesisVideoStreamConfigProperty

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="cdk-constructs-for-amazon-connect.connect.InstanceStorageConfigProps.property.s3Config"></a>

```typescript
public readonly s3Config: S3ConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.S3ConfigProperty

---

### IntegrationAssociationProps <a name="IntegrationAssociationProps" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps"></a>

Properties for creating an integration association.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const integrationAssociationProps: connect.IntegrationAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with the integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.integrationArn">integrationArn</a></code> | <code>string</code> | The ARN of the resource being integrated. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.integrationType">integrationType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IntegrationType</code> | The type of integration being associated. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with the integration.

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.integrationArn"></a>

```typescript
public readonly integrationArn: string;
```

- *Type:* string

The ARN of the resource being integrated.

Must be a valid ARN for the specified integration type.

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="cdk-constructs-for-amazon-connect.connect.IntegrationAssociationProps.property.integrationType"></a>

```typescript
public readonly integrationType: IntegrationType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IntegrationType

The type of integration being associated.

Determines how the integration will be used within Amazon Connect.

---

### IntegrationOptions <a name="IntegrationOptions" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const integrationOptions: customer_profiles.IntegrationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.eventTriggerNames">eventTriggerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.flowDefinition">flowDefinition</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.objectTypeNames">objectTypeNames</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `eventTriggerNames`<sup>Optional</sup> <a name="eventTriggerNames" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.eventTriggerNames"></a>

```typescript
public readonly eventTriggerNames: string[];
```

- *Type:* string[]

---

##### `flowDefinition`<sup>Optional</sup> <a name="flowDefinition" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.flowDefinition"></a>

```typescript
public readonly flowDefinition: FlowDefinitionProps;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps

---

##### `objectTypeName`<sup>Optional</sup> <a name="objectTypeName" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `objectTypeNames`<sup>Optional</sup> <a name="objectTypeNames" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.objectTypeNames"></a>

```typescript
public readonly objectTypeNames: ObjectTypeMapping[];
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping[]

---

##### `uri`<sup>Optional</sup> <a name="uri" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationOptions.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

### IntegrationProps <a name="IntegrationProps" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const integrationProps: customer_profiles.IntegrationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.eventTriggerNames">eventTriggerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.flowDefinition">flowDefinition</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.objectTypeNames">objectTypeNames</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.domain">domain</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.IDomain</code> | *No description.* |

---

##### `eventTriggerNames`<sup>Optional</sup> <a name="eventTriggerNames" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.eventTriggerNames"></a>

```typescript
public readonly eventTriggerNames: string[];
```

- *Type:* string[]

---

##### `flowDefinition`<sup>Optional</sup> <a name="flowDefinition" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.flowDefinition"></a>

```typescript
public readonly flowDefinition: FlowDefinitionProps;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.FlowDefinitionProps

---

##### `objectTypeName`<sup>Optional</sup> <a name="objectTypeName" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `objectTypeNames`<sup>Optional</sup> <a name="objectTypeNames" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.objectTypeNames"></a>

```typescript
public readonly objectTypeNames: ObjectTypeMapping[];
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping[]

---

##### `uri`<sup>Optional</sup> <a name="uri" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-constructs-for-amazon-connect.customer_profiles.IntegrationProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.IDomain

---

### KeyMapProps <a name="KeyMapProps" id="cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const keyMapProps: customer_profiles.KeyMapProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps.property.objectTypeKeyList">objectTypeKeyList</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectTypeKeyList`<sup>Optional</sup> <a name="objectTypeKeyList" id="cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps.property.objectTypeKeyList"></a>

```typescript
public readonly objectTypeKeyList: ObjectTypeKeyProps[];
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps[]

---

### KinesisFirehoseStorageConfigOptions <a name="KinesisFirehoseStorageConfigOptions" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisFirehoseStorageConfigOptions: connect.KinesisFirehoseStorageConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions.property.deliveryStream">deliveryStream</a></code> | <code>aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: CfnDeliveryStream;
```

- *Type:* aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigOptions.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

### KinesisFirehoseStorageConfigProps <a name="KinesisFirehoseStorageConfigProps" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisFirehoseStorageConfigProps: connect.KinesisFirehoseStorageConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.deliveryStream">deliveryStream</a></code> | <code>aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: CfnDeliveryStream;
```

- *Type:* aws-cdk-lib.aws_kinesisfirehose.CfnDeliveryStream

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfigProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### KinesisStreamStorageConfigOptions <a name="KinesisStreamStorageConfigOptions" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisStreamStorageConfigOptions: connect.KinesisStreamStorageConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `stream`<sup>Required</sup> <a name="stream" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigOptions.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

### KinesisStreamStorageConfigProps <a name="KinesisStreamStorageConfigProps" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisStreamStorageConfigProps: connect.KinesisStreamStorageConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `stream`<sup>Required</sup> <a name="stream" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisStreamStorageConfigProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### KinesisVideoStreamStorageConfigOptions <a name="KinesisVideoStreamStorageConfigOptions" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisVideoStreamStorageConfigOptions: connect.KinesisVideoStreamStorageConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.encryptionConfig">encryptionConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.EncryptionConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `stream`<sup>Required</sup> <a name="stream" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EncryptionConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.EncryptionConfigProperty

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigOptions.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

### KinesisVideoStreamStorageConfigProps <a name="KinesisVideoStreamStorageConfigProps" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const kinesisVideoStreamStorageConfigProps: connect.KinesisVideoStreamStorageConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.encryptionConfig">encryptionConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.EncryptionConfigProperty</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `stream`<sup>Required</sup> <a name="stream" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EncryptionConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstanceStorageConfig.EncryptionConfigProperty

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfigProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### KnowledgeBaseProps <a name="KnowledgeBaseProps" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps"></a>

Properties for creating a knowledge base.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const knowledgeBaseProps: qconnect.KnowledgeBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.knowledgeBaseType">knowledgeBaseType</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType</code> | The type of knowledge base. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.name">name</a></code> | <code>string</code> | The name of the knowledge base. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.dataIntegration">dataIntegration</a></code> | <code>cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration</code> | Data integration for external knowledge bases. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.description">description</a></code> | <code>string</code> | An optional description for the knowledge base. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS key for encrypting knowledge base content. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.objectFields">objectFields</a></code> | <code>string[]</code> | Object fields to sync from the data integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.renderingConfiguration">renderingConfiguration</a></code> | <code>aws-cdk-lib.aws_wisdom.CfnKnowledgeBase.RenderingConfigurationProperty</code> | Configuration for rendering knowledge base content. |

---

##### `knowledgeBaseType`<sup>Required</sup> <a name="knowledgeBaseType" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.knowledgeBaseType"></a>

```typescript
public readonly knowledgeBaseType: KnowledgeBaseType;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType

The type of knowledge base.

Determines how content is managed and integrated with external sources.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the knowledge base.

Must be unique within your AWS account and region.

---

##### `dataIntegration`<sup>Optional</sup> <a name="dataIntegration" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.dataIntegration"></a>

```typescript
public readonly dataIntegration: IDataIntegration;
```

- *Type:* cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration

Data integration for external knowledge bases.

Required for EXTERNAL knowledge base types. Defines the
connection to external data sources for automatic content sync.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the knowledge base.

Helps document the purpose and content of the knowledge base.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS key for encrypting knowledge base content.

If provided, all content in the knowledge base will be
encrypted using this key for enhanced security.

---

##### `objectFields`<sup>Optional</sup> <a name="objectFields" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.objectFields"></a>

```typescript
public readonly objectFields: string[];
```

- *Type:* string[]

Object fields to sync from the data integration.

Specifies which fields from the external data source should
be included in the knowledge base content.

---

##### `renderingConfiguration`<sup>Optional</sup> <a name="renderingConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseProps.property.renderingConfiguration"></a>

```typescript
public readonly renderingConfiguration: RenderingConfigurationProperty;
```

- *Type:* aws-cdk-lib.aws_wisdom.CfnKnowledgeBase.RenderingConfigurationProperty

Configuration for rendering knowledge base content.

Controls how content is displayed to agents, including
formatting, styling, and presentation options.

---

### LexIntegrationAssociationOptions <a name="LexIntegrationAssociationOptions" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationOptions"></a>

Options for creating a Lex integration association through Instance convenience methods.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const lexIntegrationAssociationOptions: connect.LexIntegrationAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationOptions.property.botAlias">botAlias</a></code> | <code>aws-cdk-lib.aws_lex.CfnBotAlias</code> | The Lex bot alias to integrate with Amazon Connect. |

---

##### `botAlias`<sup>Required</sup> <a name="botAlias" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationOptions.property.botAlias"></a>

```typescript
public readonly botAlias: CfnBotAlias;
```

- *Type:* aws-cdk-lib.aws_lex.CfnBotAlias

The Lex bot alias to integrate with Amazon Connect.

The bot alias represents a specific version of the Lex bot
that will be available in contact flows.

---

### LexIntegrationAssociationProps <a name="LexIntegrationAssociationProps" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps"></a>

Properties for creating a Lex integration association.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const lexIntegrationAssociationProps: connect.LexIntegrationAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps.property.botAlias">botAlias</a></code> | <code>aws-cdk-lib.aws_lex.CfnBotAlias</code> | The Lex bot alias to integrate with Amazon Connect. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with the Lex bot. |

---

##### `botAlias`<sup>Required</sup> <a name="botAlias" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps.property.botAlias"></a>

```typescript
public readonly botAlias: CfnBotAlias;
```

- *Type:* aws-cdk-lib.aws_lex.CfnBotAlias

The Lex bot alias to integrate with Amazon Connect.

The bot alias represents a specific version of the Lex bot
that will be available in contact flows for natural language
processing and conversational AI capabilities.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with the Lex bot.

---

### ManualSearchAIAgentConfiguration <a name="ManualSearchAIAgentConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration"></a>

Configuration for manual search AI agents.

Defines the AI prompts and settings used for agent-initiated searches.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const manualSearchAIAgentConfiguration: qconnect.ManualSearchAIAgentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration.property.answerGenerationPrompt">answerGenerationPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for generating answers from search results. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration.property.locale">locale</a></code> | <code>string</code> | The locale for language-specific processing. |

---

##### `answerGenerationPrompt`<sup>Required</sup> <a name="answerGenerationPrompt" id="cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration.property.answerGenerationPrompt"></a>

```typescript
public readonly answerGenerationPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for generating answers from search results.

This prompt guides how the AI presents search results and
formulates helpful responses for agents.

---

##### `locale`<sup>Required</sup> <a name="locale" id="cdk-constructs-for-amazon-connect.qconnect.ManualSearchAIAgentConfiguration.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The locale for language-specific processing.

Determines the language and regional settings for search
processing and result presentation.

---

### MatchingProps <a name="MatchingProps" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps"></a>

Configuration for profile matching in Customer Profiles.

Defines how customer profiles from different sources are matched
and merged to create unified customer views.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const matchingProps: customer_profiles.MatchingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.enabled">enabled</a></code> | <code>boolean</code> | Whether profile matching is enabled. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.autoMerging">autoMerging</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.AutoMergingProperty</code> | Configuration for automatic profile merging. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.exportingConfig">exportingConfig</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.ExportingConfigProperty</code> | Configuration for exporting matching results. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.jobSchedule">jobSchedule</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.JobScheduleProperty</code> | Schedule for running matching jobs. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Whether profile matching is enabled.

When enabled, Customer Profiles will automatically identify
and merge profiles that represent the same customer.

---

##### `autoMerging`<sup>Optional</sup> <a name="autoMerging" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.autoMerging"></a>

```typescript
public readonly autoMerging: AutoMergingProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.AutoMergingProperty

Configuration for automatic profile merging.

Defines how matched profiles are automatically combined,
including conflict resolution and data consolidation rules.

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: ExportingConfigProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.ExportingConfigProperty

Configuration for exporting matching results.

Defines how matching results and merged profiles are
exported to external systems or data lakes.

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="cdk-constructs-for-amazon-connect.customer_profiles.MatchingProps.property.jobSchedule"></a>

```typescript
public readonly jobSchedule: JobScheduleProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.JobScheduleProperty

Schedule for running matching jobs.

Defines when and how frequently the matching process
runs to identify and merge duplicate profiles.

---

### MediaConcurrency <a name="MediaConcurrency" id="cdk-constructs-for-amazon-connect.connect.MediaConcurrency"></a>

Media concurrency configuration for a routing profile.

Defines how many simultaneous contacts an agent can handle
for each communication channel.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.MediaConcurrency.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const mediaConcurrency: connect.MediaConcurrency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.MediaConcurrency.property.channel">channel</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ChannelType</code> | The communication channel type. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.MediaConcurrency.property.concurrency">concurrency</a></code> | <code>number</code> | The maximum number of simultaneous contacts for this channel. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="cdk-constructs-for-amazon-connect.connect.MediaConcurrency.property.channel"></a>

```typescript
public readonly channel: ChannelType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ChannelType

The communication channel type.

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="cdk-constructs-for-amazon-connect.connect.MediaConcurrency.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

The maximum number of simultaneous contacts for this channel.

For voice, this is typically 1. For chat, task, and email,
agents can often handle multiple simultaneous contacts.

---

### ObjectTypeFieldProps <a name="ObjectTypeFieldProps" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const objectTypeFieldProps: customer_profiles.ObjectTypeFieldProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `source`<sup>Optional</sup> <a name="source" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Optional</sup> <a name="target" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeFieldProps.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

### ObjectTypeKeyProps <a name="ObjectTypeKeyProps" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const objectTypeKeyProps: customer_profiles.ObjectTypeKeyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps.property.standardIdentifiers">standardIdentifiers</a></code> | <code>string[]</code> | *No description.* |

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `standardIdentifiers`<sup>Optional</sup> <a name="standardIdentifiers" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeKeyProps.property.standardIdentifiers"></a>

```typescript
public readonly standardIdentifiers: string[];
```

- *Type:* string[]

---

### ObjectTypeMapping <a name="ObjectTypeMapping" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const objectTypeMapping: customer_profiles.ObjectTypeMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeMapping.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### ObjectTypeProps <a name="ObjectTypeProps" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const objectTypeProps: customer_profiles.ObjectTypeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.domain">domain</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.IDomain</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.allowProfileCreation">allowProfileCreation</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.expirationDays">expirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.fields">fields</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.keys">keys</a></code> | <code>cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps[]</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.sourceLastUpdatedTimestampFormat">sourceLastUpdatedTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.IDomain

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `allowProfileCreation`<sup>Optional</sup> <a name="allowProfileCreation" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.allowProfileCreation"></a>

```typescript
public readonly allowProfileCreation: boolean;
```

- *Type:* boolean

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

---

##### `fields`<sup>Optional</sup> <a name="fields" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.fields"></a>

```typescript
public readonly fields: FieldMapProps[];
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.FieldMapProps[]

---

##### `keys`<sup>Optional</sup> <a name="keys" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.keys"></a>

```typescript
public readonly keys: KeyMapProps[];
```

- *Type:* cdk-constructs-for-amazon-connect.customer_profiles.KeyMapProps[]

---

##### `sourceLastUpdatedTimestampFormat`<sup>Optional</sup> <a name="sourceLastUpdatedTimestampFormat" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.sourceLastUpdatedTimestampFormat"></a>

```typescript
public readonly sourceLastUpdatedTimestampFormat: string;
```

- *Type:* string

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="cdk-constructs-for-amazon-connect.customer_profiles.ObjectTypeProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

### PromptAttributes <a name="PromptAttributes" id="cdk-constructs-for-amazon-connect.connect.PromptAttributes"></a>

Attributes for importing an existing prompt.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.PromptAttributes.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const promptAttributes: connect.PromptAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptAttributes.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance containing the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptAttributes.property.name">name</a></code> | <code>string</code> | The name of the existing prompt to import. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.PromptAttributes.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance containing the prompt.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.PromptAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the existing prompt to import.

---

### PromptProps <a name="PromptProps" id="cdk-constructs-for-amazon-connect.connect.PromptProps"></a>

Properties for creating a prompt.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.PromptProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const promptProps: connect.PromptProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptProps.property.name">name</a></code> | <code>string</code> | The name of the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptProps.property.description">description</a></code> | <code>string</code> | An optional description for the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PromptProps.property.s3Uri">s3Uri</a></code> | <code>string</code> | The S3 URI of the audio file for this prompt. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.PromptProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this prompt.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.PromptProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the prompt.

Must be unique within the Amazon Connect instance.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.PromptProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the prompt.

Helps document the purpose and content of the prompt.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="cdk-constructs-for-amazon-connect.connect.PromptProps.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The S3 URI of the audio file for this prompt.

Should point to a valid audio file in a supported format
(WAV, MP3) that Amazon Connect can access. The S3 bucket
must be in the same region as your Amazon Connect instance.

---

*Example*

```typescript
's3://my-connect-bucket/prompts/welcome-message.wav'
```


### QconnectAssistantAssociationOptions <a name="QconnectAssistantAssociationOptions" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const qconnectAssistantAssociationOptions: connect.QconnectAssistantAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationOptions.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationOptions.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### QconnectAssistantAssociationProps <a name="QconnectAssistantAssociationProps" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const qconnectAssistantAssociationProps: connect.QconnectAssistantAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps.property.assistant">assistant</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAssistant</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `assistant`<sup>Required</sup> <a name="assistant" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps.property.assistant"></a>

```typescript
public readonly assistant: IAssistant;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAssistant

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### QconnectKnowledgeBaseAssociationOptions <a name="QconnectKnowledgeBaseAssociationOptions" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const qconnectKnowledgeBaseAssociationOptions: connect.QconnectKnowledgeBaseAssociationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationOptions.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationOptions.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### QconnectKnowledgeBaseAssociationProps <a name="QconnectKnowledgeBaseAssociationProps" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const qconnectKnowledgeBaseAssociationProps: connect.QconnectKnowledgeBaseAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps.property.knowledgeBase">knowledgeBase</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociationProps.property.knowledgeBase"></a>

```typescript
public readonly knowledgeBase: IKnowledgeBase;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase

---

### QueueProps <a name="QueueProps" id="cdk-constructs-for-amazon-connect.connect.QueueProps"></a>

Properties for creating an Amazon Connect queue.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.QueueProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const queueProps: connect.QueueProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.hoursOfOperation">hoursOfOperation</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IHoursOfOperation</code> | The hours of operation for this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.name">name</a></code> | <code>string</code> | The name of the queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.description">description</a></code> | <code>string</code> | An optional description for the queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.maxContacts">maxContacts</a></code> | <code>number</code> | The maximum number of contacts that can be in the queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code>aws-cdk-lib.aws_connect.CfnQueue.OutboundCallerConfigProperty</code> | Configuration for outbound caller ID when agents make calls from this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.quickConnectArns">quickConnectArns</a></code> | <code>string[]</code> | ARNs of quick connects associated with this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.QueueProps.property.status">status</a></code> | <code>string</code> | The status of the queue. |

---

##### `hoursOfOperation`<sup>Required</sup> <a name="hoursOfOperation" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.hoursOfOperation"></a>

```typescript
public readonly hoursOfOperation: IHoursOfOperation;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IHoursOfOperation

The hours of operation for this queue.

Determines when the queue is available to receive contacts.
Contacts received outside these hours can be handled according
to the configured after-hours behavior.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this queue.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the queue.

Must be unique within the Amazon Connect instance.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the queue.

Helps document the purpose and usage of the queue.

---

##### `maxContacts`<sup>Optional</sup> <a name="maxContacts" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.maxContacts"></a>

```typescript
public readonly maxContacts: number;
```

- *Type:* number
- *Default:* No limit

The maximum number of contacts that can be in the queue.

When this limit is reached, new contacts will be handled according
to the overflow behavior configured in the contact flow.

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: OutboundCallerConfigProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnQueue.OutboundCallerConfigProperty

Configuration for outbound caller ID when agents make calls from this queue.

Specifies the caller ID name and number that will be displayed
to customers when agents initiate outbound calls.

---

##### `quickConnectArns`<sup>Optional</sup> <a name="quickConnectArns" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.quickConnectArns"></a>

```typescript
public readonly quickConnectArns: string[];
```

- *Type:* string[]

ARNs of quick connects associated with this queue.

Quick connects allow agents to quickly transfer customers to
predefined destinations like other agents, queues, or external numbers.

---

##### `status`<sup>Optional</sup> <a name="status" id="cdk-constructs-for-amazon-connect.connect.QueueProps.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string
- *Default:* 'ENABLED'

The status of the queue.

Determines whether the queue is active and can receive contacts.

---

### RoutingProfileProps <a name="RoutingProfileProps" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps"></a>

Properties for creating a routing profile.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const routingProfileProps: connect.RoutingProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.defaultOutboundQueue">defaultOutboundQueue</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IQueue</code> | The default queue for outbound calls made by agents with this profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.description">description</a></code> | <code>string</code> | A description of the routing profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this routing profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code>cdk-constructs-for-amazon-connect.connect.MediaConcurrency[]</code> | Media concurrency settings for each channel type. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.routingProfileName">routingProfileName</a></code> | <code>string</code> | The name of the routing profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.queueConfigs">queueConfigs</a></code> | <code>cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig[]</code> | Queue configurations that define which queues agents can handle. |

---

##### `defaultOutboundQueue`<sup>Required</sup> <a name="defaultOutboundQueue" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.defaultOutboundQueue"></a>

```typescript
public readonly defaultOutboundQueue: IQueue;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IQueue

The default queue for outbound calls made by agents with this profile.

When agents initiate outbound calls, they will be associated
with this queue for reporting and routing purposes.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the routing profile.

Helps document the purpose and usage of the routing profile.

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this routing profile.

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: MediaConcurrency[];
```

- *Type:* cdk-constructs-for-amazon-connect.connect.MediaConcurrency[]

Media concurrency settings for each channel type.

Defines how many simultaneous contacts agents can handle
for voice, chat, task, and email channels.

---

##### `routingProfileName`<sup>Required</sup> <a name="routingProfileName" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.routingProfileName"></a>

```typescript
public readonly routingProfileName: string;
```

- *Type:* string

The name of the routing profile.

Must be unique within the Amazon Connect instance.

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileProps.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: RoutingProfileQueueConfig[];
```

- *Type:* cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig[]

Queue configurations that define which queues agents can handle.

Each configuration specifies a queue, its priority, routing delay,
and the channel type for contacts from that queue.

---

### RoutingProfileQueueConfig <a name="RoutingProfileQueueConfig" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig"></a>

Queue configuration for a routing profile.

Defines how contacts from specific queues are routed to agents
with this routing profile.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const routingProfileQueueConfig: connect.RoutingProfileQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.channel">channel</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ChannelType</code> | The channel type for contacts from this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.delay">delay</a></code> | <code>number</code> | The delay in seconds before routing contacts from this queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.priority">priority</a></code> | <code>number</code> | The priority of this queue relative to other queues. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.queue">queue</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IQueue</code> | The queue to include in this routing profile. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.channel"></a>

```typescript
public readonly channel: ChannelType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ChannelType

The channel type for contacts from this queue.

Must match one of the channels configured in the routing
profile's media concurrency settings.

---

##### `delay`<sup>Required</sup> <a name="delay" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

The delay in seconds before routing contacts from this queue.

Allows for prioritization by introducing delays for lower
priority queues.

---

##### `priority`<sup>Required</sup> <a name="priority" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this queue relative to other queues.

Lower numbers indicate higher priority. Contacts from higher
priority queues are routed to agents first.

---

##### `queue`<sup>Required</sup> <a name="queue" id="cdk-constructs-for-amazon-connect.connect.RoutingProfileQueueConfig.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IQueue

The queue to include in this routing profile.

---

### RuleBasedMatchingProps <a name="RuleBasedMatchingProps" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps"></a>

Configuration for rule-based profile matching.

Provides more granular control over how profiles are matched
using custom rules and attribute comparisons.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.Initializer"></a>

```typescript
import { customer_profiles } from 'cdk-constructs-for-amazon-connect'

const ruleBasedMatchingProps: customer_profiles.RuleBasedMatchingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.enabled">enabled</a></code> | <code>boolean</code> | Whether rule-based matching is enabled. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.attributeTypesSelector">attributeTypesSelector</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.AttributeTypesSelectorProperty</code> | Selector for attribute types to use in matching. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.conflictResolution">conflictResolution</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.ConflictResolutionProperty</code> | Configuration for resolving conflicts during matching. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.exportingConfig">exportingConfig</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.ExportingConfigProperty</code> | Configuration for exporting matching results. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.matchingRules">matchingRules</a></code> | <code>aws-cdk-lib.aws_customerprofiles.CfnDomain.MatchingRuleProperty[]</code> | Custom matching rules for profile comparison. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.maxAllowedRuleLevelForMatching">maxAllowedRuleLevelForMatching</a></code> | <code>number</code> | Maximum rule level allowed for matching. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.maxAllowedRuleLevelForMerging">maxAllowedRuleLevelForMerging</a></code> | <code>number</code> | Maximum rule level allowed for merging. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Whether rule-based matching is enabled.

When enabled, profiles are matched using the specified
rules and attribute comparisons.

---

##### `attributeTypesSelector`<sup>Optional</sup> <a name="attributeTypesSelector" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.attributeTypesSelector"></a>

```typescript
public readonly attributeTypesSelector: AttributeTypesSelectorProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.AttributeTypesSelectorProperty

Selector for attribute types to use in matching.

Defines which profile attributes should be considered
when determining if profiles represent the same customer.

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: ConflictResolutionProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.ConflictResolutionProperty

Configuration for resolving conflicts during matching.

Defines how to handle conflicting data when merging
matched profiles, such as which source takes precedence.

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.exportingConfig"></a>

```typescript
public readonly exportingConfig: ExportingConfigProperty;
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.ExportingConfigProperty

Configuration for exporting matching results.

Defines how rule-based matching results are exported
to external systems or data lakes.

---

##### `matchingRules`<sup>Optional</sup> <a name="matchingRules" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.matchingRules"></a>

```typescript
public readonly matchingRules: MatchingRuleProperty[];
```

- *Type:* aws-cdk-lib.aws_customerprofiles.CfnDomain.MatchingRuleProperty[]

Custom matching rules for profile comparison.

Defines specific rules for how profiles should be compared
and matched based on attribute values and patterns.

---

##### `maxAllowedRuleLevelForMatching`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMatching" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.maxAllowedRuleLevelForMatching"></a>

```typescript
public readonly maxAllowedRuleLevelForMatching: number;
```

- *Type:* number

Maximum rule level allowed for matching.

Controls the complexity of matching rules that can be applied,
affecting performance and accuracy trade-offs.

---

##### `maxAllowedRuleLevelForMerging`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMerging" id="cdk-constructs-for-amazon-connect.customer_profiles.RuleBasedMatchingProps.property.maxAllowedRuleLevelForMerging"></a>

```typescript
public readonly maxAllowedRuleLevelForMerging: number;
```

- *Type:* number

Maximum rule level allowed for merging.

Controls the complexity of merging rules that can be applied
when combining matched profiles.

---

### S3StorageConfigOptions <a name="S3StorageConfigOptions" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const s3StorageConfigOptions: connect.S3StorageConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `key`<sup>Optional</sup> <a name="key" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigOptions.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

### S3StorageConfigProps <a name="S3StorageConfigProps" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const s3StorageConfigProps: connect.S3StorageConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.resourceType">resourceType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ResourceType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ResourceType

---

##### `key`<sup>Optional</sup> <a name="key" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.S3StorageConfigProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### SecurityProfileProps <a name="SecurityProfileProps" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps"></a>

Properties for creating a security profile.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const securityProfileProps: connect.SecurityProfileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this security profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | The name of the security profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.allowedAccessControlTags">allowedAccessControlTags</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.CfnTag[]</code> | Access control tags that users with this profile can view and edit. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.description">description</a></code> | <code>string</code> | An optional description for the security profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.permissions">permissions</a></code> | <code>string[]</code> | List of permissions granted to users with this security profile. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this security profile.

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

The name of the security profile.

Must be unique within the Amazon Connect instance.

---

##### `allowedAccessControlTags`<sup>Optional</sup> <a name="allowedAccessControlTags" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.allowedAccessControlTags"></a>

```typescript
public readonly allowedAccessControlTags: IResolvable | (IResolvable | CfnTag)[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.CfnTag[]

Access control tags that users with this profile can view and edit.

These tags control which resources (like queues, routing profiles,
or contact flows) users can access based on resource tagging.
Provides fine-grained access control beyond basic permissions.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for the security profile.

Helps document the purpose and scope of permissions granted
by this security profile.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="cdk-constructs-for-amazon-connect.connect.SecurityProfileProps.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

List of permissions granted to users with this security profile.

Permissions control what actions users can perform within Amazon Connect,
such as viewing reports, managing users, or accessing specific features.
Use Amazon Connect's predefined permission strings.

> [https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-permissions.html](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-permissions.html)

---

*Example*

```typescript
['BasicAgentAccess', 'OutboundCallAccess', 'ViewReports']
```


### SelfServiceAIAgentConfiguration <a name="SelfServiceAIAgentConfiguration" id="cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration"></a>

Configuration for self-service AI agents.

Defines the AI prompts and settings used for customer self-service interactions.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration.Initializer"></a>

```typescript
import { qconnect } from 'cdk-constructs-for-amazon-connect'

const selfServiceAIAgentConfiguration: qconnect.SelfServiceAIAgentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration.property.selfServiceAnswerGenerationPrompt">selfServiceAnswerGenerationPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for generating self-service answers. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration.property.selfServicePreProcessingPrompt">selfServicePreProcessingPrompt</a></code> | <code>cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion</code> | AI prompt for preprocessing customer inputs. |

---

##### `selfServiceAnswerGenerationPrompt`<sup>Required</sup> <a name="selfServiceAnswerGenerationPrompt" id="cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration.property.selfServiceAnswerGenerationPrompt"></a>

```typescript
public readonly selfServiceAnswerGenerationPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for generating self-service answers.

This prompt guides how the AI formulates responses for
customers in self-service scenarios.

---

##### `selfServicePreProcessingPrompt`<sup>Required</sup> <a name="selfServicePreProcessingPrompt" id="cdk-constructs-for-amazon-connect.qconnect.SelfServiceAIAgentConfiguration.property.selfServicePreProcessingPrompt"></a>

```typescript
public readonly selfServicePreProcessingPrompt: IAIPromptVersion;
```

- *Type:* cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion

AI prompt for preprocessing customer inputs.

Prepares and analyzes customer inputs before generating
responses, improving accuracy and relevance.

---

### TemplateContactFlowProps <a name="TemplateContactFlowProps" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const templateContactFlowProps: connect.TemplateContactFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.type">type</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ContactFlowType</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.type"></a>

```typescript
public readonly type: ContactFlowType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ContactFlowType

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-constructs-for-amazon-connect.connect.TemplateContactFlowProps.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### UserPhoneConfiguration <a name="UserPhoneConfiguration" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration"></a>

Phone configuration for an Amazon Connect user.

Defines how the user will handle voice interactions and telephony settings.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const userPhoneConfiguration: connect.UserPhoneConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.phoneType">phoneType</a></code> | <code>cdk-constructs-for-amazon-connect.connect.PhoneType</code> | The type of phone the user will use. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | Time limit in seconds for after contact work (ACW). |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.autoAccept">autoAccept</a></code> | <code>boolean</code> | Whether to automatically accept incoming calls. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | The desk phone number when using DESK_PHONE type. |

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.phoneType"></a>

```typescript
public readonly phoneType: PhoneType;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.PhoneType

The type of phone the user will use.

Determines whether the agent uses a software phone through their
browser or a physical desk phone.

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number
- *Default:* No limit

Time limit in seconds for after contact work (ACW).

ACW is the time agents have to complete work related to a contact
after the contact ends, such as updating records or scheduling follow-ups.

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to automatically accept incoming calls.

When enabled, calls are automatically connected to the agent without
requiring them to manually accept each call.

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="deskPhoneNumber" id="cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

The desk phone number when using DESK_PHONE type.

Required when phoneType is DESK_PHONE. Should be in E.164 format
(e.g., +1234567890).

---

### UserProps <a name="UserProps" id="cdk-constructs-for-amazon-connect.connect.UserProps"></a>

Properties for creating an Amazon Connect user.

#### Initializer <a name="Initializer" id="cdk-constructs-for-amazon-connect.connect.UserProps.Initializer"></a>

```typescript
import { connect } from 'cdk-constructs-for-amazon-connect'

const userProps: connect.UserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | The Amazon Connect instance to associate with this user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.phoneConfig">phoneConfig</a></code> | <code>cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration</code> | Phone configuration for the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.routingProfile">routingProfile</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IRoutingProfile</code> | The routing profile assigned to the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.securityProfiles">securityProfiles</a></code> | <code>cdk-constructs-for-amazon-connect.connect.ISecurityProfile[]</code> | Security profiles assigned to the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.username">username</a></code> | <code>string</code> | The username for the user account. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.identityInfo">identityInfo</a></code> | <code>aws-cdk-lib.aws_connect.CfnUser.UserIdentityInfoProperty</code> | Identity information for the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.UserProps.property.password">password</a></code> | <code>string</code> | The password for the user account. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

The Amazon Connect instance to associate with this user.

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: UserPhoneConfiguration;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.UserPhoneConfiguration

Phone configuration for the user.

Defines how the user will handle voice interactions, including
phone type, auto-accept settings, and after-contact work time limits.

---

##### `routingProfile`<sup>Required</sup> <a name="routingProfile" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.routingProfile"></a>

```typescript
public readonly routingProfile: IRoutingProfile;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IRoutingProfile

The routing profile assigned to the user.

Determines which queues the user can handle contacts from and
their media concurrency settings (voice, chat, task).

---

##### `securityProfiles`<sup>Required</sup> <a name="securityProfiles" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.securityProfiles"></a>

```typescript
public readonly securityProfiles: ISecurityProfile[];
```

- *Type:* cdk-constructs-for-amazon-connect.connect.ISecurityProfile[]

Security profiles assigned to the user.

Security profiles define what permissions and access the user has
within Amazon Connect. Users can have multiple security profiles.

---

##### `username`<sup>Required</sup> <a name="username" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username for the user account.

Must be unique within the Amazon Connect instance and follow
the instance's identity management requirements.

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.identityInfo"></a>

```typescript
public readonly identityInfo: UserIdentityInfoProperty;
```

- *Type:* aws-cdk-lib.aws_connect.CfnUser.UserIdentityInfoProperty

Identity information for the user.

Includes personal details like first name, last name, and email address.
Used for display purposes and contact information.

---

##### `password`<sup>Optional</sup> <a name="password" id="cdk-constructs-for-amazon-connect.connect.UserProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the user account.

Required when using CONNECT_MANAGED identity management.
Not used with SAML or EXISTING_DIRECTORY identity management.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAIAgent <a name="IAIAgent" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.AIAgent, cdk-constructs-for-amazon-connect.qconnect.IAIAgent

Represents an Amazon Q in Connect AI agent.

An AI agent provides specialized AI capabilities within an assistant,
such as answer recommendations, manual search assistance, or self-service
customer interactions.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.aiAgentArn">aiAgentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AI agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The unique identifier of the AI agent. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiAgentArn`<sup>Required</sup> <a name="aiAgentArn" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.aiAgentArn"></a>

```typescript
public readonly aiAgentArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AI agent.

Used to reference the AI agent in assistant configurations
and IAM policies.

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgent.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The unique identifier of the AI agent.

Used to reference the AI agent within Amazon Q in Connect APIs.

---

### IAIAgentVersion <a name="IAIAgentVersion" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.AIAgentVersion, cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.aiAgentVersionId">aiAgentVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.versionNumber">versionNumber</a></code> | <code>aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiAgentVersionId`<sup>Required</sup> <a name="aiAgentVersionId" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.aiAgentVersionId"></a>

```typescript
public readonly aiAgentVersionId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="cdk-constructs-for-amazon-connect.qconnect.IAIAgentVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

---

### IAIPrompt <a name="IAIPrompt" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.AIPrompt, cdk-constructs-for-amazon-connect.qconnect.IAIPrompt

Represents an Amazon Q in Connect AI prompt.

An AI prompt defines the instructions and context that guide AI models
in generating appropriate responses for different scenarios.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.aiPromptArn">aiPromptArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AI prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.aiPromptId">aiPromptId</a></code> | <code>string</code> | The unique identifier of the AI prompt. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiPromptArn`<sup>Required</sup> <a name="aiPromptArn" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.aiPromptArn"></a>

```typescript
public readonly aiPromptArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AI prompt.

Used to reference the AI prompt in AI agent configurations
and IAM policies.

---

##### `aiPromptId`<sup>Required</sup> <a name="aiPromptId" id="cdk-constructs-for-amazon-connect.qconnect.IAIPrompt.property.aiPromptId"></a>

```typescript
public readonly aiPromptId: string;
```

- *Type:* string

The unique identifier of the AI prompt.

Used to reference the AI prompt within Amazon Q in Connect APIs.

---

### IAIPromptVersion <a name="IAIPromptVersion" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.AIPromptVersion, cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.aiPromptVersionId">aiPromptVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.versionNumber">versionNumber</a></code> | <code>aws-cdk-lib.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `aiPromptVersionId`<sup>Required</sup> <a name="aiPromptVersionId" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.aiPromptVersionId"></a>

```typescript
public readonly aiPromptVersionId: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="cdk-constructs-for-amazon-connect.qconnect.IAIPromptVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: IResolvable;
```

- *Type:* aws-cdk-lib.IResolvable

---

### IApplication <a name="IApplication" id="cdk-constructs-for-amazon-connect.appintegrations.IApplication"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.appintegrations.Application, cdk-constructs-for-amazon-connect.appintegrations.IApplication

Represents an Amazon AppIntegrations application.

An application defines the configuration and permissions for
integrating external systems with AWS services like Amazon Connect.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.applicationArn">applicationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the application. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="cdk-constructs-for-amazon-connect.appintegrations.IApplication.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the application.

Used to reference the application in integration associations,
IAM policies, and other AWS services.

---

### IAssistant <a name="IAssistant" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.Assistant, cdk-constructs-for-amazon-connect.qconnect.IAssistant

Represents an Amazon Q in Connect assistant.

An assistant provides AI-powered recommendations and knowledge to agents
during customer interactions, helping them provide better and faster service.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.assistantArn">assistantArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the assistant. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.assistantId">assistantId</a></code> | <code>string</code> | The unique identifier of the assistant. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the assistant.

Used to reference the assistant in knowledge base associations,
Connect integrations, and IAM policies.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="cdk-constructs-for-amazon-connect.qconnect.IAssistant.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The unique identifier of the assistant.

Used to reference the assistant within Amazon Q in Connect APIs.

---

### IAssistantAssociation <a name="IAssistantAssociation" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.AssistantAssociation, cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.assistantAssociationArn">assistantAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.assistantAssociationId">assistantAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assistantAssociationArn`<sup>Required</sup> <a name="assistantAssociationArn" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.assistantAssociationArn"></a>

```typescript
public readonly assistantAssociationArn: string;
```

- *Type:* string

---

##### `assistantAssociationId`<sup>Required</sup> <a name="assistantAssociationId" id="cdk-constructs-for-amazon-connect.qconnect.IAssistantAssociation.property.assistantAssociationId"></a>

```typescript
public readonly assistantAssociationId: string;
```

- *Type:* string

---

### IContactFlow <a name="IContactFlow" id="cdk-constructs-for-amazon-connect.connect.IContactFlow"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.ContactFlow, cdk-constructs-for-amazon-connect.connect.TemplateContactFlow, cdk-constructs-for-amazon-connect.connect.IContactFlow

Represents an Amazon Connect contact flow.

A contact flow defines the customer experience and interaction logic
within your contact center, including routing decisions, prompts,
and integrations with other services.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IContactFlow.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IContactFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact flow. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IContactFlow.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | The unique identifier of the contact flow. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IContactFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IContactFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="cdk-constructs-for-amazon-connect.connect.IContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact flow.

Used to reference the contact flow in other AWS services and
IAM policies.

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="cdk-constructs-for-amazon-connect.connect.IContactFlow.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

The unique identifier of the contact flow.

Used to reference the contact flow within Amazon Connect APIs
and other contact flows.

---

### IDataIntegration <a name="IDataIntegration" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.appintegrations.DataIntegration, cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.dataIntegrationArn">dataIntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `dataIntegrationArn`<sup>Required</sup> <a name="dataIntegrationArn" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.dataIntegrationArn"></a>

```typescript
public readonly dataIntegrationArn: string;
```

- *Type:* string

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="cdk-constructs-for-amazon-connect.appintegrations.IDataIntegration.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

---

### IDomain <a name="IDomain" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect_cases.Domain, cdk-constructs-for-amazon-connect.connect_cases.IDomain


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="cdk-constructs-for-amazon-connect.connect_cases.IDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

### IDomain <a name="IDomain" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.customer_profiles.Domain, cdk-constructs-for-amazon-connect.customer_profiles.IDomain

Represents an Amazon Connect Customer Profiles domain.

A domain is a container for customer profiles and defines the
configuration for profile management, matching, and data retention.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.domainArn">domainArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the domain. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.domainName">domainName</a></code> | <code>string</code> | The name of the Customer Profiles domain. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the domain.

Used to reference the domain in integrations, IAM policies,
and other AWS services.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-constructs-for-amazon-connect.customer_profiles.IDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the Customer Profiles domain.

---

### IHoursOfOperation <a name="IHoursOfOperation" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.HoursOfOperation, cdk-constructs-for-amazon-connect.connect.IHoursOfOperation

Represents Amazon Connect hours of operation.

Hours of operation define when queues are available to receive contacts
and when agents are expected to be available for customer interactions.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the hours of operation. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | The unique identifier of the hours of operation. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the hours of operation.

Used to reference the hours of operation in queue configurations
and other Amazon Connect resources.

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="cdk-constructs-for-amazon-connect.connect.IHoursOfOperation.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

The unique identifier of the hours of operation.

Used to reference the hours of operation within Amazon Connect APIs.

---

### IInstance <a name="IInstance" id="cdk-constructs-for-amazon-connect.connect.IInstance"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.Instance, cdk-constructs-for-amazon-connect.connect.IInstance

Represents an Amazon Connect instance.

An Amazon Connect instance is a virtual contact center that contains all the
resources and settings related to your contact center, including users, queues,
contact flows, and telephony configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.instanceArn">instanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.instanceId">instanceId</a></code> | <code>string</code> | The unique identifier of the Amazon Connect instance. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstance.property.serviceRole">serviceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM service role associated with the instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the instance.

The ARN uniquely identifies the instance across all of AWS and can be used
to reference the instance in IAM policies and other AWS services.

---

*Example*

```typescript
'arn:aws:connect:us-east-1:123456789012:instance/12345678-1234-1234-1234-123456789012'
```


##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The unique identifier of the Amazon Connect instance.

This is a system-generated UUID that uniquely identifies the instance
within your AWS account and region.

---

*Example*

```typescript
'12345678-1234-1234-1234-123456789012'
```


##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="cdk-constructs-for-amazon-connect.connect.IInstance.property.serviceRole"></a>

```typescript
public readonly serviceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM service role associated with the instance.

This role is automatically created by Amazon Connect and is used by the service
to perform actions on your behalf, such as creating CloudWatch logs and accessing
other AWS services.

---

### IInstanceStorageConfig <a name="IInstanceStorageConfig" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.InstanceStorageConfig, cdk-constructs-for-amazon-connect.connect.KinesisFirehoseStorageConfig, cdk-constructs-for-amazon-connect.connect.KinesisStorageConfig, cdk-constructs-for-amazon-connect.connect.KinesisVideoStreamStorageConfig, cdk-constructs-for-amazon-connect.connect.S3StorageConfig, cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.instance">instance</a></code> | <code>cdk-constructs-for-amazon-connect.connect.IInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="cdk-constructs-for-amazon-connect.connect.IInstanceStorageConfig.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* cdk-constructs-for-amazon-connect.connect.IInstance

---

### IIntegration <a name="IIntegration" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.customer_profiles.Integration, cdk-constructs-for-amazon-connect.customer_profiles.IIntegration


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `uri`<sup>Optional</sup> <a name="uri" id="cdk-constructs-for-amazon-connect.customer_profiles.IIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

### IIntegrationAssociation <a name="IIntegrationAssociation" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.ApplicationIntegrationAssociation, cdk-constructs-for-amazon-connect.connect.CasesDomainAssociation, cdk-constructs-for-amazon-connect.connect.IntegrationAssociation, cdk-constructs-for-amazon-connect.connect.LexIntegrationAssociation, cdk-constructs-for-amazon-connect.connect.QconnectAssistantAssociation, cdk-constructs-for-amazon-connect.connect.QconnectKnowledgeBaseAssociation, cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation

Represents an Amazon Connect integration association.

An integration association connects external services and resources
with your Amazon Connect instance, enabling enhanced functionality
and capabilities.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.integrationAssociationArn">integrationAssociationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the integration association. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The unique identifier of the integration association. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `integrationAssociationArn`<sup>Required</sup> <a name="integrationAssociationArn" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.integrationAssociationArn"></a>

```typescript
public readonly integrationAssociationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the integration association.

Used to reference the association in IAM policies and other AWS services.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="cdk-constructs-for-amazon-connect.connect.IIntegrationAssociation.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The unique identifier of the integration association.

Used to reference the association within Amazon Connect APIs.

---

### IKnowledgeBase <a name="IKnowledgeBase" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.qconnect.KnowledgeBase, cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase

Represents an Amazon Q in Connect knowledge base.

A knowledge base stores and organizes information that can be used
by AI assistants to provide recommendations and answers to agents
during customer interactions.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | The unique identifier of the knowledge base. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the knowledge base.

Used to reference the knowledge base in assistant associations,
Connect integrations, and IAM policies.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="cdk-constructs-for-amazon-connect.qconnect.IKnowledgeBase.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

The unique identifier of the knowledge base.

Used to reference the knowledge base within Amazon Q in Connect APIs.

---

### IPrompt <a name="IPrompt" id="cdk-constructs-for-amazon-connect.connect.IPrompt"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.Prompt, cdk-constructs-for-amazon-connect.connect.IPrompt

Represents an Amazon Connect prompt.

A prompt is an audio message that can be played to customers during
their interaction with your contact center, such as welcome messages,
hold music, or informational announcements.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IPrompt.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IPrompt.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IPrompt.property.promptArn">promptArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the prompt. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IPrompt.property.promptId">promptId</a></code> | <code>string</code> | The unique identifier of the prompt. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IPrompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IPrompt.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IPrompt.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="cdk-constructs-for-amazon-connect.connect.IPrompt.property.promptArn"></a>

```typescript
public readonly promptArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the prompt.

Used to reference the prompt in contact flows and other
Amazon Connect resources.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="cdk-constructs-for-amazon-connect.connect.IPrompt.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The unique identifier of the prompt.

Used to reference the prompt within Amazon Connect APIs.

---

### IQueue <a name="IQueue" id="cdk-constructs-for-amazon-connect.connect.IQueue"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.Queue, cdk-constructs-for-amazon-connect.connect.IQueue

Represents an Amazon Connect queue.

A queue holds contacts waiting to be handled by agents and defines
routing behavior, capacity limits, and operational hours.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IQueue.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IQueue.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IQueue.property.queueArn">queueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IQueue.property.queueId">queueId</a></code> | <code>string</code> | The unique identifier of the queue. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IQueue.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IQueue.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="cdk-constructs-for-amazon-connect.connect.IQueue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the queue.

Used to reference the queue in contact flows, routing profiles,
and other Amazon Connect resources.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="cdk-constructs-for-amazon-connect.connect.IQueue.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The unique identifier of the queue.

Used to reference the queue within Amazon Connect APIs.

---

### IRoutingProfile <a name="IRoutingProfile" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.RoutingProfile, cdk-constructs-for-amazon-connect.connect.IRoutingProfile

Represents an Amazon Connect routing profile.

A routing profile determines which queues agents can receive contacts from
and how many simultaneous contacts they can handle across different channels.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the routing profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | The unique identifier of the routing profile. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the routing profile.

Used to reference the routing profile in user configurations
and other Amazon Connect resources.

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="cdk-constructs-for-amazon-connect.connect.IRoutingProfile.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

The unique identifier of the routing profile.

Used to reference the routing profile within Amazon Connect APIs.

---

### ISecurityProfile <a name="ISecurityProfile" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.SecurityProfile, cdk-constructs-for-amazon-connect.connect.ISecurityProfile

Represents an Amazon Connect security profile.

A security profile defines the permissions and access controls for users
within Amazon Connect, determining what features and resources they can access.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the security profile. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.securityProfileId">securityProfileId</a></code> | <code>string</code> | The unique identifier of the security profile. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the security profile.

Used to reference the security profile in user configurations
and IAM policies.

---

##### `securityProfileId`<sup>Required</sup> <a name="securityProfileId" id="cdk-constructs-for-amazon-connect.connect.ISecurityProfile.property.securityProfileId"></a>

```typescript
public readonly securityProfileId: string;
```

- *Type:* string

The unique identifier of the security profile.

Used to reference the security profile within Amazon Connect APIs.

---

### IUser <a name="IUser" id="cdk-constructs-for-amazon-connect.connect.IUser"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* cdk-constructs-for-amazon-connect.connect.User, cdk-constructs-for-amazon-connect.connect.IUser

Represents an Amazon Connect user.

A user represents an agent or administrator who can log into Amazon Connect
and handle customer contacts or perform administrative tasks.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IUser.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IUser.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IUser.property.userArn">userArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the user. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IUser.property.userId">userId</a></code> | <code>string</code> | The unique identifier of the user. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs-for-amazon-connect.connect.IUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-constructs-for-amazon-connect.connect.IUser.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-constructs-for-amazon-connect.connect.IUser.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="cdk-constructs-for-amazon-connect.connect.IUser.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the user.

Used to reference the user in IAM policies and other AWS services.

---

##### `userId`<sup>Required</sup> <a name="userId" id="cdk-constructs-for-amazon-connect.connect.IUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique identifier of the user.

Used to reference the user within Amazon Connect APIs.

---

## Enums <a name="Enums" id="Enums"></a>

### AIAgentType <a name="AIAgentType" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentType"></a>

Types of AI agents supported by Amazon Q in Connect.

Each type provides different capabilities for agent assistance and customer service.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentType.MANUAL_SEARCH">MANUAL_SEARCH</a></code> | Manual search AI agent for knowledge base queries. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentType.ANSWER_RECOMMENDATION">ANSWER_RECOMMENDATION</a></code> | Answer recommendation AI agent for real-time suggestions. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIAgentType.SELF_SERVICE">SELF_SERVICE</a></code> | Self-service AI agent for customer automation. |

---

##### `MANUAL_SEARCH` <a name="MANUAL_SEARCH" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentType.MANUAL_SEARCH"></a>

Manual search AI agent for knowledge base queries.

Helps agents search through knowledge bases manually by providing
enhanced search capabilities and relevant content suggestions based
on agent queries.

---


##### `ANSWER_RECOMMENDATION` <a name="ANSWER_RECOMMENDATION" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentType.ANSWER_RECOMMENDATION"></a>

Answer recommendation AI agent for real-time suggestions.

Analyzes customer conversations in real-time and automatically
provides relevant knowledge articles, suggested responses, and
contextual information to agents without manual intervention.

---


##### `SELF_SERVICE` <a name="SELF_SERVICE" id="cdk-constructs-for-amazon-connect.qconnect.AIAgentType.SELF_SERVICE"></a>

Self-service AI agent for customer automation.

Enables customers to get answers and resolve issues independently
through automated interactions, reducing agent workload and
providing 24/7 support capabilities.

---


### AIPromptApiFormat <a name="AIPromptApiFormat" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat"></a>

API formats supported for AI prompts.

Different formats are optimized for different AI models and use cases.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.ANTHROPIC_CLAUDE_MESSAGES">ANTHROPIC_CLAUDE_MESSAGES</a></code> | Anthropic Claude messages format. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.ANTHROPIC_CLAUDE_TEXT_COMPLETIONS">ANTHROPIC_CLAUDE_TEXT_COMPLETIONS</a></code> | Anthropic Claude text completions format. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.MESSAGES">MESSAGES</a></code> | Generic messages format. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.TEXT_COMPLETIONS">TEXT_COMPLETIONS</a></code> | Generic text completions format. |

---

##### `ANTHROPIC_CLAUDE_MESSAGES` <a name="ANTHROPIC_CLAUDE_MESSAGES" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.ANTHROPIC_CLAUDE_MESSAGES"></a>

Anthropic Claude messages format.

Structured message format optimized for Claude models,
supporting conversational interactions with role-based messages.

---


##### `ANTHROPIC_CLAUDE_TEXT_COMPLETIONS` <a name="ANTHROPIC_CLAUDE_TEXT_COMPLETIONS" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.ANTHROPIC_CLAUDE_TEXT_COMPLETIONS"></a>

Anthropic Claude text completions format.

Simple text-based format for Claude models, suitable for
straightforward completion tasks and single-turn interactions.

---


##### `MESSAGES` <a name="MESSAGES" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.MESSAGES"></a>

Generic messages format.

Standard message format that works across different AI models,
providing flexibility for multi-model deployments.

---


##### `TEXT_COMPLETIONS` <a name="TEXT_COMPLETIONS" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptApiFormat.TEXT_COMPLETIONS"></a>

Generic text completions format.

Simple text-based format that works across different AI models,
suitable for basic completion tasks.

---


### AIPromptTemplateType <a name="AIPromptTemplateType" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptTemplateType"></a>

Template types supported for AI prompts.

Determines how the prompt template is structured and processed.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptTemplateType.TEXT">TEXT</a></code> | Text-based template. |

---

##### `TEXT` <a name="TEXT" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptTemplateType.TEXT"></a>

Text-based template.

Simple text template that can include variables and
formatting instructions for the AI model.

---


### AIPromptType <a name="AIPromptType" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType"></a>

Types of AI prompts for different use cases.

Each type is optimized for specific AI agent functions and scenarios.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptType.ANSWER_GENERATION">ANSWER_GENERATION</a></code> | Prompt for generating answers from knowledge base content. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptType.INTENT_LABELING_GENERATION">INTENT_LABELING_GENERATION</a></code> | Prompt for identifying and labeling customer intent. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptType.QUERY_REFORMULATION">QUERY_REFORMULATION</a></code> | Prompt for reformulating customer queries. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptType.SELF_SERVICE_PRE_PROCESSING">SELF_SERVICE_PRE_PROCESSING</a></code> | Prompt for preprocessing self-service customer inputs. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AIPromptType.SELF_SERVICE_ANSWER_GENERATION">SELF_SERVICE_ANSWER_GENERATION</a></code> | Prompt for generating self-service answers. |

---

##### `ANSWER_GENERATION` <a name="ANSWER_GENERATION" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType.ANSWER_GENERATION"></a>

Prompt for generating answers from knowledge base content.

Used by AI agents to formulate responses based on retrieved
knowledge articles and customer context.

---


##### `INTENT_LABELING_GENERATION` <a name="INTENT_LABELING_GENERATION" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType.INTENT_LABELING_GENERATION"></a>

Prompt for identifying and labeling customer intent.

Analyzes customer messages to understand their intent and
categorize the type of assistance needed.

---


##### `QUERY_REFORMULATION` <a name="QUERY_REFORMULATION" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType.QUERY_REFORMULATION"></a>

Prompt for reformulating customer queries.

Improves search accuracy by rephrasing customer questions
into more effective knowledge base queries.

---


##### `SELF_SERVICE_PRE_PROCESSING` <a name="SELF_SERVICE_PRE_PROCESSING" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType.SELF_SERVICE_PRE_PROCESSING"></a>

Prompt for preprocessing self-service customer inputs.

Prepares and analyzes customer inputs in self-service scenarios
before generating responses.

---


##### `SELF_SERVICE_ANSWER_GENERATION` <a name="SELF_SERVICE_ANSWER_GENERATION" id="cdk-constructs-for-amazon-connect.qconnect.AIPromptType.SELF_SERVICE_ANSWER_GENERATION"></a>

Prompt for generating self-service answers.

Used by self-service AI agents to formulate responses
for customers in automated interactions.

---


### AssistantAssociationType <a name="AssistantAssociationType" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationType.KNOWLEDGE_BASE">KNOWLEDGE_BASE</a></code> | *No description.* |

---

##### `KNOWLEDGE_BASE` <a name="KNOWLEDGE_BASE" id="cdk-constructs-for-amazon-connect.qconnect.AssistantAssociationType.KNOWLEDGE_BASE"></a>

---


### AssistantType <a name="AssistantType" id="cdk-constructs-for-amazon-connect.qconnect.AssistantType"></a>

Types of Amazon Q in Connect assistants.

Determines the assistant's capabilities and how it interacts with agents.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.AssistantType.AGENT">AGENT</a></code> | Agent assistant that provides real-time recommendations. |

---

##### `AGENT` <a name="AGENT" id="cdk-constructs-for-amazon-connect.qconnect.AssistantType.AGENT"></a>

Agent assistant that provides real-time recommendations.

Analyzes customer interactions and provides relevant knowledge
articles, suggested responses, and contextual information to agents
during customer conversations.

---


### ChannelType <a name="ChannelType" id="cdk-constructs-for-amazon-connect.connect.ChannelType"></a>

Communication channels supported by Amazon Connect.

Each channel represents a different way customers can interact
with your contact center.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ChannelType.VOICE">VOICE</a></code> | Voice calls (inbound and outbound). |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ChannelType.CHAT">CHAT</a></code> | Text-based chat conversations. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ChannelType.TASK">TASK</a></code> | Task-based interactions. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ChannelType.EMAIL">EMAIL</a></code> | Email communications. |

---

##### `VOICE` <a name="VOICE" id="cdk-constructs-for-amazon-connect.connect.ChannelType.VOICE"></a>

Voice calls (inbound and outbound).

Traditional phone conversations between customers and agents.

---


##### `CHAT` <a name="CHAT" id="cdk-constructs-for-amazon-connect.connect.ChannelType.CHAT"></a>

Text-based chat conversations.

Real-time messaging between customers and agents through
web chat, mobile apps, or other messaging platforms.

---


##### `TASK` <a name="TASK" id="cdk-constructs-for-amazon-connect.connect.ChannelType.TASK"></a>

Task-based interactions.

Work items that don't require real-time customer interaction,
such as follow-up activities, case reviews, or administrative tasks.

---


##### `EMAIL` <a name="EMAIL" id="cdk-constructs-for-amazon-connect.connect.ChannelType.EMAIL"></a>

Email communications.

Asynchronous email exchanges between customers and agents.

---


### ContactFlowType <a name="ContactFlowType" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType"></a>

Types of contact flows supported by Amazon Connect.

Each type serves a specific purpose in the customer interaction workflow
and has different invocation patterns and capabilities.

> [https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.CONTACT_FLOW">CONTACT_FLOW</a></code> | Main contact flow that handles incoming customer contacts. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_QUEUE">CUSTOMER_QUEUE</a></code> | Flow that plays while customers wait in a queue. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_HOLD">CUSTOMER_HOLD</a></code> | Flow that plays when customers are placed on hold. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_WHISPER">CUSTOMER_WHISPER</a></code> | Flow that plays to customers before connecting to an agent. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_HOLD">AGENT_HOLD</a></code> | Flow that plays to agents when they are placed on hold. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_WHISPER">AGENT_WHISPER</a></code> | Flow that plays to agents before connecting to a customer. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.OUTBOUND_WHISPER">OUTBOUND_WHISPER</a></code> | Flow that plays to agents before making outbound calls. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_TRANSFER">AGENT_TRANSFER</a></code> | Flow that handles agent-to-agent transfers. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.QUEUE_TRANSFER">QUEUE_TRANSFER</a></code> | Flow that handles transfers to queues. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ContactFlowType.CAMPAIGN">CAMPAIGN</a></code> | Flow used for outbound campaign calls. |

---

##### `CONTACT_FLOW` <a name="CONTACT_FLOW" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.CONTACT_FLOW"></a>

Main contact flow that handles incoming customer contacts.

This is the primary flow that customers interact with when they
contact your center. It can route calls, play prompts, and integrate
with other AWS services.

---


##### `CUSTOMER_QUEUE` <a name="CUSTOMER_QUEUE" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_QUEUE"></a>

Flow that plays while customers wait in a queue.

Typically includes hold music, periodic announcements, and
estimated wait time information.

---


##### `CUSTOMER_HOLD` <a name="CUSTOMER_HOLD" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_HOLD"></a>

Flow that plays when customers are placed on hold.

Used during agent-initiated holds, different from queue hold.

---


##### `CUSTOMER_WHISPER` <a name="CUSTOMER_WHISPER" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.CUSTOMER_WHISPER"></a>

Flow that plays to customers before connecting to an agent.

Often used to provide information or instructions to customers
before the agent conversation begins.

---


##### `AGENT_HOLD` <a name="AGENT_HOLD" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_HOLD"></a>

Flow that plays to agents when they are placed on hold.

Provides information or instructions to agents during hold periods.

---


##### `AGENT_WHISPER` <a name="AGENT_WHISPER" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_WHISPER"></a>

Flow that plays to agents before connecting to a customer.

Provides context, customer information, or instructions to agents
before the customer conversation begins.

---


##### `OUTBOUND_WHISPER` <a name="OUTBOUND_WHISPER" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.OUTBOUND_WHISPER"></a>

Flow that plays to agents before making outbound calls.

Used in outbound calling scenarios to provide context or
instructions to agents.

---


##### `AGENT_TRANSFER` <a name="AGENT_TRANSFER" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.AGENT_TRANSFER"></a>

Flow that handles agent-to-agent transfers.

Manages the logic for transferring customers between agents,
including warm and cold transfers.

---


##### `QUEUE_TRANSFER` <a name="QUEUE_TRANSFER" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.QUEUE_TRANSFER"></a>

Flow that handles transfers to queues.

Manages the logic for moving customers between different queues
within the contact center.

---


##### `CAMPAIGN` <a name="CAMPAIGN" id="cdk-constructs-for-amazon-connect.connect.ContactFlowType.CAMPAIGN"></a>

Flow used for outbound campaign calls.

Specifically designed for outbound marketing or service campaigns
with specialized routing and handling logic.

---


### IdentityManagementType <a name="IdentityManagementType" id="cdk-constructs-for-amazon-connect.connect.IdentityManagementType"></a>

Identity management types supported by Amazon Connect instances.

The identity management type determines how users are authenticated and managed
within your Amazon Connect instance. This setting cannot be changed after
instance creation.

> [https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html](https://docs.aws.amazon.com/connect/latest/adminguide/connect-identity-management.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IdentityManagementType.SAML">SAML</a></code> | Use SAML 2.0-based authentication with an existing identity provider (IdP). |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IdentityManagementType.CONNECT_MANAGED">CONNECT_MANAGED</a></code> | Store and manage users directly within Amazon Connect. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IdentityManagementType.EXISTING_DIRECTORY">EXISTING_DIRECTORY</a></code> | Link to an existing AWS Directory Service directory. |

---

##### `SAML` <a name="SAML" id="cdk-constructs-for-amazon-connect.connect.IdentityManagementType.SAML"></a>

Use SAML 2.0-based authentication with an existing identity provider (IdP).

This option enables single sign-on (SSO) from your organization's identity provider
to Amazon Connect. Users authenticate through your IdP and are federated to Amazon Connect.
Requires configuration of AWS IAM SAML federation.

> [https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html](https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html)

---


##### `CONNECT_MANAGED` <a name="CONNECT_MANAGED" id="cdk-constructs-for-amazon-connect.connect.IdentityManagementType.CONNECT_MANAGED"></a>

Store and manage users directly within Amazon Connect.

Amazon Connect creates and manages user accounts internally. Users cannot be shared
with other applications. This is the simplest option for getting started.

---


##### `EXISTING_DIRECTORY` <a name="EXISTING_DIRECTORY" id="cdk-constructs-for-amazon-connect.connect.IdentityManagementType.EXISTING_DIRECTORY"></a>

Link to an existing AWS Directory Service directory.

Use an AWS Managed Microsoft AD or Simple AD directory to manage users.
Each directory can be used with one Amazon Connect instance at a time.

> [https://docs.aws.amazon.com/directoryservice/](https://docs.aws.amazon.com/directoryservice/)

---


### IntegrationType <a name="IntegrationType" id="cdk-constructs-for-amazon-connect.connect.IntegrationType"></a>

Types of integrations supported by Amazon Connect.

Each type represents a different service or capability that can be
integrated with your Amazon Connect instance.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.LEX_BOT">LEX_BOT</a></code> | Amazon Lex bot integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.LAMBDA_FUNCTION">LAMBDA_FUNCTION</a></code> | AWS Lambda function integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.APPLICATION">APPLICATION</a></code> | AppIntegrations application integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.WISDOM_ASSISTANT">WISDOM_ASSISTANT</a></code> | Amazon Q in Connect assistant integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.WISDOM_KNOWLEDGE_BASE">WISDOM_KNOWLEDGE_BASE</a></code> | Amazon Q in Connect knowledge base integration. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.IntegrationType.CASES_DOMAIN">CASES_DOMAIN</a></code> | Amazon Connect Cases domain integration. |

---

##### `LEX_BOT` <a name="LEX_BOT" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.LEX_BOT"></a>

Amazon Lex bot integration.

Enables natural language processing and conversational AI
capabilities within contact flows.

---


##### `LAMBDA_FUNCTION` <a name="LAMBDA_FUNCTION" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.LAMBDA_FUNCTION"></a>

AWS Lambda function integration.

Allows contact flows to invoke Lambda functions for
custom business logic and external system integration.

---


##### `APPLICATION` <a name="APPLICATION" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.APPLICATION"></a>

AppIntegrations application integration.

Connects external applications and systems with Amazon Connect
for enhanced agent capabilities and data access.

---


##### `WISDOM_ASSISTANT` <a name="WISDOM_ASSISTANT" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.WISDOM_ASSISTANT"></a>

Amazon Q in Connect assistant integration.

Provides AI-powered agent assistance with real-time
recommendations and knowledge articles.

---


##### `WISDOM_KNOWLEDGE_BASE` <a name="WISDOM_KNOWLEDGE_BASE" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.WISDOM_KNOWLEDGE_BASE"></a>

Amazon Q in Connect knowledge base integration.

Enables access to knowledge repositories for agent
assistance and customer self-service.

---


##### `CASES_DOMAIN` <a name="CASES_DOMAIN" id="cdk-constructs-for-amazon-connect.connect.IntegrationType.CASES_DOMAIN"></a>

Amazon Connect Cases domain integration.

Enables case management capabilities for tracking
and resolving customer issues.

---


### KnowledgeBaseType <a name="KnowledgeBaseType" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType"></a>

Types of knowledge bases supported by Amazon Q in Connect.

Each type serves different content management and integration needs.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.EXTERNAL">EXTERNAL</a></code> | External knowledge base with data from external sources. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.CUSTOM">CUSTOM</a></code> | Custom knowledge base with manually managed content. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.MESSAGE_TEMPLATES">MESSAGE_TEMPLATES</a></code> | Knowledge base containing message templates. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.MANAGED">MANAGED</a></code> | Managed knowledge base with AWS-curated content. |
| <code><a href="#cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.QUICK_RESPONSES">QUICK_RESPONSES</a></code> | Knowledge base for quick response templates. |

---

##### `EXTERNAL` <a name="EXTERNAL" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.EXTERNAL"></a>

External knowledge base with data from external sources.

Integrates with external systems through AppIntegrations to
automatically sync content from sources like SharePoint,
Salesforce, or other document repositories.

---


##### `CUSTOM` <a name="CUSTOM" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.CUSTOM"></a>

Custom knowledge base with manually managed content.

Allows direct upload and management of knowledge articles
through the Amazon Q in Connect console or APIs.

---


##### `MESSAGE_TEMPLATES` <a name="MESSAGE_TEMPLATES" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.MESSAGE_TEMPLATES"></a>

Knowledge base containing message templates.

Stores pre-written message templates that agents can use
for consistent communication across different channels.

---


##### `MANAGED` <a name="MANAGED" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.MANAGED"></a>

Managed knowledge base with AWS-curated content.

Contains AWS-managed knowledge articles and best practices
that are automatically updated and maintained.

---


##### `QUICK_RESPONSES` <a name="QUICK_RESPONSES" id="cdk-constructs-for-amazon-connect.qconnect.KnowledgeBaseType.QUICK_RESPONSES"></a>

Knowledge base for quick response templates.

Stores short, frequently-used responses that agents can
quickly insert into conversations.

---


### PhoneType <a name="PhoneType" id="cdk-constructs-for-amazon-connect.connect.PhoneType"></a>

Phone types supported for Amazon Connect users.

Determines how agents will handle voice interactions within the contact center.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PhoneType.SOFT_PHONE">SOFT_PHONE</a></code> | Software-based phone using the agent's computer. |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.PhoneType.DESK_PHONE">DESK_PHONE</a></code> | Physical desk phone connected to the agent's workstation. |

---

##### `SOFT_PHONE` <a name="SOFT_PHONE" id="cdk-constructs-for-amazon-connect.connect.PhoneType.SOFT_PHONE"></a>

Software-based phone using the agent's computer.

Agents use the Contact Control Panel (CCP) in their web browser
to handle voice calls. No physical phone hardware required.

---


##### `DESK_PHONE` <a name="DESK_PHONE" id="cdk-constructs-for-amazon-connect.connect.PhoneType.DESK_PHONE"></a>

Physical desk phone connected to the agent's workstation.

Agents use a traditional desk phone for voice interactions while
using the CCP for call control and customer information.

---


### ResourceType <a name="ResourceType" id="cdk-constructs-for-amazon-connect.connect.ResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.CHAT_TRANSCRIPTS">CHAT_TRANSCRIPTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.CALL_RECORDINGS">CALL_RECORDINGS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.SCHEDULED_REPORTS">SCHEDULED_REPORTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.MEDIA_STREAMS">MEDIA_STREAMS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.CONTACT_TRACE_RECORDS">CONTACT_TRACE_RECORDS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.AGENT_EVENTS">AGENT_EVENTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_SEGMENTS">REAL_TIME_CONTACT_ANALYSIS_SEGMENTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.ATTACHMENTS">ATTACHMENTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.CONTACT_EVALUATIONS">CONTACT_EVALUATIONS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.SCREEN_RECORDINGS">SCREEN_RECORDINGS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS">REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS">REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.ResourceType.EMAIL_MESSAGES">EMAIL_MESSAGES</a></code> | *No description.* |

---

##### `CHAT_TRANSCRIPTS` <a name="CHAT_TRANSCRIPTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.CHAT_TRANSCRIPTS"></a>

---


##### `CALL_RECORDINGS` <a name="CALL_RECORDINGS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.CALL_RECORDINGS"></a>

---


##### `SCHEDULED_REPORTS` <a name="SCHEDULED_REPORTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.SCHEDULED_REPORTS"></a>

---


##### `MEDIA_STREAMS` <a name="MEDIA_STREAMS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.MEDIA_STREAMS"></a>

---


##### `CONTACT_TRACE_RECORDS` <a name="CONTACT_TRACE_RECORDS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.CONTACT_TRACE_RECORDS"></a>

---


##### `AGENT_EVENTS` <a name="AGENT_EVENTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.AGENT_EVENTS"></a>

---


##### ~~`REAL_TIME_CONTACT_ANALYSIS_SEGMENTS`~~ <a name="REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_SEGMENTS"></a>

- *Deprecated:* Use REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS instead.

---


##### `ATTACHMENTS` <a name="ATTACHMENTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.ATTACHMENTS"></a>

---


##### `CONTACT_EVALUATIONS` <a name="CONTACT_EVALUATIONS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.CONTACT_EVALUATIONS"></a>

---


##### `SCREEN_RECORDINGS` <a name="SCREEN_RECORDINGS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.SCREEN_RECORDINGS"></a>

---


##### `REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS` <a name="REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS"></a>

---


##### `REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS` <a name="REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS" id="cdk-constructs-for-amazon-connect.connect.ResourceType.REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS"></a>

---


##### `EMAIL_MESSAGES` <a name="EMAIL_MESSAGES" id="cdk-constructs-for-amazon-connect.connect.ResourceType.EMAIL_MESSAGES"></a>

---


### StorageType <a name="StorageType" id="cdk-constructs-for-amazon-connect.connect.StorageType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.StorageType.S3">S3</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_STREAM">KINESIS_STREAM</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_FIREHOSE">KINESIS_FIREHOSE</a></code> | *No description.* |
| <code><a href="#cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_VIDEO_STREAM">KINESIS_VIDEO_STREAM</a></code> | *No description.* |

---

##### `S3` <a name="S3" id="cdk-constructs-for-amazon-connect.connect.StorageType.S3"></a>

---


##### `KINESIS_STREAM` <a name="KINESIS_STREAM" id="cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_STREAM"></a>

---


##### `KINESIS_FIREHOSE` <a name="KINESIS_FIREHOSE" id="cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_FIREHOSE"></a>

---


##### `KINESIS_VIDEO_STREAM` <a name="KINESIS_VIDEO_STREAM" id="cdk-constructs-for-amazon-connect.connect.StorageType.KINESIS_VIDEO_STREAM"></a>

---

