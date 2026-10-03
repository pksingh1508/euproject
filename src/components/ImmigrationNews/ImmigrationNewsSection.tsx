"use client";

import { Newspaper } from "lucide-react";
import { SingleImmigrationNews } from "./SingleImmigrationNews";
import { PageHeader } from "@/components/common/PageHeader";
import {
  ListingMessage,
  ListingStats,
  ListingToolbar,
  Pagination,
  useListing
} from "@/components/common/Listing";
import { articleMatches, type NewsSummary } from "@/lib/content";

export function ImmigrationNewsSection({ news }: { news: NewsSummary[] }) {
  const { query, setQuery, page, pageCount, pageItems, goToPage } = useListing(
    news,
    articleMatches
  );

  const totalViews = news.reduce((total, article) => total + article.views, 0);
  const topicCount = new Set(news.map((article) => article.category)).size;

  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Immigration News"
        title="Latest Immigration Updates"
        highlight="Updates"
        crumb="Immigration News"
        description="Stay informed with the latest immigration news, policy changes, and important updates from around the world"
      >
        <ListingStats
          stats={[
            { label: "Total Articles", value: news.length },
            { label: "Total Views", value: totalViews },
            { label: "Topics", value: topicCount }
          ]}
        />
        <ListingToolbar
          value={query}
          onChange={setQuery}
          placeholder="Search news..."
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            {pageItems.length === 0 ? (
              <ListingMessage
                icon={Newspaper}
                title={query ? "No news matches your search" : "No news available"}
                description={
                  query
                    ? "Try adjusting your search terms."
                    : "Check back later for immigration news updates."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {pageItems.map((article, index) => (
                    <SingleImmigrationNews
                      key={article.slug}
                      news={article}
                      index={index}
                    />
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
