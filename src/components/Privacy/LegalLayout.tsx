"use client";

import * as React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

interface LegalPageProps {
  title: string;
  crumb: string;
  children: React.ReactNode;
}

/** Shell for the policy pages: page header + a calm reading column. */
export function LegalPage({ title, crumb, children }: LegalPageProps) {
  return (
    <div className="pb-16">
      <PageHeader
        title={title}
        eyebrow="Legal"
        crumb={crumb}
        titleClassName="max-w-3xl text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem]"
      />
      <section className="py-16 lg:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    </div>
  );
}

interface LegalSectionProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ number, title, children }: LegalSectionProps) {
  return (
    <Reveal
      as="section"
      blur={false}
      distance={16}
      className="border-b border-border/70 py-10 first:pt-0 last:border-b-0"
    >
      <div className="flex gap-5 sm:gap-8">
        <span className="w-9 shrink-0 font-display text-2xl font-medium tabular-nums text-primary/70 sm:w-11 sm:text-3xl">
          {String(number).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-medium leading-snug tracking-[-0.01em] text-foreground sm:text-2xl">
            {title}
          </h2>
          <div className="mt-4 space-y-3 text-[15.5px] leading-[1.85] text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** Bullet list with soft gold markers. */
export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-[0.72em] size-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
