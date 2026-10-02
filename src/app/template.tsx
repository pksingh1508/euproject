"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/** Soft fade between routes (templates re-mount on every navigation). */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
