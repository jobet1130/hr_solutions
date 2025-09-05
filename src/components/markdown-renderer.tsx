"use client";

import React from "react";
import Image, { type ImageProps } from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

type BaseComponentProps = {
  children: React.ReactNode;
  node?: unknown;
  [key: string]: unknown;
};

type CodeComponentProps = BaseComponentProps & {
  inline?: boolean;
  className?: string;
};

type ImageComponentProps = Omit<ImageProps, "src" | "alt"> &
  BaseComponentProps & {
    src?: string;
    alt?: string;
  };

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const components: Components = {
    h1: ({ children, ...props }: BaseComponentProps) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: BaseComponentProps) => (
      <h2 className="text-2xl font-bold mt-8 mb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: BaseComponentProps) => (
      <h3 className="text-xl font-bold mt-6 mb-2" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }: BaseComponentProps) => (
      <p
        className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }: BaseComponentProps) => (
      <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: BaseComponentProps) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: BaseComponentProps) => (
      <li className="text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </li>
    ),
    a: ({ children, ...props }: BaseComponentProps & { href?: string }) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }: BaseComponentProps) => (
      <blockquote
        className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic my-6 text-gray-600 dark:text-gray-400"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ className, children, ...props }: CodeComponentProps) => {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !className?.includes("language-");

      if (!isInline && match) {
        return (
          <div className="my-6 rounded-lg overflow-hidden">
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1] as string}
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
    table: ({ children, ...props }: BaseComponentProps) => (
      <div className="overflow-x-auto my-6">
        <table
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: BaseComponentProps) => (
      <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: BaseComponentProps) => (
      <tbody
        className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
        {...props}
      >
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: BaseComponentProps) => (
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: BaseComponentProps) => (
      <th
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: BaseComponentProps) => (
      <td
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </td>
    ),
    img: ({ src, alt, ...props }: ImageComponentProps) => (
      <div className="my-6">
        <div className="relative w-full h-auto">
          <Image
            src={src || ""}
            alt={alt || ""}
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="rounded-lg shadow-lg mx-auto object-contain"
            priority={false}
            {...props}
          />
        </div>
        {alt && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            {alt}
          </p>
        )}
      </div>
    ),
  };

  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
