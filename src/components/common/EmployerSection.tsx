"use client";

import { fontMontserrat, fontPoppins } from "@/fonts";
import React from "react";

interface ListItem {
  id: string;
  text: string;
}

interface EmployerSectionProps {
  heading: string;
  items: ListItem[];
}

const EmployerSection: React.FC<EmployerSectionProps> = ({
  heading,
  items
}) => {
  return (
    <section className="w-full bg-white text-gray-800 py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-blue-500 ${fontMontserrat.className}`}
        >
          {heading}
        </h2>

        <div className="w-20 h-1 bg-blue-500 rounded-2xl mb-8" />

        {/* Custom List */}
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id} className="flex">
              {/* Bullet */}
              <span className="text-blue-600 text-xl leading-7 mr-3">•</span>

              {/* Text with hanging indent */}
              <p
                className={`text-lg md:text-xl leading-relaxed text-gray-700 ${fontPoppins.className}`}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmployerSection;
