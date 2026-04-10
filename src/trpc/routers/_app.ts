import { inngest } from "@/inngest/client";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { TRPCError } from "@trpc/server";

export const appRouter = createTRPCRouter({
  testAI: baseProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });

    return { success: true, message: "AI executed successfully" };
  }),
  getWorkflows: protectedProcedure.query(() => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "test@gmail.com",
      },
    });

    return { success: true, message: "Workflow created successfully" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
