"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline reading-progress indicator pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-primary/80 via-primary to-gold"
    />
  );
}

export default ScrollProgress;
