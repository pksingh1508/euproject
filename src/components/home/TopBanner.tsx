"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { HeroArc, useArcCarousel } from "@/components/home/HeroArc";
import { TextReveal } from "@/components/motion/TextReveal";
import { buttonVariants } from "@/components/ui/button";
import { HERO_SLIDES } from "@/constants/heroSlides";
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

const iconButton =
  "inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground/80 shadow-soft backdrop-blur transition-colors duration-300 hover:border-primary/35 hover:text-foreground";

interface ControlsProps {
  paused: boolean;
  canPause: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
  children?: React.ReactNode;
  className?: string;
}

function Controls({
  paused,
  canPause,
  onPrev,
  onNext,
  onTogglePause,
  children,
  className
}: ControlsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button type="button" onClick={onPrev} aria-label="Previous slide" className={iconButton}>
        <ArrowLeft className="size-4" strokeWidth={1.75} />
      </button>
      {children}
      <button type="button" onClick={onNext} aria-label="Next slide" className={iconButton}>
        <ArrowRight className="size-4" strokeWidth={1.75} />
      </button>
      {canPause && (
        <button
          type="button"
          onClick={onTogglePause}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className={iconButton}
        >
          {paused ? (
            <Play className="size-4" strokeWidth={1.75} />
          ) : (
            <Pause className="size-4" strokeWidth={1.75} />
          )}
        </button>
      )}
    </div>
  );
}

/**
 * Home hero: the copy sits in the middle of the page while photo cards turn
 * along a U-shaped curve that hangs from under the navbar. Whichever card
 * reaches the bottom of the curve drives the copy, and scrolling the page
 * spins the curve faster in the scroll direction.
 */
