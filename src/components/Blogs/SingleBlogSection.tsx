"use client";

import { BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/common/ArticleCard";
import { formatDate, type BlogSummary } from "@/lib/content";

interface SingleBlogSectionProps {
  post: BlogSummary;
  index?: number;
}

export function SingleBlogSection({ post, index = 0 }: SingleBlogSectionProps) {
  return (
    <ArticleCard
      href={`/blog/${post.slug}`}
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
      date={formatDate(post.publishedAt, "short")}
      readingTime={post.readingTime}
      likes={post.likes}
      index={index}
      ctaLabel="Read Full Post"
      fallbackIcon={BookOpen}
      fallbackLabel="Blog Post"
    />
  );
}
