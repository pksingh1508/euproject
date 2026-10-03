"use client";

import { Users } from "lucide-react";
import { SingleSuccessStory } from "./SingleSuccessStory";
import { PageHeader } from "@/components/common/PageHeader";
import {
  ListingMessage,
  ListingToolbar,
  Pagination,
  useListing
} from "@/components/common/Listing";
import type { SuccessStory } from "@/lib/content";

const storyMatches = (story: SuccessStory, query: string) =>
  [story.name, story.role, story.story].some((field) =>
    field.toLowerCase().includes(query)
  );

export function AllSuccessStories({ stories }: { stories: SuccessStory[] }) {
  const { query, setQuery, page, pageCount, pageItems, goToPage } = useListing(
    stories,
    storyMatches
  );

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
          value={query}
          onChange={setQuery}
          placeholder="Search success stories..."
        />
      </PageHeader>

      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            {pageItems.length === 0 ? (
              <ListingMessage
                icon={Users}
                title={
                  query
                    ? "No success stories match your search"
                    : "No success stories available"
                }
                description={
                  query
                    ? "Try adjusting your search terms."
                    : "Check back later for new success stories."
                }
              />
            ) : (
              <>
                <div className="space-y-6">
                  {pageItems.map((story, index) => (
                    <SingleSuccessStory
                      key={story.id}
                      successStory={story}
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
