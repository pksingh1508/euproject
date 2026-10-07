"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue
} from "framer-motion";
import type { HeroSlide } from "@/constants/heroSlides";
import {
  clamp,
  createArcLayout,
  mod,
  poseAt,
  wrapCentered,
  type ArcLayout
} from "@/lib/arc";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

/* -------------------------------------------------------------------------- */
/*  Driver                                                                    */
/* -------------------------------------------------------------------------- */

/** How long a card rests at the bottom of the curve before the next glides in. */
const REST_MS = 4600;
const REST_AFTER_INTRO_MS = 3800;
const REST_AFTER_NAV_MS = 6500;
const REST_AFTER_SCROLL_MS = 2500;
const REST_AFTER_PAUSE_MS = 1500;
/** Duration of the glide to the next card (longer jumps take a little longer). */
const GLIDE_MS = 1300;
const glideDuration = (slides: number) => Math.min(800 + 260 * Math.abs(slides), 2200);
/** Extra slides per second for every 1000 px/s the page is scrolled. */
const SCROLL_SPIN = 2.4;
const MAX_SCROLL_SPIN = 6;
/** How many slides the cards sweep round on first load. */
const INTRO_SWEEP = 2.5;
const INTRO_MS = 1700;

export type PauseReason = "user" | "hover" | "card" | "focus";

export interface ArcCarousel {
  /** Continuous position in slides; the card at `round(phase)` sits at the bottom of the curve. */
  phase: MotionValue<number>;
  active: number;
  count: number;
  goTo: (index: number) => void;
  step: (direction: 1 | -1) => void;
  setPaused: (reason: PauseReason, paused: boolean) => void;
  /** Starts the carousel once the cards are measured, with a short intro sweep. */
  start: () => void;
}

interface Glide {
  from: number;
  to: number;
  /** Starting slope (slides per unit of progress) so retargeting keeps momentum. */
  slope: number;
  start: number;
  duration: number;
}

/** Cubic Hermite from `from` to `to`, starting with `slope` and landing at rest. */
function glideAt({ from, to, slope }: Glide, t: number) {
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    value:
      (2 * t3 - 3 * t2 + 1) * from + (t3 - 2 * t2 + t) * slope + (3 * t2 - 2 * t3) * to,
    slope: (6 * t2 - 6 * t) * from + (3 * t2 - 4 * t + 1) * slope + (6 * t - 6 * t2) * to
  };
}

/**
 * Drives the curve: a card rests at the bottom, then the next one glides in
 * (eased in and out). Scrolling the page takes over and spins the curve with
 * the scroll speed and direction; once scrolling stops it eases onto the
 * nearest card and the slideshow carries on.
 */
