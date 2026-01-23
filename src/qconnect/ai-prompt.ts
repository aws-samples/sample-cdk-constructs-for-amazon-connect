import * as wisdom from 'aws-cdk-lib/aws-wisdom';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IAssistant } from './assistant';

/**
 * API formats supported for AI prompts.
 *
 * Different formats are optimized for different AI models and use cases.
 */
export enum AIPromptApiFormat {
  /**
   * Anthropic Claude messages format.
   *
   * Structured message format optimized for Claude models,
   * supporting conversational interactions with role-based messages.
   */
  ANTHROPIC_CLAUDE_MESSAGES = 'ANTHROPIC_CLAUDE_MESSAGES',

  /**
   * Anthropic Claude text completions format.
   *
   * Simple text-based format for Claude models, suitable for
   * straightforward completion tasks and single-turn interactions.
   */
  ANTHROPIC_CLAUDE_TEXT_COMPLETIONS = 'ANTHROPIC_CLAUDE_TEXT_COMPLETIONS',

  /**
   * Generic messages format.
   *
   * Standard message format that works across different AI models,
   * providing flexibility for multi-model deployments.
   */
  MESSAGES = 'MESSAGES',

  /**
   * Generic text completions format.
   *
   * Simple text-based format that works across different AI models,
   * suitable for basic completion tasks.
   */
  TEXT_COMPLETIONS = 'TEXT_COMPLETIONS',
}

/**
 * Supported AI model identifiers for prompts.
 *
 * Each model ID represents a specific AI model available in different regions.
 * Choose the model that best fits your use case and regional requirements.
 */
export type AIPromptModelId =
  | 'anthropic.claude-3-haiku--v1:0'
  | 'apac.amazon.nova-lite-v1:0'
  | 'apac.amazon.nova-micro-v1:0'
  | 'apac.amazon.nova-pro-v1:0'
  | 'apac.anthropic.claude-3-5-sonnet-20241022-v2:0'
  | 'apac.anthropic.claude-3-haiku-20240307-v1:0'
  | 'eu.amazon.nova-lite-v1:0'
  | 'eu.amazon.nova-micro-v1:0'
  | 'eu.amazon.nova-pro-v1:0'
  | 'eu.anthropic.claude-3-7-sonnet-20250219-v1:0'
  | 'eu.anthropic.claude-3-haiku-20240307-v1:0'
  | 'us.amazon.nova-lite-v1:0'
  | 'us.amazon.nova-micro-v1:0'
  | 'us.amazon.nova-pro-v1:0'
  | 'us.anthropic.claude-3-5-haiku-20241022-v1:0'
  | 'us.anthropic.claude-3-7-sonnet-20250219-v1:0'
  | 'us.anthropic.claude-3-haiku-20240307-v1:0';

/**
 * Template types supported for AI prompts.
 *
 * Determines how the prompt template is structured and processed.
 */
export enum AIPromptTemplateType {
  /**
   * Text-based template.
   *
   * Simple text template that can include variables and
   * formatting instructions for the AI model.
   */
  TEXT = 'TEXT',
}

/**
 * Types of AI prompts for different use cases.
 *
 * Each type is optimized for specific AI agent functions and scenarios.
 */
export enum AIPromptType {
  /**
   * Prompt for generating answers from knowledge base content.
   *
   * Used by AI agents to formulate responses based on retrieved
   * knowledge articles and customer context.
   */
  ANSWER_GENERATION = 'ANSWER_GENERATION',

  /**
   * Prompt for identifying and labeling customer intent.
   *
   * Analyzes customer messages to understand their intent and
   * categorize the type of assistance needed.
   */
  INTENT_LABELING_GENERATION = 'INTENT_LABELING_GENERATION',

  /**
   * Prompt for reformulating customer queries.
   *
   * Improves search accuracy by rephrasing customer questions
   * into more effective knowledge base queries.
   */
  QUERY_REFORMULATION = 'QUERY_REFORMULATION',

  /**
   * Prompt for preprocessing self-service customer inputs.
   *
   * Prepares and analyzes customer inputs in self-service scenarios
   * before generating responses.
   */
  SELF_SERVICE_PRE_PROCESSING = 'SELF_SERVICE_PRE_PROCESSING',

  /**
   * Prompt for generating self-service answers.
   *
   * Used by self-service AI agents to formulate responses
   * for customers in automated interactions.
   */
  SELF_SERVICE_ANSWER_GENERATION = 'SELF_SERVICE_ANSWER_GENERATION',
}

/**
 * Properties for creating an AI prompt.
 */
export interface AIPromptProps {
  /**
   * The name of the AI prompt.
   *
   * If not provided, a name will be automatically generated.
   */
  readonly name?: string;

