import * as wisdom from 'aws-cdk-lib/aws-wisdom';
import { Resource, IResource } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IAIPromptVersion } from './ai-prompt-version';
import { IAssistant } from './assistant';

/**
 * Types of AI agents supported by Amazon Q in Connect.
 *
 * Each type provides different capabilities for agent assistance and customer service.
 */
export enum AIAgentType {
  /**
   * Manual search AI agent for knowledge base queries.
   *
   * Helps agents search through knowledge bases manually by providing
   * enhanced search capabilities and relevant content suggestions based
   * on agent queries.
   */
  MANUAL_SEARCH = 'MANUAL_SEARCH',

  /**
   * Answer recommendation AI agent for real-time suggestions.
   *
   * Analyzes customer conversations in real-time and automatically
   * provides relevant knowledge articles, suggested responses, and
   * contextual information to agents without manual intervention.
   */
  ANSWER_RECOMMENDATION = 'ANSWER_RECOMMENDATION',

  /**
   * Self-service AI agent for customer automation.
   *
   * Enables customers to get answers and resolve issues independently
   * through automated interactions, reducing agent workload and
   * providing 24/7 support capabilities.
   */
  SELF_SERVICE = 'SELF_SERVICE',
}

/**
 * Configuration for answer recommendation AI agents.
 *
 * Defines the AI prompts and settings used for real-time agent assistance.
 */
export interface AnswerRecommendationAIAgentConfiguration {
  /**
   * AI prompt for generating answers from knowledge base content.
   *
   * This prompt guides how the AI formulates responses based on
   * retrieved knowledge articles and customer context.
   */
  readonly answerGenerationPrompt: IAIPromptVersion;

  /**
   * AI prompt for reformulating customer queries.
   *
   * Helps improve search accuracy by rephrasing customer questions
   * into more effective knowledge base queries.
   */
  readonly queryReformulationPrompt: IAIPromptVersion;

  /**
   * AI prompt for identifying customer intent.
   *
   * Analyzes customer messages to understand their intent and
   * categorize the type of assistance needed.
   */
  readonly intentLabelingGenerationPrompt: IAIPromptVersion;

  /**
   * The locale for language-specific processing.
   *
   * Determines the language and regional settings for AI processing,
   * affecting prompt interpretation and response generation.
   *
   * @example 'en_US', 'es_ES', 'fr_FR'
   */
  readonly locale: string;
}

/**
 * Configuration for manual search AI agents.
 *
 * Defines the AI prompts and settings used for agent-initiated searches.
 */
export interface ManualSearchAIAgentConfiguration {
  /**
   * AI prompt for generating answers from search results.
   *
   * This prompt guides how the AI presents search results and
   * formulates helpful responses for agents.
   */
  readonly answerGenerationPrompt: IAIPromptVersion;

  /**
   * The locale for language-specific processing.
   *
   * Determines the language and regional settings for search
   * processing and result presentation.
   */
  readonly locale: string;
}

/**
 * Configuration for self-service AI agents.
 *
 * Defines the AI prompts and settings used for customer self-service interactions.
 */
export interface SelfServiceAIAgentConfiguration {
  /**
   * AI prompt for generating self-service answers.
   *
   * This prompt guides how the AI formulates responses for
   * customers in self-service scenarios.
   */
  readonly selfServiceAnswerGenerationPrompt: IAIPromptVersion;

  /**
   * AI prompt for preprocessing customer inputs.
   *
   * Prepares and analyzes customer inputs before generating
   * responses, improving accuracy and relevance.
   */
  readonly selfServicePreProcessingPrompt: IAIPromptVersion;
}

/**
 * Properties for creating an AI agent.
 */
export interface AIAgentProps {
  /**
   * The name of the AI agent.
   *
   * Must be unique within the assistant.
   */
  readonly name: string;

  /**
   * An optional description for the AI agent.
   *
   * Helps document the purpose and capabilities of the AI agent.
   */
  readonly description?: string;

  /**
   * The assistant that this AI agent belongs to.
   *
   * The AI agent will be associated with this assistant and
   * inherit its configuration and knowledge base associations.
   */
  readonly assistant: IAssistant;

  /**
   * The type of AI agent.
   *
   * Determines the agent's behavior and the configuration
   * properties that are required.
   */
  readonly type: AIAgentType;

  /**
   * Configuration for answer recommendation AI agents.
   *
   * Required when type is ANSWER_RECOMMENDATION.
   */
  readonly answerRecommendationConfiguration?: AnswerRecommendationAIAgentConfiguration;

  /**
   * Configuration for manual search AI agents.
   *
   * Required when type is MANUAL_SEARCH.
   */
  readonly manualSearchConfiguration?: ManualSearchAIAgentConfiguration;

  /**
   * Configuration for self-service AI agents.
   *
   * Required when type is SELF_SERVICE.
   */
  readonly selfServiceConfiguration?: SelfServiceAIAgentConfiguration;
}

/**
 * Represents an Amazon Q in Connect AI agent.
 *
 * An AI agent provides specialized AI capabilities within an assistant,
 * such as answer recommendations, manual search assistance, or self-service
 * customer interactions.
 */
