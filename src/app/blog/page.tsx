import type { Metadata } from "next";
import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/markdown";
import BlogCard from "@/components/blog-card";

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

export default async function BlogPage() {
  const blogPosts = await getAllPosts();
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
                  <Badge
                    key={category}
                    variant={category === "All" ? "default" : "secondary"}
                    className="px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Posts */}
          <div
            className="mb-16 relative rounded-3xl p-8 overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-90"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Regular Posts */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Latest Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index + featuredPosts.length}
                  />
                ))}
              </div>
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
