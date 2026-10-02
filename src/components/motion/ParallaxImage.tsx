"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Sizing + layout of the frame (height / aspect ratio). */
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Parallax travel in % of the image height. */
  strength?: number;
  /** Unveil the frame with an expanding clip-path when scrolled into view. */
  reveal?: boolean;
  radius?: string;
  children?: React.ReactNode;
}

/**
 * Image frame with a soft "unveil" on scroll, gentle parallax drift and a
 * slow zoom on hover.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  strength = 6,
  reveal = true,
  radius = "1.5rem",
  children
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`]
  );

  return (
    <motion.div
      ref={ref}
      className={cn("group/image relative isolate overflow-hidden bg-muted", className)}
      style={{ borderRadius: radius }}
      initial={
        reveal
          ? { clipPath: `inset(9% 9% 9% 9% round ${radius})`, opacity: 0.35 }
          : false
      }
      whileInView={
        reveal
          ? { clipPath: `inset(0% 0% 0% 0% round ${radius})`, opacity: 1 }
          : undefined
      }
      viewport={VIEWPORT}
      transition={{ duration: 1.3, ease: EASE_OUT }}
    >
      <motion.div
        className="absolute inset-[-8%]"
        style={{ y: reduce ? 0 : y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-premium group-hover/image:scale-[1.04]",
            imgClassName
          )}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5 dark:ring-white/5"
      />
      {children}
    </motion.div>
  );
}

export default ParallaxImage;
