import React from "react";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

export default function page() {
  const certificateData = [
    {
      id: 1,
      name: "VAT Certificate",
      image:
        "https://ik.imagekit.io/eucareerserwis/euprimeserwis/Certificates/vat_certificate.webp"
    }
  ];

  return (
    <div className="pb-16">
      <PageHeader
        title="Company Certificates"
        highlight="Certificates"
        eyebrow="Trust & compliance"
      />

      <section className="py-16 lg:py-20">
        <div className="page-container space-y-10">
          {certificateData.map((certificate) => (
            <Reveal
              key={certificate.id}
              blur={false}
              distance={32}
              className="mx-auto max-w-3xl"
            >
              <figure className="rounded-[1.75rem] border border-border bg-card p-3 shadow-floating sm:p-4">
                {/* Certificates are scanned on white, keep a light plate in both themes */}
                <div className="overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={certificate.image}
                    alt="Company Certificate"
                    width={1200}
                    height={1600}
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="h-auto w-full dark:brightness-[0.9]"
                  />
                </div>
                <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4 text-sm">
                  <span className="inline-flex items-center gap-2 font-medium text-foreground">
                    <BadgeCheck className="size-4 text-primary" strokeWidth={1.75} />
                    {certificate.name}
                  </span>
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-primary"
                  >
                    View full size
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