export interface IAIAgent extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the AI agent.
   *
   * Used to reference the AI agent in assistant configurations
   * and IAM policies.
   */
  readonly aiAgentArn: string;

  /**
   * The unique identifier of the AI agent.
   *
   * Used to reference the AI agent within Amazon Q in Connect APIs.
   */
  readonly aiAgentId: string;
}

/**
 * An Amazon Q in Connect AI agent construct.
 *
 * AI agents are specialized components within Amazon Q in Connect assistants
 * that provide different types of AI-powered assistance. They use configured
 * AI prompts and machine learning models to analyze customer interactions,
 * search knowledge bases, and generate appropriate responses or recommendations.
 *
 * ## Key Features
 *
 * - **Specialized AI Capabilities**: Different agent types for various use cases
 * - **Prompt-Driven Behavior**: Customizable AI prompts for specific scenarios
 * - **Real-time Processing**: Analyze conversations and provide instant assistance
 * - **Multi-language Support**: Configurable locales for international support
 * - **Knowledge Integration**: Leverage knowledge bases for accurate responses
 *
 * ## Usage Example
 *
 * ```typescript
 * const aiAgent = new AIAgent(this, 'AnswerRecommendationAgent', {
 *   name: 'Customer Service AI Agent',
 *   description: 'Provides real-time answer recommendations',
 *   assistant: assistant,
 *   type: AIAgentType.ANSWER_RECOMMENDATION,
 *   answerRecommendationConfiguration: {
 *     answerGenerationPrompt: answerPromptVersion,
 *     queryReformulationPrompt: queryPromptVersion,
 *     intentLabelingGenerationPrompt: intentPromptVersion,
 *     locale: 'en_US',
 *   },
 * });
 * ```
 *
 * ## Agent Types
 *
 * - **Answer Recommendation**: Automatic real-time suggestions during conversations
 * - **Manual Search**: Enhanced search capabilities for agent-initiated queries
 * - **Self-Service**: Customer-facing automated assistance and resolution
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html
 */
export class AIAgent extends Resource implements IAIAgent {
  /**
   * The Amazon Resource Name (ARN) of the AI agent.
   */
  public readonly aiAgentArn: string;

  /**
   * The unique identifier of the AI agent.
   */
  public readonly aiAgentId: string;

  /**
   * Creates a new Amazon Q in Connect AI agent.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   * @param props - Configuration properties for the AI agent
   */
  constructor(scope: Construct, id: string, props: AIAgentProps) {
    super(scope, id);

    let configuration: wisdom.CfnAIAgent.AIAgentConfigurationProperty;

    switch (props.type) {
      case AIAgentType.ANSWER_RECOMMENDATION:
        if (!props.answerRecommendationConfiguration) {
          throw new Error('answerRecommendationConfiguration is required for ANSWER_RECOMMENDATION type');
        }
        configuration = {
          answerRecommendationAiAgentConfiguration: {
            answerGenerationAiPromptId:
              props.answerRecommendationConfiguration.answerGenerationPrompt.aiPromptVersionId,
            queryReformulationAiPromptId:
              props.answerRecommendationConfiguration.queryReformulationPrompt.aiPromptVersionId,
            intentLabelingGenerationAiPromptId:
              props.answerRecommendationConfiguration.intentLabelingGenerationPrompt.aiPromptVersionId,
            locale: props.answerRecommendationConfiguration.locale,
          },
        };
        break;
      case AIAgentType.MANUAL_SEARCH:
        if (!props.manualSearchConfiguration) {
          throw new Error('manualSearchConfiguration is required for MANUAL_SEARCH type');
        }
        configuration = {
          manualSearchAiAgentConfiguration: {
            answerGenerationAiPromptId: props.manualSearchConfiguration.answerGenerationPrompt.aiPromptVersionId,
            locale: props.manualSearchConfiguration.locale,
          },
        };
        break;
      case AIAgentType.SELF_SERVICE:
        if (!props.selfServiceConfiguration) {
          throw new Error('selfServiceConfiguration is required for SELF_SERVICE type');
        }
        configuration = {
          selfServiceAiAgentConfiguration: {
            selfServiceAnswerGenerationAiPromptId:
              props.selfServiceConfiguration.selfServiceAnswerGenerationPrompt.aiPromptVersionId,
            selfServicePreProcessingAiPromptId:
              props.selfServiceConfiguration.selfServicePreProcessingPrompt.aiPromptVersionId,
          },
        };
        break;
      default:
        throw new Error(`Unsupported AI agent type: ${props.type}`);
    }

    const aiAgent = new wisdom.CfnAIAgent(this, 'Resource', {
      name: props.name,
      description: props.description,
      assistantId: props.assistant.assistantId,
      type: props.type,
      configuration,
    });

    this.aiAgentArn = aiAgent.attrAiAgentArn;
    this.aiAgentId = aiAgent.attrAiAgentId;

    this.node.addDependency(props.assistant);
  }
}
