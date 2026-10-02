"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";

/** Floating button that glides back to the top using Lenis. */
export function BackToTop() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (value) => setVisible(value > 720));

  const scrollTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="fixed bottom-6 right-6 z-50 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/85 text-foreground/80 shadow-elevated backdrop-blur-md transition-colors hover:text-primary"
        >
          <ArrowUp className="size-[18px]" strokeWidth={1.75} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
