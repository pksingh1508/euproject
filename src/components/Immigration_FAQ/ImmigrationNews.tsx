"use client";

import React, { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import { RippleButton } from "../ui/ripple-button";
import { useRouter } from "next/navigation";
import { NEWS_DATA } from "@/constants/data";
import { SingleNews } from "./SingleNews";
import { fontPoppins } from "@/fonts";

export function ImmigrationNews() {
  const router = useRouter();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2
          className={`text-2xl font-bold text-gray-700 mb-2 ${fontPoppins.className}`}
        >
          Immigration <span className="text-blue-400">News</span>
        </h2>
        <div className="h-1 bg-blue-400 rounded w-20"></div>
      </div>

      {/* News List */}
      <div className="space-y-0">
        {NEWS_DATA.length > 0 ? (
          NEWS_DATA.map((newsItem) => (
            <SingleNews key={newsItem.id} news={newsItem} />
          ))
        ) : (
          <p className="text-gray-600">No news articles found.</p>
        )}
      </div>
      {/* See all news buttons */}
      {NEWS_DATA.length > 0 && (
        <motion.div
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: easeOut
          }}
          className="flex justify-end"
        >
          <RippleButton
            variant="brandOutline"
            size="lg"
            onClick={() => router.push(`/immigration-news`)}
            className={`h-12 text-base font-semibold  border-2 text-blue-500 border-[#1877f2] hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer ${fontPoppins.className}`}
          >
            See All News
          </RippleButton>
        </motion.div>
      )}
    </div>
  );
}
