"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SuccessItem } from "@/lib/dbTypes";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

interface SingleSuccessStoryProps {
  successStory: SuccessItem;
  index: number;
}

export function SingleSuccessStory({
  successStory,
  index
}: SingleSuccessStoryProps) {
  // Get values from both nested and flat structure
  const name = successStory.attributes?.name || successStory.name || "";
  const story = successStory.attributes?.story || successStory.story || "";
  const updatedAt =
    successStory.attributes?.updatedAt || successStory.updatedAt || "";

  // Get image URL from nested or flat structure
  const imageUrl =
    successStory.attributes?.success_image?.data?.attributes?.url ||
    successStory.success_image?.url ||
    "";

  const fullImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `https://determined-unity-de531adc95.strapiapp.com${imageUrl}`;

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "";
    }
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: Math.min(index, 4) * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-[border-color,box-shadow] duration-500 hover:border-primary/25 hover:shadow-elevated sm:p-8"
    >
      <Quote
        aria-hidden
        className="absolute right-6 top-6 size-12 text-primary/10 transition-colors duration-500 group-hover:text-primary/20"
        strokeWidth={1.25}
      />

      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        {imageUrl && (
          <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl shadow-soft ring-1 ring-border">
            <Image
              src={fullImageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <blockquote className="font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
            “{story}”
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <span className="font-semibold text-foreground">{name}</span>
            {updatedAt && (
              <>
                <span aria-hidden className="size-1 rounded-full bg-border" />
                <span className="text-sm text-muted-foreground">
                  {formatDate(updatedAt)}
                </span>
              </>
            )}
          </figcaption>
        </div>
      </div>
    </motion.figure>
  );
}
