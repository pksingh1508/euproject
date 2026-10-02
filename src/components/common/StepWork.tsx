"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface StepWorkProps {
  image: string;
  imageAlt?: string;
  heading: string;
  eyebrow?: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  isReversed?: boolean;
}

export function StepWork({
  image,
  imageAlt = "Step illustration",
  heading,
  eyebrow,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  isReversed = false
}: StepWorkProps) {
  const paragraphs = [paragraph1, paragraph2, paragraph3, paragraph4].filter(
    Boolean
  );

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
              className={cn(
                "absolute inset-0 -z-10 rounded-[1.75rem] border border-gold/50",
                isReversed
                  ? "-translate-x-4 translate-y-4 sm:-translate-x-5 sm:translate-y-5"
                  : "translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5"
              )}
            />
            <ParallaxImage
              src={image}
              alt={imageAlt}
              priority
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
            <SectionHeading eyebrow={eyebrow} title={heading} />
            <Stagger className="mt-8 space-y-5" stagger={0.12} delay={0.1}>
              {paragraphs.map((paragraph, i) => (
                <StaggerItem key={i}>
                  <p className="max-w-[68ch] text-[15.5px] leading-[1.85] text-muted-foreground">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
