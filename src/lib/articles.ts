import { BLOGS } from "@/constants/blogs";
import { NEWS } from "@/constants/news";
import {
  getReadingTime,
  type Article,
  type ArticleSummary,
  type BlogSummary,
  type NewsSummary
} from "./content";

/*
 * Lookups over the hardcoded blog posts and news articles. Call these from
 * server components and pass the (body-less) summaries down to client
 * components, so article bodies never end up in the client bundle.
 */

const newestFirst = (a: Article, b: Article) =>
  b.publishedAt.localeCompare(a.publishedAt);

function toSummary<T extends Article>({ content, ...rest }: T): ArticleSummary<T> {
  return { ...rest, readingTime: getReadingTime(content) };
}

export function getBlogSummaries(): BlogSummary[] {
  return [...BLOGS].sort(newestFirst).map(toSummary);
}

export function getBlogBySlug(slug: string) {
  return BLOGS.find((post) => post.slug === slug);
}

export function getNewsSummaries(): NewsSummary[] {
  return [...NEWS].sort(newestFirst).map(toSummary);
}

export function getNewsBySlug(slug: string) {
  return NEWS.find((article) => article.slug === slug);
}
