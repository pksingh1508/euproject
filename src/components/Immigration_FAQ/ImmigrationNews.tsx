"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { RippleButton } from "../ui/ripple-button";
import { SingleNews } from "./SingleNews";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { NewsSummary } from "@/lib/content";

export function ImmigrationNews({ news }: { news: NewsSummary[] }) {
  const router = useRouter();

  return (
    <div>
      <SectionHeading
        eyebrow="Latest updates"
        title="Immigration News"
        highlight="News"
        size="md"
      />

      {news.length > 0 ? (
        <Stagger
          className="mt-10 divide-y divide-border/70 border-y border-border/70"
          stagger={0.06}
        >
          {news.map((article) => (
            <StaggerItem key={article.slug} blur={false} y={14}>
              <SingleNews news={article} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <p className="mt-10 text-muted-foreground">No news articles found.</p>
      )}

      {news.length > 0 && (
        <Reveal className="mt-8">
          <RippleButton
            variant="brandOutline"
            size="lg"
            onClick={() => router.push(`/immigration-news`)}
            className="group"
          >
            See All News
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </RippleButton>
        </Reveal>
      )}
    </div>
  );
}
