"use client";

import * as React from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

interface ProcessFigureProps {
  title: string;
  highlight?: string;
  eyebrow?: string;
  src: string;
  alt: string;
}

/** Framed infographic (work process, company set-up steps, …). */
export function ProcessFigure({ title, highlight, eyebrow, src, alt }: ProcessFigureProps) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="page-container">
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
        />
        <Reveal blur={false} distance={32} className="mx-auto mt-12 max-w-5xl">
          <figure className="rounded-[1.75rem] border border-border bg-card p-3 shadow-elevated sm:p-4">
            {/* Infographics are drawn on white, so keep a light plate in both themes. */}
            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="h-auto w-full dark:brightness-[0.9]"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default ProcessFigure;
