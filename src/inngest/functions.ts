import prisma from "@/lib/prisma";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: { event: "test/hello.world" } },
  async ({ event, step }) => {

    await step.sleep("pause", "1s");
    await step.sleep("pause", "1s");
    await step.sleep("pause", "1s");

    await step.run("create-workflow", ()=>{
      return prisma.workflow.create({
        data: {
          name: "workflow-from-inngest",
        },
      });
    });
  }
);
