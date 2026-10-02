"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface ButtonData {
  text: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "brand"
    | "brandOutline";
}

interface CustomHeroProps {
  heading: string;
  eyebrow?: string;
  paragraph1: string;
  paragraph2: string;
  buttons: ButtonData[];
  isReversed?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function CustomHero({
  heading,
  eyebrow,
  paragraph1,
  paragraph2,
  buttons,
  isReversed = false,
  imageSrc,
  imageAlt = "Hero image"
}: CustomHeroProps) {
  const router = useRouter();
  const paragraphs = [paragraph1, paragraph2].filter(Boolean);

  const handleButtonClick = () => {
    router.push(`/contact`);
  };

  return (
    <section className="relative overflow-x-clip py-16 lg:py-24">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className={cn(isReversed ? "lg:order-2" : "lg:order-1")}>
            <SectionHeading eyebrow={eyebrow} title={heading} />

            {paragraphs.length > 0 && (
              <Stagger className="mt-6 space-y-4" delay={0.1}>
                {paragraphs.map((paragraph, i) => (
                  <StaggerItem key={i}>
                    <p className="max-w-[62ch] text-[15.5px] leading-[1.85] text-muted-foreground">
                      {paragraph}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            )}

            {buttons.length > 0 && (
              <Stagger
                stagger={0.05}
                delay={0.15}
                className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {buttons.slice(0, 20).map((button, index) => (
                  <StaggerItem key={index} blur={false} y={14}>
                    <button
                      type="button"
                      onClick={button.onClick || handleButtonClick}
                      className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 text-left text-[14.5px] font-medium text-foreground/85 shadow-soft transition-all duration-400 ease-premium hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground hover:shadow-elevated active:translate-y-0"
                    >
                      <span>{button.text}</span>
                      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-400 ease-premium group-hover:rotate-45"
                          strokeWidth={2}
                        />
                      </span>
                    </button>
                  </StaggerItem>
                ))}
              </Stagger>
            )}
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative",
              isReversed ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div
              aria-hidden
              className={cn(
                "absolute -bottom-10 -z-10 size-64 rounded-full bg-primary/10 blur-3xl",
                isReversed ? "-right-10" : "-left-10"
              )}
            />
            {imageSrc ? (
              <ParallaxImage
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[4/3] w-full lg:aspect-[5/6]"
              />
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-muted text-muted-foreground lg:aspect-[5/6]">
                <ImageIcon className="size-10 opacity-60" strokeWidth={1.25} />
                <p className="text-sm">Image Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
