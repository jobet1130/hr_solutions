import { Metadata } from "next";
import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, type BlogPost } from "@/lib/markdown";
import BlogCard from "@/components/blog-card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Insights & Expert Advice | Blog",
  description:
    "Stay updated with the latest HR trends, compliance updates, and best practices from our team of experts.",
  openGraph: {
    title: "HR Insights & Expert Advice | Blog",
    description:
      "Stay updated with the latest HR trends, compliance updates, and best practices from our team of experts.",
  },
};

const categories = [
  "All",
  "Remote Work",
  "Benefits",
  "Compliance",
  "Performance",
  "Diversity & Inclusion",
  "Retention",
];

function filterPostsByCategory(posts: BlogPost[], category: string) {
  if (category === "All") return posts;
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

const POSTS_PER_PAGE = 3;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: {
    category?: string;
    page?: string;
  };
}) {
  const selectedCategory = searchParams.category || "All";
  const currentPage = Number(searchParams.page) || 1;

  const blogPosts = await getAllPosts();
  const filteredPosts = filterPostsByCategory(blogPosts, selectedCategory);

  // Combine all posts (featured first, then regular)
  const allPosts = [
    ...filteredPosts.filter((post) => post.featured),
    ...filteredPosts.filter((post) => !post.featured),
  ];

  // Pagination logic
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                HR Insights & Expert Advice
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Stay updated with the latest HR trends, compliance updates, and
                best practices from our team of industry experts
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog${category === "All" ? "" : `?category=${encodeURIComponent(category)}`}`}
                    scroll={false}
                  >
                    <Badge
                      variant={
                        category === selectedCategory ? "default" : "secondary"
                      }
                      className="px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* All Posts */}
          <div
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-85"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "Latest Articles"
                    : selectedCategory}
                </h2>
                {totalPages > 1 && (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage === 1}
                      asChild
                    >
                      <Link
                        href={`/blog?category=${encodeURIComponent(selectedCategory)}&page=${currentPage - 1}`}
                        scroll={false}
                        aria-label="Previous page"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage >= totalPages}
                      asChild
                    >
                      <Link
                        href={`/blog?category=${encodeURIComponent(selectedCategory)}&page=${currentPage + 1}`}
                        scroll={false}
                        aria-label="Next page"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
              {paginatedPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      index={index + (currentPage - 1) * POSTS_PER_PAGE}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700">
                    No more posts found
                  </h3>
                  <p className="mt-2 text-gray-500">
                    You&apos;ve reached the end of the list
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl py-16 px-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-800 bg-opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white">
                HR Insights & Expert Advice
              </h3>
              <p className="text-white mb-8 max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
                Stay updated with the latest HR trends, compliance updates, and
                best practices from our team of industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white text-gray-900 flex-1 w-full sm:w-auto border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
