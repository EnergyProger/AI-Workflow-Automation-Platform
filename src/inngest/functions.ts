import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import * as Sentry from "@sentry/nextjs";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const executeAI = inngest.createFunction(
  { id: "execute-ai", triggers: { event: "execute/ai" } },
  async ({ event, step }) => {
    Sentry.logger.info("User triggered test log", {log_source: "sentry_test"})
    console.warn("This is a warning");
    console.error("This is an error");
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "What is 5 + 5?",
        model: google("gemini-2.5-flash"),
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );

    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "What is 5 + 5?",
        model: openai("gpt-5"),
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "What is 5 + 5?",
        model: anthropic("claude-sonnet-4-5"),
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );

    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps,
    };
  },
);
