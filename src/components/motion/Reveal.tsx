"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets = (distance: number): Record<Direction, { x?: number; y?: number }> => ({
  up: { y: distance },
  down: { y: -distance },
  left: { x: distance },
  right: { x: -distance },
  none: {}
});

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  aside: motion.aside,
  li: motion.li,
  p: motion.p,
  span: motion.span
} as const;

export interface RevealProps extends HTMLMotionProps<"div"> {
  as?: keyof typeof tags;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  /** Soft focus-pull while fading in. Keep for text, disable for big media. */
  blur?: boolean;
  once?: boolean;
}

/** Fades + lifts its children into view when scrolled to. */
export function Reveal({
  as = "div",
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 24,
  blur = true,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const Tag = tags[as] as typeof motion.div;
  const offset = offsets(distance)[direction];

  return (
    <Tag
      initial={{ opacity: 0, ...offset, ...(blur ? { filter: "blur(6px)" } : {}) }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
        transitionEnd: blur ? { filter: "none" } : undefined
      }}
      viewport={{ ...VIEWPORT, once }}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
