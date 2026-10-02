"use client";

import * as React from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform
} from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

interface CountUpProps {
  value: number;
  duration?: number;
  className?: string;
}

/** Counts from 0 to `value` once it scrolls into view. */
export function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v).toLocaleString());

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration, ease: EASE_OUT });
    return () => controls.stop();
  }, [inView, value, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

export default CountUp;
