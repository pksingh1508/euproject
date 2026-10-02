"use client";

import { BookOpen } from "lucide-react";
import { BlogItem } from "@/lib/dbTypes";
import { ArticleCard } from "@/components/common/ArticleCard";

interface SingleBlogSectionProps {
  blog: BlogItem;
  index?: number;
}

export function SingleBlogSection({ blog, index = 0 }: SingleBlogSectionProps) {
  const URL = process.env.NEXT_PUBLIC_CMS_URL;
  // Extract data with fallback handling for both Strapi attribute structure and flat structure
  const data = {
    id: blog.id,
    title: blog.attributes?.title || blog.title || "Untitled",
    short_desc: blog.attributes?.short_desc || blog.short_desc || "",
    updatedAt: blog.attributes?.updatedAt || blog.updatedAt || "",
    likes_count: blog.attributes?.likes_count || blog.likes_count || 0,
    slug: blog.attributes?.slug || blog.slug || "",
    blog_image:
      blog.attributes?.blog_image?.data?.attributes?.url ||
      blog.blog_image?.url ||
      null
  };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch {
      return "";
    }
  };

  // Calculate reading time
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(" ").length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <ArticleCard
      href={`/blog/${data.slug}`}
      title={data.title}
      excerpt={data.short_desc}
      image={data.blog_image ? `${URL}${data.blog_image}` : null}
      date={formatDate(data.updatedAt)}
      readingTime={calculateReadingTime(data.short_desc)}
      likes={data.likes_count}
      index={index}
      ctaLabel="Read Full Post"
      fallbackIcon={BookOpen}
      fallbackLabel="Blog Post"
    />
  );
}
