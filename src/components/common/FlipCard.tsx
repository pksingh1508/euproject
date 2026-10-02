"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, RotateCw } from "lucide-react";

interface FlipCardProps {
  flagImageUrl: string;
  countryName: string;
  title: string;
  btnName: string;
  btnUrl: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  flagImageUrl,
  countryName,
  title,
  btnName,
  btnUrl
}) => {
  const [flipped, setFlipped] = React.useState(false);
  const pointerType = React.useRef("mouse");

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(btnUrl);
  };

  return (
    <div
      className="h-72 perspective-[1200px]"
      // Hover flips on desktop, tap flips on touch, focus flips for keyboard.
      onPointerDown={(e) => (pointerType.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
      onClick={() => pointerType.current !== "mouse" && setFlipped((f) => !f)}
      onFocusCapture={() => setFlipped(true)}
      onBlurCapture={() => setFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full transform-3d"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.9 }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft backface-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/[0.06] to-transparent"
          />
          <div className="relative h-16 w-24 overflow-hidden rounded-lg shadow-elevated ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src={flagImageUrl}
              alt={`${countryName} flag`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <h2 className="relative text-center font-display text-2xl font-medium tracking-[-0.015em] text-foreground">
            {countryName}
          </h2>
          <span className="relative inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <RotateCw className="size-3.5" strokeWidth={1.75} />
            Learn more
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex rotate-y-180 flex-col items-center justify-center overflow-hidden rounded-3xl bg-navy p-8 text-center text-navy-foreground shadow-elevated backface-hidden">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/25 blur-3xl"
          />
          <h2 className="relative font-display text-2xl font-medium tracking-[-0.015em]">
            {countryName}
          </h2>
          <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-navy-muted">
            {title}
          </p>
          <button
            type="button"
            onClick={handleButtonClick}
            className="group relative mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-navy-foreground px-6 text-sm font-medium text-navy shadow-elevated transition-transform duration-300 ease-premium hover:-translate-y-0.5"
          >
            {btnName}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
