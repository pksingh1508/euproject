"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Eye } from "lucide-react";
import "highlight.js/styles/github-dark-dimmed.css";
import { NewsItem } from "@/lib/dbTypes";
import {
  ArticleError,
  ArticleSkeleton,
  ArticleView
} from "@/components/common/ArticleView";

interface SingleNewsPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export default function SingleNewsPage({ params }: SingleNewsPageProps) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>("");

  const URL = process.env.NEXT_PUBLIC_CMS_URL;

  // Handle async params
  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/single-news?slug=${slug}&locale=en`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("News article not found");
          }
          throw new Error(`Failed to fetch news: ${response.statusText}`);
        }

        const data: NewsItem = await response.json();
        setNews(data);
      } catch (err) {
        console.error("Error fetching single news:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch news article"
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchSingleNews();
    }
  }, [slug]);

  // Extract data with fallback handling
  const newsData = news
    ? {
        id: news.id,
        title: news.attributes?.title || news.title || "Untitled",
        contents: news.attributes?.contents || news.contents || "",
        updatedAt: news.attributes?.updatedAt || news.updatedAt || "",
        views: news.attributes?.views || news.views || 0,
        tags: news.attributes?.tags || news.tags || "",
        category: news.attributes?.category || news.category || "",
        slug: news.attributes?.slug || news.slug || "",
        news_image:
          news.attributes?.news_image?.data?.attributes?.url ||
          news.news_image?.url ||
          null
      }
    : null;

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "";
    }
  };

  // Parse tags
  const parseTags = (tagsString: string) => {
    if (!tagsString) return [];
    return tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  };

  // Share functionality
  const handleShare = async () => {
    if (navigator.share && newsData) {
      try {
        await navigator.share({
          title: newsData.title,
          text: `Check out this immigration news: ${newsData.title}`,
          url: window.location.href
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return <ArticleSkeleton />;
  }

  if (error || !newsData) {
    return (
      <ArticleError
        title="Article Not Found"
        message={error || "The requested article could not be found."}
        backHref="/immigration-news"
        backLabel="Back to News"
      />
    );
  }

  const tags = parseTags(newsData.tags);

  return (
    <ArticleView
      title={newsData.title}
      contents={newsData.contents}
      image={newsData.news_image ? `${URL}${newsData.news_image}` : null}
      category={newsData.category}
      tags={tags}
      meta={[
        { icon: Calendar, label: formatDate(newsData.updatedAt) },
        { icon: Eye, label: `${newsData.views.toLocaleString()} views` },
        {
          icon: Clock,
          label: `${Math.ceil(newsData.contents.split(" ").length / 200)} min read`
        }
      ]}
      backHref="/immigration-news"
      backLabel="Back to All News"
      shareLabel="Share this article:"
      onShare={handleShare}
    />
  );
}
