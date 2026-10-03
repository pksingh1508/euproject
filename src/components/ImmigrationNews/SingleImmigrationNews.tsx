"use client";

import { Newspaper } from "lucide-react";
import { ArticleCard } from "@/components/common/ArticleCard";
import { formatDate, type NewsSummary } from "@/lib/content";

interface SingleImmigrationNewsProps {
  news: NewsSummary;
  index?: number;
}

export function SingleImmigrationNews({
  news,
  index = 0
}: SingleImmigrationNewsProps) {
  return (
    <ArticleCard
      href={`/immigration-news/${news.slug}`}
      title={news.title}
      excerpt={news.excerpt}
      image={news.image}
      date={formatDate(news.publishedAt, "short")}
      views={news.views}
      index={index}
      ctaLabel="Read Full Article"
      fallbackIcon={Newspaper}
      fallbackLabel="News Image"
    />
  );
}
