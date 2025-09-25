import React from "react";
import { Metadata } from "next";
import { BlogsSection } from "@/components/Blogs/BlogsSection";

export const metadata: Metadata = {
  title: "Blog | EU Prime Serwis",
  description:
    "Discover insights, tips, and stories about immigration, career development, and life abroad. Read our latest blog posts for expert advice and guidance.",
  keywords: [
    "blog",
    "immigration tips",
    "career advice",
    "life abroad",
    "EU Prime Serwis",
    "immigration stories"
  ]
};

export default function page() {
  return <BlogsSection />;
}
