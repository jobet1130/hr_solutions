import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { IPost } from "@/lib/graphql/schema";

const GET_POST = gql`
  query GetPost($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      excerpt
      content
      featuredImage
      publishedAt
      updatedAt
      readTime
      author {
        id
        name
        avatar
        bio
      }
      categories {
        id
        name
        slug
      }
      tags {
        id
        name
        slug
      }
    }
  }
`;

export function usePost(slug: string) {
  const { data, loading, error } = useQuery<{ post: IPost }, { slug: string }>(
    GET_POST,
    {
      variables: { slug },
      fetchPolicy: "cache-and-network",
    },
  );

  const post: IPost | null = data?.post || null;

  return {
    post,
    loading,
    error,
  };
}
