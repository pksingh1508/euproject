import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogItem {
  imageUrl: string;
  title: string;
  shortDesc: string;
  postDate: string;
  likes_count: number;
}

interface SingleBlogProps {
  blog: BlogItem;
}

export function SingleBlog({ blog }: SingleBlogProps) {
  // Handle both nested attributes structure and flat structure
  const title = blog.title || "Untitled";
  const updatedAt = blog.postDate || "";
  const likes_count = blog.likes_count || 0;
  const image_url = blog.imageUrl || "";
  const short_desc = blog.shortDesc || "";

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image */}
      <div className="aspect-video w-full overflow-hidden">
        {image_url ? (
          <Image
            src={`${image_url}`}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-2">
        {/* Title */}
        <Link href={`/blog`}>
          <h3 className="text-lg font-semibold text-gray-800 leading-tight hover:text-yellow-600 cursor-pointer transition-colors mb-3 line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="p-2">
          <p className="text-gray-600 line-clamp-2">{short_desc}</p>
          <Link href={`/blog`}>
            <span className="text-blue-500 cursor-pointer hover:underline ml-1">
              [Read More...]
            </span>
          </Link>
        </div>

        {/* Date and Likes */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{updatedAt}</span>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{likes_count}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
