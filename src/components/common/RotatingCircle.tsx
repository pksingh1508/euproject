"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/**
 * Section divider: a hairline that draws outward from the centre, anchored by
 * the brand's slowly turning white-and-red (Polish flag) emblem.
 */
const RotatingCircle = () => {
  return (
    <div aria-hidden className="page-container">
      <div className="relative flex items-center justify-center py-2">
        <motion.span
          className="hairline absolute inset-x-0 top-1/2 -translate-y-1/2"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 1.6, ease: EASE_OUT }}
        />
        <motion.span
          className="relative flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
        >
          <span className="flex size-6 animate-spin-slow flex-col overflow-hidden rounded-full ring-1 ring-border motion-reduce:animate-none">
            <span className="h-1/2 w-full bg-card dark:bg-[oklch(0.92_0.006_85)]" />
            <span className="h-1/2 w-full bg-flag-red" />
          </span>
        </motion.span>
      </div>
    </div>
  );
};

export default RotatingCircle;
