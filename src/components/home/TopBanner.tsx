"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const bannerData = [
  {
    image: "/assets/banner/home-bg.jpg",
    title: "Best Recruitment Agency",
    subtitle: "For you better future",
    description:
      "We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.",
  },
  {
    image: "/assets/banner/home-bg1.jpg",
    title: "EU Prime Serwis",
    subtitle: "Looking to start your career in Poland",
    description:
      "Connect with our Work Abroad Specialists to find your dream job in Poland.",
  },
  {
    image: "/assets/banner/home-bg2.jpg",
    title: "Feed Your Knowledge",
    subtitle: "Unlock Endless Career Possibilities in Europe",
    description: "Connect with our Work Abroad Experts today.",
  },
];

export function TopBanner() {
  const [currentSlide, setCurrentSlide] = useState(1); // start from index 1 (first real slide)
  const [isHovered, setIsHovered] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  // Create duplicated slides at start & end
  const extendedSlides = [
    bannerData[bannerData.length - 1],
    ...bannerData,
    bannerData[0],
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        goToNext();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  // Handle transition end for seamless loop
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === 0) {
        setTransitionEnabled(false);
        setCurrentSlide(bannerData.length);
      } else if (currentSlide === bannerData.length + 1) {
        setTransitionEnabled(false);
        setCurrentSlide(1);
      }
    };

    const track = slideRef.current;
    track?.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      track?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentSlide]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [transitionEnabled]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index + 1); // shift by 1 because of extra clone at start
  };

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden group bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Track */}
      <div
        ref={slideRef}
        className={`flex w-full h-full ${
          transitionEnabled
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {extendedSlides.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/80 opacity-70 z-10"></div>
              <div className="absolute inset-0  z-10"></div>

              <Image
                src={banner.image}
                alt={banner.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white z-20 px-4 sm:px-6 md:px-8">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
                <div
                  className={`transform transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider mb-2 sm:mb-3 font-medium text-gray-200">
                    {banner.subtitle}
                  </h3>
                  <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-100 leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
                    {banner.description}
                  </p>
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm sm:max-w-md mx-auto">
                    <button
                      onClick={() => (window.location.href = "/contact")}
                      className="w-full xs:w-auto bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-black font-semibold px-4 py-2 sm:py-2.5 lg:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base shadow-lg"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 shadow-lg ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 sm:-translate-x-4"
        }`}
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 shadow-lg ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 sm:translate-x-4"
        }`}
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index + 1 === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
