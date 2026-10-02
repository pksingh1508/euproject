"use client";

import { useEffect, useState, useCallback } from "react";
import { useLenis } from "lenis/react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SuccessItem, SuccessStoryResponse } from "@/lib/dbTypes";
import { SingleSuccessStory } from "./SingleSuccessStory";
import { PageHeader } from "@/components/common/PageHeader";
import {
  ListingMessage,
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
  data: SuccessItem[];
  timestamp: number;
}

export function AllSuccessStories() {
  // State for success story data and caching
  const [successStoriesCache, setSuccessStoriesCache] = useState<
    Map<number, CachedPage>
  >(new Map());
  const [currentSuccessStories, setCurrentSuccessStories] = useState<
    SuccessItem[]
  >([]);
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

  const fetchSuccessStories = useCallback(
    async (page: number, forceRefresh = false) => {
      try {
        // Check if we have cached data for this page
        const cachedPage = successStoriesCache.get(page);
        const now = Date.now();

        if (
          !forceRefresh &&
          cachedPage &&
          now - cachedPage.timestamp < CACHE_TIMEOUT
        ) {
          // Use cached data
          setCurrentSuccessStories(cachedPage.data);
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/success-story?locale=en&page=${page}&pageSize=10`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch success stories: ${response.statusText}`
          );
        }

        const data: SuccessStoryResponse = await response.json();
        const successStoryItems = data.data || [];

        // Cache the fetched data
        setSuccessStoriesCache(
          (prev) =>
            new Map(
              prev.set(page, {
                data: successStoryItems,
                timestamp: now
              })
            )
        );

        setCurrentSuccessStories(successStoryItems);

        if (data.meta?.pagination) {
          setPagination(data.meta.pagination);
        }
      } catch (err) {
        console.error("Error fetching success stories:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch success stories"
        );
      } finally {
        setLoading(false);
      }
    },
    [successStoriesCache, CACHE_TIMEOUT]
  );

  useEffect(() => {
    fetchSuccessStories(1);
  }, [fetchSuccessStories]);

  const lenis = useLenis();

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.pageCount &&
      newPage !== pagination.page
    ) {
      setPagination((prev) => ({ ...prev, page: newPage }));
      fetchSuccessStories(newPage);
      // Glide back to the top when page changes
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter success stories based on search term
  const filteredSuccessStories = currentSuccessStories.filter((successItem) => {
    const name = successItem.attributes?.name || successItem.name || "";
    const whatTheySay =
      successItem.attributes?.story || successItem.story || "";

    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      whatTheySay.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Clear cache for refresh
  const handleRefresh = () => {
    setSuccessStoriesCache(new Map());
    fetchSuccessStories(pagination.page, true);
  };

  const isInitialLoading =
    loading && pagination.page === 1 && currentSuccessStories.length === 0;

  return (
    <div className="pb-16">
      <PageHeader
        eyebrow="Success Stories"
        title="Our Success Stories"
        highlight="Success Stories"
        crumb="Success Stories"
        description="Read inspiring stories from our clients who achieved their immigration goals with our help"
      >
        <ListingToolbar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search success stories..."
          onRefresh={handleRefresh}
          refreshing={loading}
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            {isInitialLoading ? (
              <ListSkeleton compact />
            ) : error && currentSuccessStories.length === 0 ? (
              <ListingMessage
                icon={Users}
                title="Unable to load success stories"
                description={error}
                action={
                  <Button onClick={() => handleRefresh()} variant="outline">
                    Try Again
                  </Button>
                }
              />
            ) : !loading && filteredSuccessStories.length === 0 ? (
              <ListingMessage
                icon={Users}
                title={
                  searchTerm
                    ? "No success stories match your search"
                    : "No success stories available"
                }
                description={
                  searchTerm
                    ? "Try adjusting your search terms."
                    : "Check back later for new success stories."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {filteredSuccessStories.map((successStoryItem, index) => (
                    <SingleSuccessStory
                      key={successStoryItem.id}
                      successStory={successStoryItem}
                      index={index}
                    />
                  ))}
                </div>

                {/* Loading placeholder for pagination */}
                {loading && (
                  <div className="mt-6">
                    <ListSkeleton count={1} compact />
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
