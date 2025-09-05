import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "graphql-tag";

// Define the types
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}

// Sample data (in a real app, this would come from a database)
const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/images/avatars/sarah.jpg",
    bio: "HR Expert with 10+ years of experience in talent management and organizational development.",
  },
];

const categories: Category[] = [
  { id: "1", name: "HR Strategy", slug: "hr-strategy" },
  { id: "2", name: "Recruitment", slug: "recruitment" },
  { id: "3", name: "Employee Engagement", slug: "employee-engagement" },
  { id: "4", name: "Compliance", slug: "compliance" },
];

const tags: Tag[] = [
  { id: "1", name: "Leadership", slug: "leadership" },
  { id: "2", name: "Productivity", slug: "productivity" },
  { id: "3", name: "Workplace Culture", slug: "workplace-culture" },
  { id: "4", name: "Remote Work", slug: "remote-work" },
];

let posts: Post[] = [
  {
    id: "1",
    title: "10 HR Trends to Watch in 2024",
    slug: "10-hr-trends-2024",
    excerpt:
      "Discover the top HR trends that will shape the workplace in 2024 and beyond.",
    content: "Full article content goes here...",
    featuredImage: "/images/blog/trends-2024.jpg",
    author: authors[0],
    categories: [categories[0], categories[1]],
    tags: [tags[0], tags[2]],
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    readTime: 5,
    status: "PUBLISHED",
  },
  // Add more sample posts as needed
];

// Define the schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    avatar: String!
    bio: String!
  }

  type Category {
    id: ID!
    name: String!
    slug: String!
  }

  type Tag {
    id: ID!
    name: String!
    slug: String!
  }

  type Post {
    id: ID!
    title: String!
    slug: String!
    excerpt: String!
    content: String!
    featuredImage: String!
    author: Author!
    categories: [Category!]!
    tags: [Tag!]!
    publishedAt: String!
    updatedAt: String!
    readTime: Int!
    status: PostStatus!
  }

  enum PostStatus {
    DRAFT
    PUBLISHED
    ARCHIVED
  }

  type Query {
    # Get all published posts
    posts(
      limit: Int
      offset: Int
      category: ID
      tag: ID
      search: String
    ): [Post!]!

    # Get a single post by slug
    post(slug: String!): Post

    # Get all categories
    categories: [Category!]!

    # Get all tags
    tags: [Tag!]!

    # Get related posts
    relatedPosts(postId: ID!, limit: Int = 3): [Post!]!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    posts: (
      _: unknown,
      {
        limit,
        offset = 0,
        category,
        tag,
        search,
      }: {
        limit?: number;
        offset?: number;
        category?: string;
        tag?: string;
        search?: string;
      },
    ) => {
      let result = [...posts];

      // Filter by status (only published posts)
      result = result.filter((post) => post.status === "PUBLISHED");

      // Apply filters
      if (category) {
        result = result.filter((post) =>
          post.categories.some((cat) => cat.id === category),
        );
      }

      if (tag) {
        result = result.filter((post) => post.tags.some((t) => t.id === tag));
      }

      if (search) {
        const searchLower = search.toLowerCase();
        result = result.filter(
          (post) =>
            post.title.toLowerCase().includes(searchLower) ||
            post.excerpt.toLowerCase().includes(searchLower) ||
            post.content.toLowerCase().includes(searchLower),
        );
      }

      // Apply pagination
      if (offset) result = result.slice(offset);
      if (limit) result = result.slice(0, limit);

      return result;
    },

    post: (_: unknown, { slug }: { slug: string }) => {
      return posts.find((post) => post.slug === slug) || null;
    },

    categories: () => categories,

    tags: () => tags,

    relatedPosts: (
      _: unknown,
      { postId, limit }: { postId: string; limit?: number },
    ) => {
      const post = posts.find((p) => p.id === postId);
      if (!post) return [];

      // Find posts with similar categories or tags
      return posts
        .filter(
          (p) =>
            p.id !== postId &&
            p.status === "PUBLISHED" &&
            (p.categories.some((cat) =>
              post.categories.some((pc) => pc.id === cat.id),
            ) ||
              p.tags.some((t) => post.tags.some((pt) => pt.id === t.id))),
        )
        .slice(0, limit);
    },
  },
};

// Create and export the schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Export interfaces with 'I' prefix to avoid conflicts
export interface IPost extends Post {}
export interface IAuthor extends Author {}
export interface ICategory extends Category {}
export interface ITag extends Tag {}
