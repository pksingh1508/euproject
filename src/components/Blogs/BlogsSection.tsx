"use client";

import { useEffect, useState, useCallback } from "react";
import { useLenis } from "lenis/react";
import { BookOpen } from "lucide-react";
import { SingleBlogSection } from "./SingleBlogSection";
import { Button } from "@/components/ui/button";
import { BlogItem, BlogResponse } from "@/lib/dbTypes";
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
  data: BlogItem[];
  timestamp: number;
}

export function BlogsSection() {
  // State for blog data and caching
  const [blogCache, setBlogCache] = useState<Map<number, CachedPage>>(
    new Map()
  );
  const [currentBlogs, setCurrentBlogs] = useState<BlogItem[]>([]);
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

  const fetchBlogs = useCallback(
    async (page: number, forceRefresh = false) => {
      try {
        // Check if we have cached data for this page
        const cachedPage = blogCache.get(page);
        const now = Date.now();

        if (
          !forceRefresh &&
          cachedPage &&
          now - cachedPage.timestamp < CACHE_TIMEOUT
        ) {
          // Use cached data
          setCurrentBlogs(cachedPage.data);
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/paginated-blogs?locale=en&page=${page}&pageSize=10`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }

        const data: BlogResponse = await response.json();
        const blogItems = data.data || [];

        // Cache the fetched data
        setBlogCache(
          (prev) =>
            new Map(
              prev.set(page, {
                data: blogItems,
                timestamp: now
              })
            )
        );

        setCurrentBlogs(blogItems);

        if (data.meta?.pagination) {
          setPagination(data.meta.pagination);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    },
    [blogCache, CACHE_TIMEOUT]
  );

  useEffect(() => {
    fetchBlogs(1);
  }, [fetchBlogs]);

  const lenis = useLenis();

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.pageCount &&
      newPage !== pagination.page
    ) {
      setPagination((prev) => ({ ...prev, page: newPage }));
      fetchBlogs(newPage);
      // Glide back to the top when page changes
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter blogs based on search term
  const filteredBlogs = currentBlogs.filter((blogItem) => {
    const title = blogItem.attributes?.title || blogItem.title || "";
    const short_desc =
      blogItem.attributes?.short_desc || blogItem.short_desc || "";
    const likes_count = (
      blogItem.attributes?.likes_count ||
      blogItem.likes_count ||
      0
    ).toString();

    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      short_desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      likes_count.includes(searchTerm)
    );
  });

  // Clear cache for refresh
  const handleRefresh = () => {
    setBlogCache(new Map());
    fetchBlogs(pagination.page, true);
  };

  // Get total likes from current page
  const getTotalLikes = () => {
    return currentBlogs.reduce((total, blog) => {
      return total + (blog.attributes?.likes_count || blog.likes_count || 0);
    }, 0);
  };

  const isInitialLoading =
    loading && pagination.page === 1 && currentBlogs.length === 0;

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
            { label: "Total Posts", value: pagination.total },
            { label: "Total Likes", value: getTotalLikes() },
            { label: "Cached Page", value: blogCache.size }
          ]}
        />
        <ListingToolbar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search blog posts..."
          onRefresh={handleRefresh}
          refreshing={loading}
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl">
            {isInitialLoading ? (
              <ListSkeleton />
            ) : error && currentBlogs.length === 0 ? (
              <ListingMessage
                icon={BookOpen}
                title="Unable to load blog posts"
                description={error}
                action={
                  <Button onClick={() => handleRefresh()} variant="outline">
                    Try Again
                  </Button>
                }
              />
            ) : !loading && filteredBlogs.length === 0 ? (
              <ListingMessage
                icon={BookOpen}
                title={
                  searchTerm
                    ? "No blog posts match your search"
                    : "No blog posts available"
                }
                description={
                  searchTerm
                    ? "Try adjusting your search terms."
                    : "Check back later for new blog posts."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {filteredBlogs.map((blogItem, index) => (
                    <SingleBlogSection
                      key={blogItem.id}
                      blog={blogItem}
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
