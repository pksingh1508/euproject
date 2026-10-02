"use client";
import { FlipCard } from "@/components/common/FlipCard";
import { ProcessFigure } from "@/components/common/ProcessFigure";
import RotatingCircle from "@/components/common/RotatingCircle";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StepWork } from "@/components/common/StepWork";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { COMPANY_DATA } from "@/constants/data";
import React from "react";

export default function page() {
  return (
    <div className="pb-10">
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/euprimeserwis/register-compnay/registered-company-bg.webp"
        imageAlt="WorkStudy image"
        eyebrow="Business setup"
        heading="Register Company"
        paragraph1="As A Registered Company, We Ensure Transparency, Legality, And Reliability in All Our Operations. We Are Fully Compliant with European Regulations, Providing Trusted and Professional Services Across Industries. Our Registration Guarantees Proper Documentation, Legally Binding Contracts, And Adherence to Labor and Immigration Laws. By Working With Us, Clients and Partners Benefit from Accountability, Ethical Practices, And Comprehensive Support, Ensuring A Seamless Experience from Start To Finish."
        paragraph2=""
        paragraph3=""
        paragraph4=""
      />

      {/* steps image */}
      <ProcessFigure
        eyebrow="How it works"
        title="Step to Open A Company"
        highlight="A Company"
        src="https://ik.imagekit.io/eucareerserwis/euprimeserwis/work/steps-to-open-a-company.webp"
        alt="Steps to Open a Company"
      />

      <RotatingCircle />

      {/* flip card components */}
      <section className="relative py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            align="center"
            eyebrow="Legal forms"
            title="Types of Company"
            highlight="Company"
          />
          <Stagger
            className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
            stagger={0.1}
          >
            {COMPANY_DATA.map((item, index) => (
              <StaggerItem key={index} blur={false} y={24}>
                <FlipCard
                  flagImageUrl={item.url}
                  countryName={item.name}
                  title={item.title}
                  btnName={item.btnName}
                  btnUrl={item.btnUrl}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
