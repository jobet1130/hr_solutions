"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        components={{
          h1: (props) => (
            <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: (props) => (
            <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-xl font-bold mt-6 mb-2" {...props} />
          ),
          p: (props) => (
            <p
              className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
              {...props}
            />
          ),
          ul: (props) => (
            <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
          ),
          li: (props) => (
            <li className="text-gray-700 dark:text-gray-300" {...props} />
          ),
          a: (props) => (
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic my-6 text-gray-600 dark:text-gray-400"
              {...props}
            />
          ),
          code({ className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !className?.includes("language-");

            if (!isInline && match) {
              return (
                <div className="my-6 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers={true}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table: (props) => (
            <div className="overflow-x-auto my-6">
              <table
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                {...props}
              />
            </div>
          ),
          thead: (props) => (
            <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
          ),
          tbody: (props) => (
            <tbody
              className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
              {...props}
            />
          ),
          tr: (props) => (
            <tr
              className="hover:bg-gray-50 dark:hover:bg-gray-800"
              {...props}
            />
          ),
          th: (props) => (
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              {...props}
            />
          ),
          td: (props) => (
            <td
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"
              {...props}
            />
          ),
          img: (props) => (
            <div className="my-6">
              <img
                className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
                {...props}
                alt={props.alt || ""}
              />
              {props.alt && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {props.alt}
                </p>
              )}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
