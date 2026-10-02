"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Eye,
  Heart,
  type LucideIcon
} from "lucide-react";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

interface ArticleCardProps {
  href: string;
  title: string;
  excerpt: string;
  image?: string | null;
  date?: string;
  readingTime?: number;
  views?: number;
  likes?: number;
  index?: number;
  ctaLabel: string;
  fallbackIcon?: LucideIcon;
  fallbackLabel?: string;
}

/** Horizontal editorial card used by the blog and news listings. */
export function ArticleCard({
  href,
  title,
  excerpt,
  image,
  date,
  readingTime,
  views,
  likes,
  index = 0,
  ctaLabel,
  fallbackIcon: FallbackIcon = BookOpen,
  fallbackLabel
}: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: Math.min(index, 4) * 0.06 }}
      className="group"
    >
      <Link
        href={href}
        className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated md:flex-row"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-muted md:h-auto md:min-h-[240px] md:w-80 md:shrink-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/80 to-[oklch(0.3_0.06_262)] text-white/90">
              <FallbackIcon className="size-8" strokeWidth={1.5} />
              {fallbackLabel && <p className="text-sm font-medium">{fallbackLabel}</p>}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

          {typeof likes === "number" && (
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/85 px-3 py-1 text-sm font-semibold text-foreground shadow-soft backdrop-blur-md">
              <Heart className="size-3.5 fill-flag-red/80 text-flag-red" strokeWidth={1.5} />
              {likes}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
            {date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" strokeWidth={1.75} />
                {date}
              </span>
            )}
            {typeof readingTime === "number" && (
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="size-3.5" strokeWidth={1.75} />
                {readingTime} min read
              </span>
            )}
            {typeof views === "number" && (
              <span className="inline-flex items-center gap-1.5">
                <Eye className="size-3.5" strokeWidth={1.75} />
                {views.toLocaleString()} views
              </span>
            )}
          </div>

          <h3 className="mt-3 line-clamp-2 font-display text-[1.6rem] font-medium leading-snug tracking-[-0.015em] text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">
            {excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary">
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default ArticleCard;
