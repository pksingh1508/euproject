"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonials as TestimonialsData } from "@/constants/data";
import { SingleTestimonial } from "./SingleTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true // only pause when hovering on desktop
    })
  );

  return (
    <section className="relative isolate overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="absolute right-0 top-10 -z-10 size-96 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="page-container">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Clients Say"
              highlight="Clients"
              description="Hear from people who have experienced our services and support"
            />
            <Reveal blur={false} className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </Reveal>
          </div>

          <Reveal blur={false} distance={32}>
            <CarouselContent className="-ml-6 py-3">
              {TestimonialsData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <SingleTestimonial
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                    review={testimonial.review}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Reveal>
        </Carousel>
      </div>
    </section>
  );
}
