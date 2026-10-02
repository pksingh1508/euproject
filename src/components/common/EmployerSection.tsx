"use client";

import React from "react";
import { PageHeader } from "./PageHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface ListItem {
  id: string;
  text: string;
}

interface EmployerSectionProps {
  heading: string;
  eyebrow?: string;
  items: ListItem[];
}

const EmployerSection: React.FC<EmployerSectionProps> = ({
  heading,
  eyebrow,
  items
}) => {
  return (
    <>
      <PageHeader title={heading} eyebrow={eyebrow} />

      <section className="relative py-16 lg:py-20">
        <div className="page-container">
          <Stagger as="ol" className="mx-auto max-w-4xl space-y-4" stagger={0.12}>
            {items.map((item, index) => (
              <StaggerItem
                as="li"
                key={item.id}
                className="group flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated sm:gap-8 sm:p-8"
              >
                <span className="w-10 shrink-0 font-display text-3xl font-medium leading-none tabular-nums text-primary/80 sm:w-12 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15.5px] leading-[1.85] text-foreground/80 sm:text-base">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
};

export default EmployerSection;
