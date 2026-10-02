import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Brand typography
 *
 * - Plus Jakarta Sans: body copy, navigation, buttons and UI. Calm, modern and
 *   highly legible for the long-form consultancy content.
 * - Fraunces: editorial display serif for headings. Gives the brand the
 *   trustworthy, premium feel of a European advisory firm.
 *
 * Both include `latin-ext` so Polish characters (ą, ę, ł, ż …) render in the
 * brand fonts instead of falling back to system fonts.
 */
export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap"
});

export const fontDisplay = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap"
});

export const fontVariables = `${fontSans.variable} ${fontDisplay.variable}`;
