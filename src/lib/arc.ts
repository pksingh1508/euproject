/**
 * Geometry for the home hero's U-shaped carousel.
 *
 * Cards ride along the lower half of an ellipse. On tablets and desktops the
 * ellipse is centred on the hero's top edge, so both arms rise up and fade out
 * under the navbar (a "U" hanging from the top). On phones it becomes a
 * shallow smile under the copy whose arms leave through the screen sides.
 *
 * Positions are parametrised by arc length so cards stay evenly spaced all the
 * way round the curve, however stretched the ellipse is.
 */

/** Below this width the curve switches to the compact "smile" layout. */
export const ARC_COMPACT_BREAKPOINT = 640;
/**
 * Height of the smile in card heights, measured from the hero's bottom edge to
 * where its arms leave the screen. The hero reserves matching space under the
 * copy on phones.
 */
export const ARC_COMPACT_RISE = 2.25;

const SAMPLES = 360;

export interface ArcLayout {
  width: number;
  height: number;
  compact: boolean;
  cardW: number;
  cardH: number;
  /** Ellipse centre and semi-axes. */
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  /** Arc length between neighbouring cards. */
  spacing: number;
  /** Arc length from the bottom of the curve to where it leaves the hero. */
  visibleHalf: number;
  /** Cumulative arc length at SAMPLES + 1 evenly spaced angles in [0, π]. */
  lengths: Float64Array;
}

export interface ArcPose {
  x: number;
  y: number;
  /** Tangent angle in degrees, so cards lean along the curve. */
  rotate: number;
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/** Euclidean modulo: always in [0, m). */
export const mod = (n: number, m: number) => ((n % m) + m) % m;

/** Wraps `n` into [-m / 2, m / 2). */
export const wrapCentered = (n: number, m: number) => mod(n + m / 2, m) - m / 2;

/** Gap between the hero's bottom edge and the lowest card (`--arc-bottom` in CSS). */
export const arcBottomInset = (height: number, compact: boolean) =>
  compact ? 30 : clamp(height * 0.05, 20, 48);

export function createArcLayout({
  width,
  height,
  cardW,
  cardH,
  count
}: {
  width: number;
  height: number;
  cardW: number;
  cardH: number;
  count: number;
}): ArcLayout {
  const compact = width < ARC_COMPACT_BREAKPOINT;
  const apexY = height - arcBottomInset(height, compact) - cardH / 2;
  const cx = width / 2;

  let rx: number;
  let ry: number;
  let cy: number;
  if (compact) {
    // A smile under the copy: the arms cross the screen edges at `exitY`,
    // a fixed number of card heights above the bottom (see ARC_COMPACT_RISE).
    rx = width * 0.64;
    const exitY = height - cardH * ARC_COMPACT_RISE;
    const exitCos = Math.sqrt(1 - (width / 2 / rx) ** 2);
    ry = (apexY - exitY) / (1 - exitCos);
    cy = apexY - ry;
  } else {
    // Centred on the top edge so the arms disappear under the navbar.
    cy = 0;
    ry = apexY;
    // Slightly wider on narrow screens to leave room for the copy.
    const t = clamp((width - 1024) / 416, 0, 1);
    rx = Math.min(width * (0.5 - 0.05 * t), ry * 1.4);
  }

  const lengths = new Float64Array(SAMPLES + 1);
  const step = Math.PI / SAMPLES;
  for (let i = 1; i <= SAMPLES; i++) {
    const phi = (i - 0.5) * step;
    lengths[i] =
      lengths[i - 1] + Math.hypot(rx * Math.cos(phi), ry * Math.sin(phi)) * step;
  }

  // Arc length from the bottom of the curve to where it leaves the hero.
  let exit = SAMPLES;
  for (let i = 0; i <= SAMPLES; i++) {
    const phi = i * step;
    if (cy + ry * Math.cos(phi) < 0 || rx * Math.sin(phi) > width / 2) {
      exit = i;
      break;
    }
  }
  const visibleHalf = lengths[exit];

  // Keep cards from touching, but spread them far enough that the point where
  // a card wraps from one end of the track to the other is always off-screen.
  const spacing = Math.min(
    Math.max(cardW * 1.06, (2 * visibleHalf + cardW * 1.5) / count),
    (2 * lengths[SAMPLES]) / count
  );

  return { width, height, compact, cardW, cardH, cx, cy, rx, ry, spacing, visibleHalf, lengths };
}

/** Pose of a point `distance` px along the curve from its lowest point (negative = left arm). */
export function poseAt(layout: ArcLayout, distance: number): ArcPose {
  const { lengths, cx, cy, rx, ry } = layout;
  const s = Math.min(Math.abs(distance), lengths[SAMPLES]);

  let lo = 0;
  let hi = SAMPLES;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (lengths[mid] < s) lo = mid;
    else hi = mid;
  }
  const span = lengths[hi] - lengths[lo];
  const t = span > 0 ? (s - lengths[lo]) / span : 0;
  const phi = ((lo + t) / SAMPLES) * Math.PI * Math.sign(distance);

  return {
    x: cx + rx * Math.sin(phi),
    y: cy + ry * Math.cos(phi),
    rotate: (Math.atan2(-ry * Math.sin(phi), rx * Math.cos(phi)) * 180) / Math.PI
  };
}
