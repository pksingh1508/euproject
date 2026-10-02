"use client";

import { Newspaper } from "lucide-react";
import { NewsItem } from "@/lib/dbTypes";
import { ArticleCard } from "@/components/common/ArticleCard";

interface SingleImmigrationNewsProps {
  news: NewsItem;
  index?: number;
}

export function SingleImmigrationNews({
  news,
  index = 0
}: SingleImmigrationNewsProps) {
  const URL = process.env.NEXT_PUBLIC_CMS_URL;
  // Extract data with fallback handling for both Strapi attribute structure and flat structure
  const data = {
    id: news.id,
    title: news.attributes?.title || news.title || "Untitled",
    short_desc: news.attributes?.short_desc || news.short_desc || "",
    updatedAt:
      news.attributes?.updatedAt ||
      news.attributes?.publishedAt ||
      news.updatedAt ||
      news.publishedAt ||
      "",
    views: news.attributes?.views || news.views || 0,
    slug: news.attributes?.slug || news.slug || "",
    news_image:
      news.attributes?.news_image?.data?.attributes?.url ||
      news.news_image?.url ||
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

  return (
    <ArticleCard
      href={`/immigration-news/${data.slug}`}
      title={data.title}
      excerpt={data.short_desc}
      image={data.news_image ? `${URL}${data.news_image}` : null}
      date={formatDate(data.updatedAt)}
      views={data.views}
      index={index}
      ctaLabel="Read Full Article"
      fallbackIcon={Newspaper}
      fallbackLabel="News Image"
    />
  );
}
