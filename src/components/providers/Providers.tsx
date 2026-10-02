"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import {
  MotionConfig,
  cancelFrame,
  frame,
  useReducedMotion
} from "framer-motion";
import { ReactLenis, type LenisRef } from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = React.useRef<LenisRef>(null);
  const reduceMotion = useReducedMotion();

  // Drive Lenis from Motion's frame loop so smooth scrolling and every
  // scroll-linked animation (parallax, progress bar) update in the same frame.
  React.useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">
        <ReactLenis
          root
          ref={lenisRef}
          options={{
            autoRaf: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            smoothWheel: !reduceMotion
          }}
        >
          {children}
        </ReactLenis>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default Providers;
