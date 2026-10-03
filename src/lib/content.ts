/**
 * Types and helpers for the site's hardcoded content (blog posts, news
 * articles and success stories). Safe to import from client components —
 * the content itself lives in `src/constants` and is read through
 * `src/lib/articles.ts` on the server.
 */

/** Fields shared by blog posts and news articles. */
export interface Article {
  /** URL segment, e.g. `/blog/<slug>`. Must be unique within its collection. */
  slug: string;
  title: string;
  /** One or two sentences shown on cards and used as the meta description. */
  excerpt: string;
  /** Article body in Markdown (GitHub-flavoured). */
  content: string;
  image: string;
  /** ISO date, e.g. "2026-09-22". */
  publishedAt: string;
  category: string;
  tags: string[];
}

export interface BlogPost extends Article {
  likes: number;
}

export interface NewsArticle extends Article {
  views: number;
}

/** Card-sized view of an article: everything except the body. */
export type ArticleSummary<T extends Article> = Omit<T, "content"> & {
  readingTime: number;
};

export type BlogSummary = ArticleSummary<BlogPost>;
export type NewsSummary = ArticleSummary<NewsArticle>;

export interface SuccessStory {
  id: number;
  name: string;
  /** Job title and destination, e.g. "CNC Operator · Wrocław, Poland". */
  role: string;
  story: string;
  /** ISO date, e.g. "2026-08-30". */
  date: string;
  image?: string;
}

/** Estimated minutes to read a Markdown body at ~200 words per minute. */
export function getReadingTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Formats an ISO date for display. Pinned to UTC so the server render and
 * client hydration always produce the same string.
 */
export function formatDate(iso: string, month: "long" | "short" = "long") {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC"
  });
}

/** Case-insensitive match against an article's title, excerpt, category and tags. */
export function articleMatches(
  article: Pick<Article, "title" | "excerpt" | "category" | "tags">,
  query: string
) {
  return [article.title, article.excerpt, article.category, ...article.tags].some(
    (field) => field.toLowerCase().includes(query)
  );
}
