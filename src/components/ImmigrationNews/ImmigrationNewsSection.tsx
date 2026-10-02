"use client";

import { useEffect, useState, useCallback } from "react";
import { useLenis } from "lenis/react";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsItem, StrapiResponse } from "@/lib/dbTypes";
import { SingleImmigrationNews } from "./SingleImmigrationNews";
import { PageHeader } from "@/components/common/PageHeader";
import {
  ListingMessage,
  ListingStats,
  ListingToolbar,
  ListSkeleton,
  Pagination
} from "@/components/common/Listing";

interface PaginationData {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface CachedPage {
  data: NewsItem[];
  timestamp: number;
}

export function ImmigrationNewsSection() {
  // State for news data and caching
  const [newsCache, setNewsCache] = useState<Map<number, CachedPage>>(
    new Map()
  );
  const [currentNews, setCurrentNews] = useState<NewsItem[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    pageSize: 10,
    pageCount: 1,
    total: 0
  });

  // UI state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Cache timeout - 5 minutes
  const CACHE_TIMEOUT = 5 * 60 * 1000;

  const fetchNews = useCallback(
    async (page: number, forceRefresh = false) => {
      try {
        // Check if we have cached data for this page
        const cachedPage = newsCache.get(page);
        const now = Date.now();

        if (
          !forceRefresh &&
          cachedPage &&
          now - cachedPage.timestamp < CACHE_TIMEOUT
        ) {
          // Use cached data
          setCurrentNews(cachedPage.data);
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/immigration-news?locale=en&page=${page}&pageSize=10`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.statusText}`);
        }

        const data: StrapiResponse = await response.json();
        const newsItems = data.data || [];

        // Cache the fetched data
        setNewsCache(
          (prev) =>
            new Map(
              prev.set(page, {
                data: newsItems,
                timestamp: now
              })
            )
        );

        setCurrentNews(newsItems);

        if (data.meta?.pagination) {
          setPagination(data.meta.pagination);
        }
      } catch (err) {
        console.error("Error fetching immigration news:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch immigration news"
        );
      } finally {
        setLoading(false);
      }
    },
    [newsCache, CACHE_TIMEOUT]
  );

  useEffect(() => {
    fetchNews(1);
  }, [fetchNews]);

  const lenis = useLenis();

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.pageCount &&
      newPage !== pagination.page
    ) {
      setPagination((prev) => ({ ...prev, page: newPage }));
      fetchNews(newPage);
      // Glide back to the top when page changes
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter news based on search term
  const filteredNews = currentNews.filter((newsItem) => {
    const title = newsItem.attributes?.title || newsItem.title || "";
    const short_desc =
      newsItem.attributes?.short_desc || newsItem.short_desc || "";
    const views = (
      newsItem.attributes?.views ||
      newsItem.views ||
      0
    ).toString();

    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      short_desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      views.includes(searchTerm)
    );
  });

  // Clear cache for refresh
  const handleRefresh = () => {
    setNewsCache(new Map());
    fetchNews(pagination.page, true);
  };

  const isInitialLoading =
    loading && pagination.page === 1 && currentNews.length === 0;

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
            { label: "Total Articles", value: pagination.total },
            { label: "Total Pages", value: pagination.pageCount },
            { label: "Cached Page", value: newsCache.size }
          ]}
        />
        <ListingToolbar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search news..."
          onRefresh={handleRefresh}
          refreshing={loading}
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            {isInitialLoading ? (
              <ListSkeleton />
            ) : error && currentNews.length === 0 ? (
              <ListingMessage
                icon={Newspaper}
                title="Unable to load news"
                description={error}
                action={
                  <Button onClick={() => handleRefresh()} variant="outline">
                    Try Again
                  </Button>
                }
              />
            ) : !loading && filteredNews.length === 0 ? (
              <ListingMessage
                icon={Newspaper}
                title={
                  searchTerm
                    ? "No news matches your search"
                    : "No news available"
                }
                description={
                  searchTerm
                    ? "Try adjusting your search terms."
                    : "Check back later for immigration news updates."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {filteredNews.map((newsItem, index) => (
                    <SingleImmigrationNews
                      key={newsItem.id}
                      news={newsItem}
                      index={index}
                    />
                  ))}
                </div>

                {/* Loading placeholder for pagination */}
                {loading && (
                  <div className="mt-6">
                    <ListSkeleton count={1} />
                  </div>
                )}

                <Pagination
                  page={pagination.page}
                  pageCount={pagination.pageCount}
                  onChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
