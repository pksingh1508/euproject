"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Testimonials as TestimonialsData } from "@/constants/data";
import { SingleTestimonial } from "./SingleTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { fontPoppins } from "@/fonts";

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true // only pause when hovering on desktop
    })
  );
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl font-bold text-gray-900 ${fontPoppins.className}`}
          >
            What Our Clients Say
          </h2>
          <div className="h-2 bg-blue-500 rounded w-24 mx-auto"></div>
          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto ${fontPoppins.className}`}
          >
            Hear from people who have experienced our services and support
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {TestimonialsData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: easeOut
                    }}
                  >
                    <SingleTestimonial
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      review={testimonial.review}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