  /**
   * An optional description for the AI prompt.
   *
   * Helps document the purpose and usage of the prompt.
   */
  readonly description?: string;

  /**
   * The assistant that this AI prompt belongs to.
   *
   * If provided, the prompt will be associated with the assistant.
   * Otherwise, it can be used across multiple assistants.
   */
  readonly assistant?: IAssistant;

  /**
   * The API format for the AI prompt.
   *
   * Must be compatible with the specified model ID.
   */
  readonly apiFormat: AIPromptApiFormat;

  /**
   * The AI model identifier to use with this prompt.
   *
   * Choose a model that supports the specified API format
   * and is available in your deployment region.
   */
  readonly modelId: AIPromptModelId;

  /**
   * The template type for the prompt.
   *
   * Determines how the prompt template is structured.
   */
  readonly templateType: AIPromptTemplateType;

  /**
   * The type of AI prompt.
   *
   * Determines the prompt's purpose and how it will be used
   * by AI agents.
   */
  readonly type: AIPromptType;

  /**
   * The template text for the AI prompt.
   *
   * This is the actual prompt content that will be sent to the AI model.
   * Can include variables and formatting instructions specific to the
   * chosen model and API format.
   */
  readonly templateText: string;
}

/**
 * Represents an Amazon Q in Connect AI prompt.
 *
 * An AI prompt defines the instructions and context that guide AI models
 * in generating appropriate responses for different scenarios.
 */
export interface IAIPrompt extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the AI prompt.
   *
   * Used to reference the AI prompt in AI agent configurations
   * and IAM policies.
   */
  readonly aiPromptArn: string;

  /**
   * The unique identifier of the AI prompt.
   *
   * Used to reference the AI prompt within Amazon Q in Connect APIs.
   */
  readonly aiPromptId: string;
}

/**
 * An Amazon Q in Connect AI prompt construct.
 *
 * AI prompts are templates that define how AI models should process and
 * respond to different types of customer interactions. They provide the
 * instructions, context, and formatting guidelines that ensure AI agents
 * generate appropriate, consistent, and helpful responses.
 *
 * ## Key Features
 *
 * - **Model Flexibility**: Support for multiple AI models (Claude, Nova, etc.)
 * - **Format Options**: Different API formats for various model types
 * - **Specialized Types**: Purpose-built prompts for different AI agent functions
 * - **Template Variables**: Dynamic content insertion for personalized responses
 * - **Multi-language Support**: Compatible with different model capabilities
 *
 * ## Usage Example
 *
 * ```typescript
 * const answerPrompt = new AIPrompt(this, 'AnswerGenerationPrompt', {
 *   name: 'Customer Service Answer Generation',
 *   description: 'Generates helpful answers from knowledge base content',
 *   assistant: assistant,
 *   apiFormat: AIPromptApiFormat.ANTHROPIC_CLAUDE_MESSAGES,
 *   modelId: 'us.anthropic.claude-3-haiku-20240307-v1:0',
 *   templateType: AIPromptTemplateType.TEXT,
 *   type: AIPromptType.ANSWER_GENERATION,
 *   templateText: 'Based on the following knowledge: {knowledge}\n\nAnswer the customer question: {question}',
 * });
 * ```
 *
 * ## Prompt Engineering Best Practices
 *
 * - **Clear Instructions**: Provide specific, unambiguous guidance to the AI
 * - **Context Awareness**: Include relevant context about the customer and situation
 * - **Consistent Tone**: Maintain brand voice and professional communication style
 * - **Error Handling**: Include instructions for handling unclear or incomplete inputs
 * - **Variable Usage**: Use template variables for dynamic content insertion
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html
 */
export class AIPrompt extends Resource implements IAIPrompt {
  /**
   * The Amazon Resource Name (ARN) of the AI prompt.
   */
  public readonly aiPromptArn: string;

  /**
   * The unique identifier of the AI prompt.
   */
  public readonly aiPromptId: string;

  /**
   * Creates a new Amazon Q in Connect AI prompt.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the AI prompt
   */
  constructor(scope: Construct, id: string, props: AIPromptProps) {
    super(scope, id);

    const aiPrompt = new wisdom.CfnAIPrompt(this, 'Resource', {
      name: props.name,
      description: props.description,
      assistantId: props.assistant?.assistantId,
      apiFormat: props.apiFormat,
      modelId: props.modelId,
      templateType: props.templateType,
      type: props.type,
      templateConfiguration: {
        textFullAiPromptEditTemplateConfiguration: {
          text: props.templateText,
        },
      },
    });

    this.aiPromptArn = aiPrompt.attrAiPromptArn;
    this.aiPromptId = aiPrompt.attrAiPromptId;

    if (props.assistant) {
      this.node.addDependency(props.assistant);
    }
  }
}
