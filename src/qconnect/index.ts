/**
 * Amazon Q in Connect Constructs
 *
 * This module provides L2 CDK constructs for Amazon Q in Connect (formerly Amazon Connect Wisdom),
 * enabling AI-powered agent assistance through real-time recommendations, knowledge management,
 * and intelligent customer service capabilities.
 *
 * ## Core Components
 *
 * - **Assistant**: AI-powered assistant that provides agent recommendations
 * - **KnowledgeBase**: Repository of information for AI recommendations
 * - **AIAgent**: Specialized AI agents for different use cases (search, recommendations, self-service)
 * - **AIPrompt**: Templates that guide AI model behavior and responses
 *
 * ## Versioning and Configuration
 *
 * - **AIAgentVersion**: Versioned deployments of AI agents
 * - **AIPromptVersion**: Versioned deployments of AI prompts
 * - **AssistantAIAgentConfiguration**: Assistant-level AI agent settings
 * - **AssistantAssociation**: Knowledge base associations with assistants
 *
 * ## Usage Pattern
 *
 * 1. Create an Assistant for AI-powered recommendations
 * 2. Set up KnowledgeBase with relevant content
 * 3. Configure AIPrompts for different scenarios
 * 4. Create AIAgents with specific capabilities
 * 5. Associate with Amazon Connect instance for agent assistance
 *
 * ## AI Agent Types
 *
 * - **Answer Recommendation**: Real-time suggestions during conversations
 * - **Manual Search**: Enhanced search capabilities for agents
 * - **Self-Service**: Customer-facing automated assistance
 *
 * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html
 */

export * from './assistant';
export * from './assistant-association';
export * from './ai-agent';
export * from './ai-prompt';
export * from './ai-agent-version';
export * from './ai-prompt-version';
export * from './knowledge-base';
export * from './assistant-ai-agent-configuration';
