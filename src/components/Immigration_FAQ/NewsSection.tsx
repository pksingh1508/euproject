"use client";

import React from "react";
import { ImmigrationNews } from "./ImmigrationNews";
import { SomeFAQ } from "./SomeFAQ";
import type { NewsSummary } from "@/lib/content";

export function NewsSection({ news }: { news: NewsSummary[] }) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="page-container">
        {/* Desktop Layout: News left, FAQ right */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-2">
            <SomeFAQ />
          </div>
          <div className="order-2 lg:order-1">
            <ImmigrationNews news={news} />
          </div>
        </div>
      </div>
    </section>
  );
}
