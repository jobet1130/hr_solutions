"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";

// Dynamically import motion to avoid SSR issues
const motion = {
  div: dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
    ssr: false,
  }),
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const MotionDiv = motion.div;

  // Only render motion animations on the client side
  const motionProps = isMounted
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        whileHover: { y: -5 },
      }
    : {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
        whileHover: {},
      };

  return (
    <MotionDiv {...motionProps} className="h-full">
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full flex flex-col">
        <CardHeader className="pb-4 flex-none">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              {post.category}
            </Badge>
            {post.featured && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900">
                Featured
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-4 flex-1 flex flex-col">
          <CardDescription className="text-gray-600 line-clamp-3 mb-4 leading-relaxed flex-1">
            {post.excerpt}
          </CardDescription>

          <div className="flex items-center text-sm text-gray-500 space-x-4 mt-auto">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="truncate">{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CalendarDays className="h-4 w-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0 flex-none">
          <Link href={`/blog/${post.slug}`} className="w-full">
            <Button
              className="w-full transition-all duration-300 group"
              variant={post.featured ? "default" : "outline"}
            >
              <span>Read Article</span>
              <span
                className={`ml-2 inline-block transition-transform duration-200 ${isMounted ? "group-hover:translate-x-1" : ""}`}
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
