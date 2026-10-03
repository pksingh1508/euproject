import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, Eye } from "lucide-react";
import { ArticleView } from "@/components/common/ArticleView";
import { NEWS } from "@/constants/news";
import { getNewsBySlug } from "@/lib/articles";
import { formatDate, getReadingTime } from "@/lib/content";

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every hardcoded article at build time. */
export function generateStaticParams() {
  return NEWS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "Article Not Found | EU Prime Serwis" };

  return {
    title: `${article.title} | EU Prime Serwis`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      images: [article.image]
    }
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <ArticleView
      title={article.title}
      contents={article.content}
      image={article.image}
      category={article.category}
      tags={article.tags}
      meta={[
        { icon: Calendar, label: formatDate(article.publishedAt) },
        { icon: Eye, label: `${article.views.toLocaleString("en-US")} views` },
        { icon: Clock, label: `${getReadingTime(article.content)} min read` }
      ]}
      backHref="/immigration-news"
      backLabel="Back to All News"
      shareLabel="Share this article:"
      shareText={`Check out this immigration news: ${article.title}`}
    />
  );
}
