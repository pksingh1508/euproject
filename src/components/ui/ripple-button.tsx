"use client";

// A button with a soft ink ripple that respects reduced motion.
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type Ripple = { id: number; x: number; y: number; size: number };

export interface RippleButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  ripple?: boolean;
  rippleDurationMs?: number;
  rippleClassName?: string;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      variant,
      size,
      ripple = true,
      rippleDurationMs = 750,
      rippleClassName,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);
    const containerRef = React.useRef<HTMLButtonElement | null>(null);
    const idRef = React.useRef(0);

    React.useEffect(() => {
      if (!ripples.length) return;
      const t = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, rippleDurationMs);
      return () => clearTimeout(t);
    }, [ripples, rippleDurationMs]);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (ripple && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        idRef.current += 1;
        setRipples((prev) => [...prev, { id: idRef.current, x, y, size }]);
      }
      onClick?.(e);
    }

    return (
      <button
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node as HTMLButtonElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
        }}
        data-slot="button"
        onClick={handleClick}
        className={cn(
          buttonVariants({ variant, size }),
          "relative isolate overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
        <span
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          {ripples.map((r) => (
            <span
              key={r.id}
              className={cn(
                "absolute rounded-full bg-current/20 animate-ripple motion-reduce:hidden",
                rippleClassName
              )}
              style={{
                left: r.x,
                top: r.y,
                width: r.size,
                height: r.size
              }}
            />
          ))}
        </span>
      </button>
    );
  }
);
RippleButton.displayName = "RippleButton";
