import { AllSuccessStories } from "@/components/SuccessStory/AllSuccessStories";
import { SUCCESS_STORIES } from "@/constants/successStories";
import React from "react";

export default function page() {
  const stories = [...SUCCESS_STORIES].sort((a, b) => b.date.localeCompare(a.date));
  return <AllSuccessStories stories={stories} />;
}
