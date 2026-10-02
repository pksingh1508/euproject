"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Search,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/motion/CountUp";
import { cn } from "@/lib/utils";
import { SPRING_SOFT } from "@/lib/motion";

/* -------------------------------------------------------------------------- */
/*  Stats row                                                                 */
/* -------------------------------------------------------------------------- */

export function ListingStats({ stats }: { stats: { label: string; value: number }[] }) {
  return (
    <div className="inline-flex flex-wrap items-stretch justify-center divide-x divide-border/80 rounded-2xl border border-border bg-card/70 shadow-soft backdrop-blur">
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-4 text-center sm:px-9">
          <CountUp
            value={stat.value}
            className="block font-display text-3xl font-medium tabular-nums text-foreground sm:text-4xl"
          />
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Search + refresh                                                          */
/* -------------------------------------------------------------------------- */

interface ListingToolbarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onRefresh: () => void;
  refreshing?: boolean;
}

export function ListingToolbar({
  value,
  onChange,
  placeholder,
  onRefresh,
  refreshing
}: ListingToolbarProps) {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row">
      <label className="relative flex-1">
        <span className="sr-only">{placeholder}</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full rounded-full border border-input bg-card pl-11 pr-4 text-[15px] text-foreground shadow-soft outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted-foreground/70 hover:border-foreground/20 focus-visible:border-primary/50 focus-visible:ring-4 focus-visible:ring-primary/10"
        />
      </label>
      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={onRefresh}
        disabled={refreshing}
      >
        <RefreshCw className={cn(refreshing && "animate-spin")} strokeWidth={1.75} />
        {refreshing ? "Refreshing..." : "Refresh"}
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pagination                                                                */
/* -------------------------------------------------------------------------- */

function getVisiblePages(currentPage: number, totalPages: number) {
  const delta = 2;
  const range: number[] = [];
  const rangeWithDots: (number | "...")[] = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) rangeWithDots.push(1, "...");
  else rangeWithDots.push(1);

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) rangeWithDots.push("...", totalPages);
  else if (totalPages > 1) rangeWithDots.push(totalPages);

  return rangeWithDots;
}

interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-14 flex flex-wrap items-center justify-center gap-2"
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
      >
        <ChevronLeft />
        Previous
      </Button>

      <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft">
        {getVisiblePages(page, pageCount).map((p, index) =>
          p === "..." ? (
            <span key={`dots-${index}`} className="px-2 text-sm text-muted-foreground">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
              className="relative inline-flex size-9 items-center justify-center rounded-full text-sm font-medium tabular-nums"
            >
              {p === page && (
                <motion.span
                  layoutId="pagination-pill"
                  transition={SPRING_SOFT}
                  className="absolute inset-0 rounded-full bg-primary shadow-soft"
                />
              )}
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  p === page
                    ? "text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {p}
              </span>
            </button>
          )
        )}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onChange(page + 1)}
        disabled={page >= pageCount}
      >
        Next
        <ChevronRight />
      </Button>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  States                                                                    */
/* -------------------------------------------------------------------------- */

export function ListSkeleton({ count = 3, compact = false }: { count?: number; compact?: boolean }) {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Loading">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft md:flex-row"
        >
          {compact ? (
            <div className="skeleton m-6 size-20 shrink-0 rounded-2xl md:m-8 md:mr-0" />
          ) : (
            <div className="skeleton h-48 md:h-auto md:w-80 md:shrink-0" />
          )}
          <div className="flex-1 space-y-4 p-6 md:p-8">
            <div className="skeleton h-3 w-40 rounded-full" />
            <div className="skeleton h-6 w-3/4 rounded-full" />
            <div className="skeleton h-3 w-full rounded-full" />
            <div className="skeleton h-3 w-5/6 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface ListingMessageProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  action?: React.ReactNode;
}

export function ListingMessage({ icon: Icon, title, description, action }: ListingMessageProps) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
      <span className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-soft">
        <Icon className="size-7" strokeWidth={1.5} />
      </span>
      <h3 className="font-display text-2xl font-medium text-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-muted-foreground">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
