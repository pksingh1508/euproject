import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language for the whole site.
 * Long, soft ease-outs and small distances keep every animation calm and
 * premium rather than bouncy.
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  slower: 1.2
} as const;

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.8
};

/** Reveal starts when an element's top passes ~10% above the viewport bottom. */
export const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT },
    // Drop the filter afterwards so it never creates a containing block
    // for fixed/sticky descendants.
    transitionEnd: { filter: "none" }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE_OUT } }
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
});
