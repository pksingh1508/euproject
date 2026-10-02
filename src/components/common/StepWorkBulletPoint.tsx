"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface StepWorkBulletPointProps {
  image: string;
  imageAlt?: string;
  heading: string;
  eyebrow?: string;
  paragraph?: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  bullet5: string;
  bullet6: string;
  bullet7: string;
  isReversed?: boolean;
}

function BulletList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <Stagger as="ul" className="grid gap-2" stagger={0.07}>
      {items.map((item) => (
        <StaggerItem
          as="li"
          key={item}
          blur={false}
          y={12}
          className="flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-border hover:bg-card"
        >
          <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="size-3.5" strokeWidth={2.5} />
          </span>
          <p className="text-[15.5px] leading-relaxed text-foreground/80">{item}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function StepWorkBulletPoint({
  image,
  imageAlt = "Step illustration",
  heading,
  eyebrow,
  paragraph,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
  bullet6,
  bullet7,
  isReversed = false
}: StepWorkBulletPointProps) {
  // The first three bullets describe the candidate pool, the rest the service.
  const primary = [bullet1, bullet2, bullet3].filter(Boolean);
  const secondary = [bullet4, bullet5, bullet6, bullet7].filter(Boolean);

  return (
    <section className="relative overflow-x-clip py-16 lg:py-24">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div
            className={cn(
              "relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none",
              isReversed ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[1.75rem] border border-gold/50 sm:translate-x-5 sm:translate-y-5"
            />
            <ParallaxImage
              src={image}
              alt={imageAlt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </div>

          {/* Text */}
          <div
            className={cn(
              "lg:col-span-7",
              isReversed ? "lg:order-1" : "lg:order-2"
            )}
          >
            <SectionHeading
              eyebrow={eyebrow}
              title={heading}
              description={paragraph}
            />
            <div className="mt-8 space-y-4">
              <BulletList items={primary} />
              {primary.length > 0 && secondary.length > 0 && (
                <div aria-hidden className="hairline mx-3" />
              )}
              <BulletList items={secondary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
