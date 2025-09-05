import { Post, Author, Category, Tag } from "./schema";

export type { Post, Author, Category, Tag };

export type PostsQueryVariables = {
  limit?: number;
  offset?: number;
  category?: string;
  tag?: string;
  search?: string;
};

export type PostQueryVariables = {
  slug: string;
};

export type RelatedPostsQueryVariables = {
  postId: string;
  limit?: number;
};

export type PostsQueryResponse = {
  posts: Post[];
};

export type PostQueryResponse = {
  post: Post | null;
};

export type CategoriesQueryResponse = {
  categories: Category[];
};

export type TagsQueryResponse = {
  tags: Tag[];
};

export type RelatedPostsQueryResponse = {
  relatedPosts: Post[];
};
