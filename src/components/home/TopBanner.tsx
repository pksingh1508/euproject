"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/motion/TextReveal";
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion";

const SLIDE_DURATION_MS = 6500;

const bannerData = [
  {
    image: "/assets/banner/home-bg.jpg",
    title: "Best Recruitment Agency",
    subtitle: "For you better future",
    description:
      "We provides always our best services for our clients and always try to achieve our client's trust and satisfaction."
  },
  {
    image: "/assets/banner/home-bg1.jpg",
    title: "EU Prime Serwis",
    subtitle: "Looking to start your career in Poland",
    description:
      "Connect with our Work Abroad Specialists to find your dream job in Poland."
  },
  {
    image: "/assets/banner/home-bg2.jpg",
    title: "Feed Your Knowledge",
    subtitle: "Unlock Endless Career Possibilities in Europe",
    description: "Connect with our Work Abroad Experts today."
  }
];

const pad = (n: number) => String(n).padStart(2, "0");

export function TopBanner() {
  const total = bannerData.length;
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const goTo = React.useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  const active = bannerData[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate h-[clamp(560px,calc(100svh-7.25rem),820px)] w-full overflow-hidden bg-[oklch(0.2_0.035_262)] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides: all mounted so they preload; cross-fade + slow Ken Burns zoom */}
      {bannerData.map((banner, i) => {
        const isActive = i === index;
        return (
          <motion.div
            key={banner.image}
            aria-hidden={!isActive}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1.4, ease: EASE_IN_OUT }}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={isActive ? { scale: [1.12, 1] } : { scale: 1.12 }}
              transition={
                isActive
                  ? { duration: 9, ease: "linear" }
                  : { duration: 0, delay: 1.4 }
              }
            >
              <Image
                src={banner.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Legibility overlays (hero stays dark in both themes) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.035_262/0.92)] via-[oklch(0.18_0.035_262/0.68)] to-[oklch(0.18_0.035_262/0.2)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.03_262/0.75)] via-transparent to-[oklch(0.16_0.03_262/0.25)]"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center pb-16">
        <div className="page-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="max-w-3xl"
              exit={{
                opacity: 0,
                y: -16,
                filter: "blur(6px)",
                transition: { duration: 0.45, ease: EASE_IN_OUT }
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
                className="mb-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold sm:text-xs"
              >
                <span aria-hidden className="h-px w-10 bg-current opacity-70" />
                {active.subtitle}
              </motion.p>

              <TextReveal
                as="h1"
                immediate
                text={active.title}
                delay={0.2}
                stagger={0.08}
                className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.5rem]"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.55 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                {active.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.7 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-white/95 px-7 text-[15px] font-medium text-[oklch(0.235_0.045_262)] shadow-elevated transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white"
                >
                  Know More
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="page-container flex items-center justify-between gap-6 pb-8 sm:pb-10">
          <div className="flex items-center gap-5">
            <span className="font-display text-sm tabular-nums text-white/85">
              {pad(index + 1)}
              <span className="text-white/40"> / {pad(total)}</span>
            </span>
            <div className="flex items-center gap-2">
              {bannerData.map((_, i) => (
                <button
                  key={`indicator-${i}`}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className="relative h-6 w-10 sm:w-14"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25">
                    {i === index && (
                      <span
                        key={`progress-${index}`}
                        className="absolute inset-0 origin-left rounded-full bg-white"
                        style={{
                          animation: `hero-progress ${SLIDE_DURATION_MS}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running"
                        }}
                        onAnimationEnd={() => goTo(index + 1)}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/15"
            >
              <ArrowLeft className="size-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-white/15"
            >
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
