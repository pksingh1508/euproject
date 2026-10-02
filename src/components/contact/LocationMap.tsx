"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CONTACT } from "@/constants/site";

export function LocationMap() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="page-container">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Find us"
            title="Visit our office"
            highlight="office"
            size="md"
          />
          <Reveal blur={false}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 shadow-soft">
              <MapPin className="size-4 text-primary" strokeWidth={1.75} />
              {CONTACT.address.full}
            </p>
          </Reveal>
        </div>

        <Reveal blur={false} distance={32}>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-elevated">
            <div className="h-96 overflow-hidden rounded-[1.35rem] md:h-[440px]">
              {/* In dark mode the embed is inverted + hue-rotated so it reads as a dim night map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2443.853819689377!2d21.021782876663426!3d52.22787357198607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDEzJzQwLjMiTiAyMcKwMDEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1744210054257!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Ludwika Idzikowskiego 16, Warsaw, Poland"
                className="grayscale-[0.2] dark:contrast-[0.9] dark:hue-rotate-180 dark:invert-[0.88]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
