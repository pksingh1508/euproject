"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import "highlight.js/styles/github-dark-dimmed.css";
import { BlogItem } from "@/lib/dbTypes";
import {
  ArticleError,
  ArticleSkeleton,
  ArticleView
} from "@/components/common/ArticleView";

interface SingleBlogPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export default function SingleBlogPage({ params }: SingleBlogPageProps) {
  const [blog, setBlog] = useState<BlogItem | null>(null);
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
    const fetchSingleBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/single-blog?slug=${slug}&locale=en`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error(`Failed to fetch blog: ${response.statusText}`);
        }

        const data: BlogItem = await response.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching single blog:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch blog post"
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchSingleBlog();
    }
  }, [slug]);

  // Extract data with fallback handling
  const blogData = blog
    ? {
        id: blog.id,
        title: blog.attributes?.title || blog.title || "Untitled",
        contents: blog.attributes?.contents || blog.contents || "",
        updatedAt: blog.attributes?.updatedAt || blog.updatedAt || "",
        likes_count: blog.attributes?.likes_count || blog.likes_count || 0,
        comments_count:
          blog.attributes?.comments_count || blog.comments_count || 0,
        tags: blog.attributes?.tags || blog.tags || "",
        category: blog.attributes?.category || blog.category || "",
        slug: blog.attributes?.slug || blog.slug || "",
        blog_image:
          blog.attributes?.blog_image?.data?.attributes?.url ||
          blog.blog_image?.url ||
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
    if (navigator.share && blogData) {
      try {
        await navigator.share({
          title: blogData.title,
          text: `Check out this blog post: ${blogData.title}`,
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

  if (error || !blogData) {
    return (
      <ArticleError
        title="Blog Post Not Found"
        message={error || "The requested blog post could not be found."}
        backHref="/blog"
        backLabel="Back to Blog"
      />
    );
  }

  const tags = parseTags(blogData.tags);

  return (
    <ArticleView
      title={blogData.title}
      contents={blogData.contents}
      image={blogData.blog_image ? `${URL}${blogData.blog_image}` : null}
      category={blogData.category}
      tags={tags}
      meta={[
        { icon: Calendar, label: formatDate(blogData.updatedAt) },
        {
          icon: Heart,
          label: `${blogData.likes_count.toLocaleString()} likes`,
          iconClassName: "fill-flag-red/80 text-flag-red"
        },
        {
          icon: MessageCircle,
          label: `${blogData.comments_count.toLocaleString()} comments`
        },
        {
          icon: Clock,
          label: `${Math.ceil(blogData.contents.split(" ").length / 200)} min read`
        }
      ]}
      backHref="/blog"
      backLabel="Back to All Posts"
      shareLabel="Share this post:"
      onShare={handleShare}
    />
  );
}