export function useArcCarousel({
  count,
  reduceMotion,
  containerRef
}: {
  count: number;
  reduceMotion: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
}): ArcCarousel {
  const phase = useMotionValue(0);
  const [active, setActive] = React.useState(0);
  const activeRef = React.useRef(0);
  const sim = React.useRef({
    ready: false,
    /** While the intro sweep plays the copy stays on the first slide. */
    intro: true,
    time: 0,
    /** Slides per second, used for coasting and to carry momentum into glides. */
    velocity: 0,
    glide: null as Glide | null,
    restUntil: 0,
    reduceMotion,
    pauses: new Set<PauseReason>()
  });
  sim.current.reduceMotion = reduceMotion;

  const inView = useInView(containerRef);
  const inViewRef = React.useRef(inView);
  inViewRef.current = inView;

  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(useVelocity(scrollY), {
    damping: 50,
    stiffness: 400
  });

  useMotionValueEvent(phase, "change", (p) => {
    if (sim.current.intro) return;
    const next = mod(Math.round(p), count);
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActive(next);
    }
  });

  const startGlide = React.useCallback(
    (to: number, duration: number, slope?: number) => {
      const s = sim.current;
      const from = phase.get();
      const distance = to - from;
      // Carry the current momentum, capped so the glide never overshoots.
      const carried = clamp(
        slope ?? s.velocity * (duration / 1000),
        -2.5 * Math.abs(distance),
        2.5 * Math.abs(distance)
      );
      s.glide = { from, to, slope: carried, start: s.time, duration };
    },
    [phase]
  );

  useAnimationFrame((time, delta) => {
    const s = sim.current;
    s.time = time;
    if (!s.ready || !inViewRef.current) return;

    const dt = Math.min(delta, 50) / 1000;
    let p = phase.get();

    const spin = s.reduceMotion
      ? 0
      : clamp(
          (scrollVelocity.get() / 1000) * SCROLL_SPIN,
          -MAX_SCROLL_SPIN,
          MAX_SCROLL_SPIN
        );
    const scrolling = Math.abs(spin) > 0.02;

    if (scrolling) {
      // The scroll takes over from any glide, keeping its momentum.
      if (s.glide) {
        const g = s.glide;
        const t = clamp((time - g.start) / g.duration, 0, 1);
        s.velocity = glideAt(g, t).slope / (g.duration / 1000);
        s.glide = null;
        s.intro = false;
      }
      s.restUntil = Math.max(s.restUntil, time + REST_AFTER_SCROLL_MS);
    }

    if (s.glide) {
      const g = s.glide;
      const t = clamp((time - g.start) / g.duration, 0, 1);
      const point = glideAt(g, t);
      p = point.value;
      s.velocity = point.slope / (g.duration / 1000);
      if (t >= 1) {
        p = g.to;
        s.glide = null;
        s.velocity = 0;
        s.restUntil = time + (s.intro ? REST_AFTER_INTRO_MS : REST_MS);
        s.intro = false;
      }
    } else {
      // Coast with the scroll, otherwise ease onto the nearest card.
      const rest = Math.round(p);
      const target = scrolling ? 0 : (rest - p) * 1.6;
      s.velocity += (target - s.velocity) * (1 - Math.exp(-(scrolling ? 3 : 6.4) * dt));
      p += (s.velocity + spin) * dt;

      if (!scrolling && Math.abs(rest - p) < 1e-4 && Math.abs(s.velocity) < 1e-3) {
        p = rest;
        s.velocity = 0;
        const autoplay = !s.reduceMotion && s.pauses.size === 0;
        if (autoplay && time >= s.restUntil) startGlide(rest + 1, GLIDE_MS, 0);
      }
    }

    if (p !== phase.get()) phase.set(p);
  });

  const navigate = React.useCallback(
    (to: number) => {
      const s = sim.current;
      s.intro = false;
      s.restUntil = s.time + REST_AFTER_NAV_MS;
      if (s.reduceMotion) {
        s.glide = null;
        s.velocity = 0;
        phase.set(to);
      } else {
        startGlide(to, glideDuration(to - phase.get()));
      }
    },
    [phase, startGlide]
  );

  // Further clicks while a glide is running stack onto its target.
  const target = React.useCallback(
    () => sim.current.glide?.to ?? Math.round(phase.get()),
    [phase]
  );

  const goTo = React.useCallback(
    (index: number) => {
      const from = target();
      navigate(from + wrapCentered(index - mod(from, count), count));
    },
    [count, navigate, target]
  );

  const step = React.useCallback(
    (direction: 1 | -1) => navigate(target() + direction),
    [navigate, target]
  );

  const setPaused = React.useCallback((reason: PauseReason, paused: boolean) => {
    const s = sim.current;
    if (paused) {
      s.pauses.add(reason);
    } else if (s.pauses.delete(reason) && s.pauses.size === 0) {
      // Don't move the instant the pointer leaves.
      s.restUntil = Math.max(s.restUntil, s.time + REST_AFTER_PAUSE_MS);
    }
  }, []);

  const start = React.useCallback(() => {
    const s = sim.current;
    if (s.ready) return;
    s.ready = true;
    if (s.reduceMotion) {
      s.intro = false;
      return;
    }
    // Sweep in from the right arm, fast at first and settling softly.
    phase.set(-INTRO_SWEEP);
    startGlide(0, INTRO_MS, INTRO_SWEEP * 1.5);
  }, [phase, startGlide]);

  return { phase, active, count, goTo, step, setPaused, start };
}

/* -------------------------------------------------------------------------- */
/*  Cards                                                                     */
/* -------------------------------------------------------------------------- */

interface CardPose {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
  /** 1 while the card sits at the bottom of the curve, 0 a slide away. */
  focus: number;
}

const HIDDEN_POSE: CardPose = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 0.92,
  opacity: 0,
  zIndex: 0,
  focus: 0
};

function cardPose(layout: ArcLayout | null, offset: number, count: number): CardPose {
  if (!layout) return HIDDEN_POSE;
  const { spacing, visibleHalf, cardW, cardH } = layout;
  const distance = offset * spacing;
  const { x, y, rotate } = poseAt(layout, distance);
  const near = clamp(1 - Math.abs(offset), 0, 1);
  const focus = near * near * (3 - 2 * near);
  const depth = clamp(Math.abs(distance) / visibleHalf, 0, 1);

  return {
    x: x - cardW / 2,
    y: y - cardH / 2,
    rotate,
    // Cards shrink slightly as they climb the arms; the focused one grows.
    scale: (1 - 0.14 * depth) * (1 + 0.08 * focus),
    // Fade out at the very ends of the track, where cards wrap round.
    opacity: clamp(((count / 2) * spacing - Math.abs(distance)) / (spacing * 0.5), 0, 1),
    zIndex: Math.round(100 - Math.abs(offset) * 10),
    focus
  };
}

