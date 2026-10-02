"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { RippleButton } from "../ui/ripple-button";
import { NEWS_DATA } from "@/constants/data";
import { SingleNews } from "./SingleNews";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ImmigrationNews() {
  const router = useRouter();

  return (
    <div>
      <SectionHeading
        eyebrow="Latest updates"
        title="Immigration News"
        highlight="News"
        size="md"
      />

      {NEWS_DATA.length > 0 ? (
        <Stagger
          className="mt-10 divide-y divide-border/70 border-y border-border/70"
          stagger={0.06}
        >
          {NEWS_DATA.map((newsItem) => (
            <StaggerItem key={newsItem.id} blur={false} y={14}>
              <SingleNews news={newsItem} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <p className="mt-10 text-muted-foreground">No news articles found.</p>
      )}

      {NEWS_DATA.length > 0 && (
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
