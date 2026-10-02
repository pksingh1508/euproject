"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { RippleButton } from "../ui/ripple-button";
import { BLOGS_DATA } from "@/constants/data";
import { SingleBlog } from "./SingleBlog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function RecentBlog() {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true // only pause when hovering on desktop
    })
  );

  return (
    <section className="relative py-16 lg:py-24">
      <div className="page-container">
        {BLOGS_DATA.length > 0 ? (
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Insights" title="Recent Blogs" highlight="Blogs" />
              <Reveal blur={false} className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </Reveal>
            </div>

            <Reveal blur={false} distance={32}>
              <CarouselContent className="-ml-6 py-3">
                {BLOGS_DATA.map((blog, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 sm:basis-1/2 lg:basis-1/3"
                  >
                    <SingleBlog blog={blog} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Reveal>
          </Carousel>
        ) : (
          <div className="py-12 text-center">
            <SectionHeading align="center" title="Recent Blogs" />
            <p className="mt-6 text-muted-foreground">No recent blogs found.</p>
          </div>
        )}

        {BLOGS_DATA.length > 0 && (
          <Reveal className="mt-12 flex justify-center">
            <RippleButton
              variant="brandOutline"
              size="lg"
              onClick={() => router.push(`/blog`)}
              className="group"
            >
              Read More Blogs
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </RippleButton>
          </Reveal>
        )}
      </div>
    </section>
  );
}
