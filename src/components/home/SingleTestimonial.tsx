"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fontPoppins } from "@/fonts";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

export function SingleTestimonial({
  name,
  role,
  image,
  review
}: TestimonialProps) {
  const truncateText = (text: string, maxLength: number = 30) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + " ";
  };
  return (
    <motion.div
      className="bg-white rounded-lg border-1 border-gray-300 p-6 h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className={`font-bold text-gray-900 ${fontPoppins.className}`}>
            {name}
          </h3>
          <p className={`text-sm text-gray-600 ${fontPoppins.className}`}>
            {role}
          </p>
        </div>
      </div>

      <div className="mt-2 flex-grow">
        <p className={`text-gray-700 italic ${fontPoppins.className}`}>
          "{review}"
        </p>
      </div>

      <div className="mt-4 flex justify-start">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
}
