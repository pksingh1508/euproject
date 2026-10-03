import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, Heart } from "lucide-react";
import { ArticleView } from "@/components/common/ArticleView";
import { BLOGS } from "@/constants/blogs";
import { getBlogBySlug } from "@/lib/articles";
import { formatDate, getReadingTime } from "@/lib/content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every hardcoded post at build time. */
export function generateStaticParams() {
  return BLOGS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Post Not Found | EU Prime Serwis" };

  return {
    title: `${post.title} | EU Prime Serwis`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <ArticleView
      title={post.title}
      contents={post.content}
      image={post.image}
      category={post.category}
      tags={post.tags}
      meta={[
        { icon: Calendar, label: formatDate(post.publishedAt) },
        {
          icon: Heart,
          label: `${post.likes.toLocaleString("en-US")} likes`,
          iconClassName: "fill-flag-red/80 text-flag-red"
        },
        { icon: Clock, label: `${getReadingTime(post.content)} min read` }
      ]}
      backHref="/blog"
      backLabel="Back to All Posts"
      shareLabel="Share this post:"
      shareText={`Check out this blog post: ${post.title}`}
    />
  );
}
