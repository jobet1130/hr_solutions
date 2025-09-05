import {
  ApolloClient,
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

// Initialize Apollo Client
const httpLink = new HttpLink({
  uri:
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
    "http://localhost:3000/api/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Helper function to make queries
interface QueryResult<T = unknown> {
  data: T | null;
  error: Error | null;
}

export async function query<
  T = unknown,
  V extends OperationVariables = OperationVariables,
>({
  query,
  variables = {} as V,
}: {
  query: DocumentNode | TypedDocumentNode<T, V>;
  variables?: V;
}): Promise<QueryResult<T>> {
  try {
    const result = await client.query<T, V>({
      query,
      variables,
      fetchPolicy: "network-only",
    });

    if (result.error) {
      console.error("GraphQL Error:", result.error);
      throw result.error;
    }

    return { data: result.data ?? null, error: null };
  } catch (error) {
    console.error("Error executing query:", error);
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}

// Helper function to make mutations
export async function mutate<
  T = unknown,
  V extends OperationVariables = OperationVariables,
>({
  mutation,
  variables = {} as V,
}: {
  mutation: DocumentNode | TypedDocumentNode<T, V>;
  variables?: V;
}): Promise<QueryResult<T>> {
  try {
    const result = await client.mutate<T, V>({
      mutation,
      variables,
    });

    // Check for GraphQL errors in the response
    if (result.error) {
      console.error("GraphQL Error:", result.error);
      throw result.error;
    }

    return { data: result.data ?? null, error: null };
  } catch (error) {
    console.error("Error executing mutation:", error);
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}
