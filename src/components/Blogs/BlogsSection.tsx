"use client";

import { BookOpen } from "lucide-react";
import { SingleBlogSection } from "./SingleBlogSection";
import { PageHeader } from "@/components/common/PageHeader";
import {
  ListingMessage,
  ListingStats,
  ListingToolbar,
  Pagination,
  useListing
} from "@/components/common/Listing";
import { articleMatches, type BlogSummary } from "@/lib/content";

export function BlogsSection({ posts }: { posts: BlogSummary[] }) {
  const { query, setQuery, page, pageCount, pageItems, goToPage } = useListing(
    posts,
    articleMatches
  );

  const totalLikes = posts.reduce((total, post) => total + post.likes, 0);
  const topicCount = new Set(posts.map((post) => post.category)).size;

  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Blog Posts"
        title="Our Latest Blog Posts"
        highlight="Blog Posts"
        crumb="Blog"
        description="Discover insights, tips, and stories about immigration, career development, and life abroad"
      >
        <ListingStats
          stats={[
            { label: "Total Posts", value: posts.length },
            { label: "Total Likes", value: totalLikes },
            { label: "Topics", value: topicCount }
          ]}
        />
        <ListingToolbar
          value={query}
          onChange={setQuery}
          placeholder="Search blog posts..."
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            {pageItems.length === 0 ? (
              <ListingMessage
                icon={BookOpen}
                title={
                  query
                    ? "No blog posts match your search"
                    : "No blog posts available"
                }
                description={
                  query
                    ? "Try adjusting your search terms."
                    : "Check back later for new blog posts."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {pageItems.map((post, index) => (
                    <SingleBlogSection key={post.slug} post={post} index={index} />
                  ))}
                </div>

                <Pagination
                  page={page}
                  pageCount={pageCount}
                  onChange={goToPage}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
