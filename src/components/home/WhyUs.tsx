"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const features = [
  { iconUrl: "/home-icon.png", title: "Expert Recruitment Process" },
  { iconUrl: "/home-icon1.png", title: "Skilled Workforce" },
  { iconUrl: "/home-icon2.png", title: "Fast & Legal Hiring" },
  { iconUrl: "/home-icon3.png", title: "Strong Employer Network" }
];

const WhyUs: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative isolate overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="absolute -left-32 top-1/4 -z-10 size-[28rem] rounded-full bg-primary/[0.07] blur-[120px]"
      />
      <div className="page-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left side */}
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Why EU Prime Serwis"
              highlight="EU Prime Serwis"
            />

            <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
              {features.map((item, index) => (
                <StaggerItem key={item.title} className="h-full">
                  <button
                    type="button"
                    onClick={() => router.push("/register-company")}
                    className="group relative flex h-full w-full flex-col items-start gap-8 overflow-hidden rounded-3xl border border-border bg-card p-7 text-left shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="flex w-full items-start justify-between">
                      <span className="flex size-16 items-center justify-center rounded-2xl bg-secondary transition-colors duration-500 group-hover:bg-primary/10">
                        {/* The icon art sits on an opaque white square: crop to it and
                            blend it into the chip (multiply in light, screen in dark). */}
                        <Image
                          src={item.iconUrl}
                          alt=""
                          width={230}
                          height={78}
                          unoptimized
                          className="size-12 object-cover mix-blend-multiply transition-transform duration-500 ease-premium group-hover:scale-110 dark:mix-blend-screen dark:hue-rotate-180 dark:invert"
                        />
                      </span>
                      <span className="font-display text-sm tabular-nums text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex w-full items-end justify-between gap-4">
                      <p className="text-[17px] font-semibold leading-snug text-foreground">
                        {item.title}
                      </p>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-muted-foreground transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:text-primary"
                        strokeWidth={1.75}
                      />
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right side */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-[radial-gradient(circle,var(--gold)_1px,transparent_1.5px)] bg-[length:18px_18px] opacity-40"
            />
            <ParallaxImage
              src="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/why-choose-bg.webp"
              alt="Why Us"
              className="aspect-[4/5] w-full lg:aspect-auto lg:h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
