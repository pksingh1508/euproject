"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

interface EyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "primary" | "light";
  className?: string;
}

/** Small uppercase label that sits above headings. */
export function Eyebrow({ children, align = "left", tone = "gold", className }: EyebrowProps) {
  return (
    <Reveal
      blur={false}
      distance={10}
      className={cn(
        "flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        align === "center" && "justify-center",
        tone === "gold" && "text-gold-ink",
        tone === "primary" && "text-primary",
        tone === "light" && "text-gold",
        className
      )}
    >
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      <span>{children}</span>
      {align === "center" && <span aria-hidden className="h-px w-8 bg-current opacity-60" />}
    </Reveal>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Phrase inside the title rendered in italic accent colour. */
  highlight?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "md" | "lg";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  as = "h2",
  size = "lg",
  className,
  titleClassName
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow align={align} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <TextReveal
        as={as}
        text={title}
        highlight={highlight}
        className={cn(
          "font-display font-medium leading-[1.08] tracking-[-0.02em] text-foreground",
          size === "lg"
            ? "text-[2rem] sm:text-4xl lg:text-[2.85rem]"
            : "text-[1.75rem] sm:text-3xl lg:text-[2.25rem]",
          titleClassName
        )}
      />
      {description && (
        <Reveal delay={0.15} className="mt-5">
          <div className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            {description}
          </div>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeading;