export function TopBanner() {
  const router = useRouter();
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const total = HERO_SLIDES.length;
  const carousel = useArcCarousel({ count: total, reduceMotion, containerRef: sectionRef });
  const { active, step, goTo, setPaused } = carousel;
  const [userPaused, setUserPaused] = React.useState(false);
  const [keyboardInside, setKeyboardInside] = React.useState(false);

  React.useEffect(() => setPaused("user", userPaused), [setPaused, userPaused]);
  React.useEffect(() => setPaused("focus", keyboardInside), [setPaused, keyboardInside]);

  // A slide change swaps the buttons out from under keyboard focus; remember
  // which one was focused so the same button on the next slide can take it.
  const restoreCta = React.useRef<number | null>(null);
  React.useEffect(() => {
    const focused = document.activeElement as HTMLElement | null;
    const cta = focused?.closest<HTMLElement>("[data-hero-cta]");
    restoreCta.current =
      cta && focused?.matches(":focus-visible") ? Number(cta.dataset.heroCta) : null;
  }, [active]);
  const ctaRef = (index: number) => (el: HTMLAnchorElement | null) => {
    // Skip the outgoing button, which keeps focus until it unmounts.
    if (!el || restoreCta.current !== index || el === document.activeElement) return;
    restoreCta.current = null;
    if (!document.activeElement || document.activeElement === document.body) el.focus();
  };

  const slide = HERO_SLIDES[active];
  // Announce slide changes only while the slideshow isn't turning on its own.
  const rotating = !userPaused && !keyboardInside && !reduceMotion;

  // Clicking the featured card opens its page; any other card rotates to the bottom.
  const handleSelect = (index: number) => {
    if (index === active) router.push(HERO_SLIDES[index].cta.href);
    else goTo(index);
  };

  const controls: ControlsProps = {
    paused: userPaused,
    canPause: !reduceMotion,
    onPrev: () => step(-1),
    onNext: () => step(1),
    onTogglePause: () => setUserPaused((p) => !p)
  };

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Our services"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          step(e.key === "ArrowRight" ? 1 : -1);
        }
      }}
      // Keyboard focus inside the hero stops the rotation (mouse clicks don't).
      onFocusCapture={(e) => {
        if ((e.target as HTMLElement).matches(":focus-visible")) setKeyboardInside(true);
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardInside(false);
      }}
      className={cn(
        // Phones: the copy flows and the curve sits underneath it.
        // Tablets and up: a fixed-height stage with the copy inside the U.
        "relative isolate w-full overflow-hidden bg-background sm:h-[var(--hero-h)]",
        // Shared by the CSS layout below and the measured curve in <HeroArc>.
        "[--hero-h:clamp(500px,calc(100svh-7.25rem),920px)]",
        "[--card-w:clamp(8.5rem,40vw,13rem)] sm:[--card-w:clamp(8.5rem,min(calc(7rem+11vw),calc(var(--hero-h)*0.36)),20rem)]",
        "[--card-h:calc(var(--card-w)*0.75)] [--arc-bottom:30px] sm:[--arc-bottom:clamp(20px,calc(var(--hero-h)*0.05),48px)]"
      )}
    >
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-radial opacity-80" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[14%] -z-10 h-[420px] w-[min(860px,90%)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/[0.12]"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-1/2 -z-10 h-72 w-[min(640px,80%)] -translate-x-1/2 rounded-full bg-gold/15 blur-[110px]"
      />

      {/* Photo cards on the curve; they fade out towards the navbar (and the sides on phones). */}
      <HeroArc
        slides={HERO_SLIDES}
        carousel={carousel}
        onSelect={handleSelect}
        className={cn(
          "[mask-composite:intersect]",
          "[mask-image:linear-gradient(to_bottom,transparent_calc(100%-var(--card-h)*2.75),#000_calc(100%-var(--card-h)*2.1)),linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]",
          "sm:[mask-image:linear-gradient(to_bottom,transparent,#000_26%)]"
        )}
      />

      {/* Copy: centred inside the U, or above the curve on phones */}
      <div className="pointer-events-none relative z-10 flex justify-center px-5 pb-[calc(var(--card-h)*2.05+var(--arc-bottom))] pt-8 sm:absolute sm:inset-x-0 sm:top-0 sm:bottom-[calc(var(--card-h)*1.1+var(--arc-bottom)+1.5rem)] sm:items-center sm:px-8 sm:pb-0 sm:pt-4">
        <div
          className="pointer-events-auto w-full max-w-[23rem] text-center sm:max-w-[30rem] lg:max-w-[42rem]"
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused("hover", true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setPaused("hover", false)}
        >
          <h1 className="sr-only">
            EU Prime Serwis — EU immigration, visa and recruitment consultancy in Warsaw
          </h1>

          <div aria-live={rotating ? "off" : "polite"}>
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                // Safety net: never stay paused for focus that has been lost.
                if (restoreCta.current === null && !sectionRef.current?.contains(document.activeElement)) {
                  setKeyboardInside(false);
                }
              }}
            >
              <motion.div
                key={active}
                role="group"
                aria-roledescription="slide"
                aria-label={`${active + 1} of ${total}`}
                // Fixed height on phones so slide changes never shift the page.
                className="flex min-h-[23.5rem] flex-col justify-center sm:block sm:min-h-0"
                exit={{
                  opacity: 0,
                  y: -14,
                  filter: "blur(6px)",
                  transition: { duration: 0.4, ease: EASE_IN_OUT }
                }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
                  className="mb-5 flex items-center justify-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-ink sm:text-xs"
                >
                  <span aria-hidden className="h-px w-5 bg-current opacity-60 sm:w-8" />
                  {slide.eyebrow}
                  <span aria-hidden className="h-px w-5 bg-current opacity-60 sm:w-8" />
                </motion.p>

                <TextReveal
                  as="h2"
                  immediate
                  text={slide.title}
                  highlight={slide.highlight}
                  delay={0.1}
                  stagger={0.06}
                  className="mx-auto max-w-[17ch] font-display text-[clamp(2.1rem,min(1.2rem+3.4vw,7.4svh),4.25rem)] font-medium leading-[1.04] tracking-[-0.03em] text-foreground"
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
                  className="mx-auto mt-5 max-w-[34rem] text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:text-[17px]"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.45 }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-3"
                >
                  <Link
                    ref={ctaRef(0)}
                    data-hero-cta="0"
                    href={slide.cta.href}
                    className={cn(buttonVariants({ size: "lg" }), "group w-full sm:w-auto")}
                  >
                    {slide.cta.label}
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    ref={ctaRef(1)}
                    data-hero-cta="1"
                    href="/book"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
                  >
                    Book a consultation
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Controls {...controls} className="mt-7 justify-center sm:hidden">
            <span className="min-w-16 font-display text-sm tabular-nums text-foreground/85">
              {pad(active + 1)}
              <span className="text-muted-foreground"> / {pad(total)}</span>
            </span>
          </Controls>
        </div>
      </div>

      {/* Counter + controls in the corners outside the U */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden sm:block">
        <div className="page-container flex items-center justify-between gap-6 pb-[var(--arc-bottom)]">
          <div className="pointer-events-auto flex items-center gap-4">
            <span className="font-display text-sm tabular-nums text-foreground/85">
              {pad(active + 1)}
              <span className="text-muted-foreground"> / {pad(total)}</span>
            </span>
            <div className="hidden items-center lg:flex">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === active}
                  className="group/tick relative h-8 w-5"
                >
                  <span
                    className={cn(
                      "absolute inset-x-1 top-1/2 h-[2px] -translate-y-1/2 rounded-full transition-colors duration-500",
                      i === active
                        ? "bg-primary"
                        : "bg-foreground/15 group-hover/tick:bg-foreground/35"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <Controls {...controls} className="pointer-events-auto" />
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
