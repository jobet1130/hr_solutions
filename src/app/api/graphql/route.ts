import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@/lib/graphql/schema";
import { NextRequest } from "next/server";

// Create Apollo Server
const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== "production",
});

// Create Next.js API route handler
const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => ({
    // Add any context you want to pass to your resolvers
    req,
  }),
});

export const GET = handler;
export const POST = handler;