interface ArcCardProps {
  slide: HeroSlide;
  index: number;
  count: number;
  phase: MotionValue<number>;
  layout: MotionValue<ArcLayout | null>;
  preload: boolean;
  onSelect: (index: number) => void;
  onHoverChange: (hovered: boolean) => void;
}

function ArcCard({
  slide,
  index,
  count,
  phase,
  layout,
  preload,
  onSelect,
  onHoverChange
}: ArcCardProps) {
  const pose = useTransform(() =>
    cardPose(layout.get(), wrapCentered(index - phase.get(), count), count)
  );
  const x = useTransform(pose, (c) => c.x);
  const y = useTransform(pose, (c) => c.y);
  const rotate = useTransform(pose, (c) => c.rotate);
  const scale = useTransform(pose, (c) => c.scale);
  const opacity = useTransform(pose, (c) => c.opacity);
  const zIndex = useTransform(pose, (c) => c.zIndex);
  const ring = useTransform(pose, (c) => c.focus);
  const veil = useTransform(pose, (c) => (1 - c.focus) * 0.1);

  return (
    <motion.button
      type="button"
      tabIndex={-1}
      data-arc-card=""
      onClick={() => onSelect(index)}
      onPointerEnter={(e) => e.pointerType === "mouse" && onHoverChange(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && onHoverChange(false)}
      style={{ x, y, rotate, scale, opacity, zIndex }}
      className="group/card absolute left-0 top-0 h-[var(--card-h)] w-[var(--card-w)] overflow-hidden rounded-2xl bg-muted shadow-floating ring-1 ring-black/5 will-change-transform dark:ring-white/10 sm:rounded-[1.35rem]"
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes="(min-width: 640px) 20rem, 9.5rem"
        preload={preload}
        loading={preload ? undefined : "eager"}
        className="object-cover transition-transform duration-700 ease-premium group-hover/card:scale-[1.06]"
      />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute inset-x-3 bottom-2.5 truncate text-left text-[11px] font-medium tracking-wide text-white sm:inset-x-4 sm:bottom-3 sm:text-xs">
        {slide.eyebrow}
      </span>
      <motion.span style={{ opacity: veil }} className="absolute inset-0 bg-background" />
      <motion.span
        style={{ opacity: ring }}
        className="absolute inset-0 rounded-[inherit] ring-2 ring-inset ring-gold"
      />
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Track                                                                     */
/* -------------------------------------------------------------------------- */

interface HeroArcProps {
  slides: HeroSlide[];
  carousel: ArcCarousel;
  onSelect: (index: number) => void;
  className?: string;
}

/**
 * The cards themselves. Sizes come from the `--card-w` / `--card-h` CSS
 * variables, so the server render and the measured layout always agree.
 */
export function HeroArc({ slides, carousel, onSelect, className }: HeroArcProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const layout = useMotionValue<ArcLayout | null>(null);
  const [ready, setReady] = React.useState(false);
  const { phase, start, setPaused } = carousel;
  const onHoverChange = React.useCallback(
    (hovered: boolean) => setPaused("card", hovered),
    [setPaused]
  );
  const count = slides.length;

  useIsomorphicLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-arc-card]");
      if (!card || !track.clientWidth || !card.offsetWidth) return;
      layout.set(
        createArcLayout({
          width: track.clientWidth,
          height: track.clientHeight,
          cardW: card.offsetWidth,
          cardH: card.offsetHeight,
          count
        })
      );
      setReady(true);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [count, layout]);

  React.useEffect(() => {
    if (ready) start();
  }, [ready, start]);

  return (
    <motion.div
      ref={trackRef}
      aria-hidden
      initial={false}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 1, ease: EASE_OUT }}
      className={cn("absolute inset-0", className)}
    >
      {slides.map((slide, i) => (
        <ArcCard
          key={slide.image}
          slide={slide}
          index={i}
          count={count}
          phase={phase}
          layout={layout}
          preload={i === 0}
          onSelect={onSelect}
          onHoverChange={onHoverChange}
        />
      ))}
    </motion.div>
  );
}

export default HeroArc;
