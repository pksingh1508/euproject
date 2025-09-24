"use client";
import { motion, easeOut } from "framer-motion";
import React from "react";
import { RippleButton } from "../ui/ripple-button";
import { useRouter } from "next/navigation";
import { BLOGS_DATA } from "@/constants/data";
import { SingleBlog } from "./SingleBlog";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

export function RecentBlog() {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true // only pause when hovering on desktop
    })
  );

  return (
    <section className="py-10 md:pt-2 md:pb-10 lg:pb-16 bg-white mx-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Blogs</h2>
            <div className="h-2 bg-blue-500 rounded w-24 mx-auto"></div>
          </div>

          {/* Blog carousel */}
          {BLOGS_DATA.length > 0 ? (
            <div className="relative px-10">
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent>
                  {BLOGS_DATA.map((blog, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <SingleBlog blog={blog} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No recent blogs found.</p>
            </div>
          )}

          {BLOGS_DATA.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: easeOut
              }}
              className="text-center mt-16"
            >
              <RippleButton
                variant="brandOutline"
                size="lg"
                onClick={() => router.push(`/blog`)}
                className="h-12 text-base font-semibold  border-3 text-blue-500 border-[#1877f2] hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer"
              >
                Read More Blogs
              </RippleButton>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
