"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Eyebrow } from "./SectionHeading";

interface PageHeaderProps {
  title: string;
  highlight?: string;
  eyebrow?: string;
  description?: React.ReactNode;
  /** Label shown in the breadcrumb trail (defaults to the title). */
  crumb?: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

/** Hero band used at the top of every inner page. */
export function PageHeader({
  title,
  highlight,
  eyebrow,
  description,
  crumb,
  className,
  titleClassName,
  children
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border/60",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-radial" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-30%] -z-10 h-[440px] w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/[0.12]"
      />
      <div
        aria-hidden
        className="absolute right-[8%] top-[20%] -z-10 h-40 w-40 rounded-full bg-gold/15 blur-[90px]"
      />

      <div className="page-container py-16 text-center sm:py-20 lg:py-24">
        <Reveal blur={false} distance={8}>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <ChevronRight aria-hidden className="size-3 opacity-60" />
            <span className="text-foreground/80">{crumb ?? title}</span>
          </nav>
        </Reveal>

        {eyebrow && (
          <Eyebrow align="center" className="mb-5">
            {eyebrow}
          </Eyebrow>
        )}

        <TextReveal
          as="h1"
          text={title}
          highlight={highlight}
          className={cn(
            "mx-auto max-w-4xl font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-[4rem]",
            titleClassName
          )}
        />

        {description && (
          <Reveal delay={0.2}>
            <div className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </div>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.3} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
