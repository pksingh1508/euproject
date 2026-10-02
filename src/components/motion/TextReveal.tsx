"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span
} as const;

interface TextRevealProps {
  text: string;
  as?: keyof typeof tags;
  className?: string;
  /** A phrase inside `text` rendered in italic accent colour. */
  highlight?: string;
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount (e.g. hero) instead of on scroll. */
  immediate?: boolean;
}

/**
 * Editorial headline reveal: each word rises out of a mask, one after another.
 * Screen readers get the plain sentence via aria-label.
 */
export function TextReveal({
  text,
  as = "h2",
  className,
  highlight,
  highlightClassName = "italic text-primary",
  delay = 0,
  stagger = 0.06,
  immediate = false
}: TextRevealProps) {
  const Tag = tags[as] as typeof motion.h2;
  const words = text.split(" ").filter(Boolean);

  // Mark which word indexes belong to the highlighted phrase.
  const highlighted = new Set<number>();
  if (highlight) {
    const target = highlight.split(" ").filter(Boolean);
    for (let i = 0; i <= words.length - target.length; i++) {
      if (target.every((w, j) => words[i + j] === w)) {
        target.forEach((_, j) => highlighted.add(i + j));
        break;
      }
    }
  }

  const trigger = immediate
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: VIEWPORT };

  return (
    <Tag
      aria-label={text}
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
          >
            <motion.span
              className={cn(
                "inline-block will-change-transform",
                highlighted.has(i) && highlightClassName
              )}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.9, ease: EASE_OUT }
                }
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}

export default TextReveal;
