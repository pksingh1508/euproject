"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

interface GovernmentLink {
  name: string;
  logo: string;
  url: string;
  alt: string;
}

const governmentLinks: GovernmentLink[] = [
  {
    name: "Ministry of Foreign Affairs",
    logo: "/960px-Ministerstwo_Spraw_Zagranicznych_logo_2022.png",
    url: "https://www.gov.pl/web/dyplomacja",
    alt: "Ministry of Foreign Affairs Republic of Poland"
  },
  {
    name: "Council of Ministers",
    logo: "/Logo-kprm.png",
    url: "https://www.gov.pl/web/premier",
    alt: "Council of Ministers Republic of Poland"
  },
  {
    name: "National Bank of Poland",
    logo: "/Narodowy_Bank_Polski_logo_and_wordmark.png",
    url: "https://www.nbp.pl/",
    alt: "National Bank of Poland"
  },
  {
    name: "European Union",
    logo: "/europeanUnion.png",
    url: "https://european-union.europa.eu/index_en",
    alt: "National Bank of Poland"
  },
  {
    name: "Statistics Poland",
    logo: "/static.png",
    url: "https://stat.gov.pl/en/",
    alt: "Statistics Poland"
  },
  {
    name: "Statistics Poland",
    logo: "/govlink.png",
    url: "https://www.santander.pl/klient-indywidualny",
    alt: "Statistics Poland"
  },
  {
    name: "Statistics Poland",
    logo: "/govlink2.png",
    url: "https://nbp.pl/",
    alt: "Statistics Poland"
  }
];

export function GovernmentLinks() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true // only pause when hovering on desktop
    })
  );

  return (
    <section className="relative py-16 lg:py-24">
      <div className="page-container">
        <SectionHeading
          align="center"
          eyebrow="Official resources"
          title="Government of Poland: Useful Links"
          highlight="Useful Links"
        />

        <Reveal blur={false} distance={28} className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            className="mask-fade-x mx-auto w-full max-w-6xl"
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent className="-ml-4 py-3">
              {governmentLinks.map((link, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.alt}
                    className="group flex h-32 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated dark:border-transparent dark:bg-[oklch(0.88_0.008_85)] lg:p-8"
                  >
                    <Image
                      src={link.logo}
                      alt={link.alt}
                      width={200}
                      height={80}
                      className="max-h-16 w-auto max-w-full object-contain opacity-75 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Click on any logo to visit the official government website
          </p>
        </Reveal>
      </div>
    </section>
  );
}
