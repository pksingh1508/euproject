"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { formatDate, type SuccessStory } from "@/lib/content";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

interface SingleSuccessStoryProps {
  successStory: SuccessStory;
  index: number;
}

/** "Ana & Pedro M." → "AP" (skips words without letters, such as "&"). */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => part.toLowerCase() !== part.toUpperCase())
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function SingleSuccessStory({
  successStory,
  index
}: SingleSuccessStoryProps) {
  const { name, role, story, date, image } = successStory;

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
        {image ? (
          <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl shadow-soft ring-1 ring-border">
            <Image src={image} alt={name} fill className="object-cover" sizes="96px" />
          </div>
        ) : (
          <div
            aria-hidden
            className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-display text-3xl font-medium text-primary ring-1 ring-border"
          >
            {initials(name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <blockquote className="font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
            “{story}”
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <span className="font-semibold text-foreground">{name}</span>
            <span aria-hidden className="size-1 rounded-full bg-border" />
            <span className="text-sm text-muted-foreground">{role}</span>
            <span aria-hidden className="size-1 rounded-full bg-border" />
            <span className="text-sm text-muted-foreground">{formatDate(date)}</span>
          </figcaption>
        </div>
      </div>
    </motion.figure>
  );
}
