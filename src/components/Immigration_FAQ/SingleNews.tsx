import React from "react";
import Link from "next/link";
import { fontPoppins } from "@/fonts";

interface NewsItem {
  id: number;
  title: string;
  postDate: string;
  views: number;
  shortDesc: string;
}

export function SingleNews({ news }: { news: NewsItem }) {
  // Handle both nested attributes structure and flat structure
  const title = news.title || "Untitled";
  const publishedAt = news.postDate || "";
  const views = news.views || 0;
  const shortDesc = news.shortDesc || "";

  // Truncate short description to 200 characters
  const truncateText = (text: string, maxLength: number = 30) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + " ";
  };

  return (
    <article className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
      <div className="space-y-3">
        {/* Title */}
        <Link href={`/immigration-news`}>
          <h3
            className={`text-lg font-semibold text-gray-600 leading-tight hover:text-blue-500 cursor-pointer transition-colors ${fontPoppins.className}`}
          >
            {truncateText(title, 50)}
          </h3>
        </Link>

        {/* Short Description */}
        <div className="flex gap-3">
          <div className="text-gray-700 leading-relaxed">
            <p
              className={`flex flex-wrap items-center text-gray-500 ${fontPoppins.className}`}
            >
              {/* Description */}
              <span>{truncateText(shortDesc, 50)}</span>

              {/* Read More */}
              <Link href={`/immigration-news`}>
                <span
                  className={`text-blue-500 cursor-pointer hover:underline ml-1 ${fontPoppins.className}`}
                >
                  [Read More...]
                </span>
              </Link>

              {/* Published Date */}
              <span className="flex items-center space-x-1 text-sm text-gray-600 ml-4">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm"></span>
                <span className={`${fontPoppins.className}`}>
                  {publishedAt}
                </span>
              </span>

              {/* Views */}
              <span className="flex items-center space-x-1 text-sm text-gray-600 ml-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className={`${fontPoppins.className}`}>
                  {views} views
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
