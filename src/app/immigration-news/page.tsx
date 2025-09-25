import React from "react";
import { Metadata } from "next";
import { ImmigrationNewsSection } from "@/components/ImmigrationNews/ImmigrationNewsSection";

export const metadata: Metadata = {
  title: "Immigration News | EU Prime Serwis",
  description:
    "Stay updated with the latest immigration news, policy changes, and important updates from around the world. Get expert insights on visa requirements, work permits, and migration opportunities.",
  keywords: [
    "immigration news",
    "visa updates",
    "policy changes",
    "work permits",
    "migration news",
    "EU Prime Serwis"
  ]
};

export default function page() {
  return <ImmigrationNewsSection />;
}
