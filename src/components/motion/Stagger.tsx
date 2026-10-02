"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_OUT, VIEWPORT, staggerContainer } from "@/lib/motion";

const tags = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  span: motion.span
} as const;

interface StaggerProps extends HTMLMotionProps<"div"> {
  as?: keyof typeof tags;
  stagger?: number;
  delay?: number;
  once?: boolean;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
}

/** Orchestrates its `StaggerItem` children so they reveal one after another. */
export function Stagger({
  as = "div",
  stagger = 0.08,
  delay = 0,
  once = true,
  immediate = false,
  children,
  ...rest
}: StaggerProps) {
  const Tag = tags[as] as typeof motion.div;
  const trigger = immediate
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { ...VIEWPORT, once } };

  return (
    <Tag
      initial="hidden"
      {...trigger}
      variants={staggerContainer(stagger, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  as?: keyof typeof tags;
  y?: number;
  blur?: boolean;
  duration?: number;
}

export function StaggerItem({
  as = "div",
  y = 20,
  blur = true,
  duration = 0.7,
  children,
  ...rest
}: StaggerItemProps) {
  const Tag = tags[as] as typeof motion.div;

  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y, ...(blur ? { filter: "blur(6px)" } : {}) },
        visible: {
          opacity: 1,
          y: 0,
          ...(blur ? { filter: "blur(0px)" } : {}),
          transition: { duration, ease: EASE_OUT },
          transitionEnd: blur ? { filter: "none" } : undefined
        }
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
