"use client";
import FlagCard from "@/components/common/FlagCard";
import { FormCard } from "@/components/common/FormCard";
import { MyForm } from "@/components/common/MyForm";
import { ProcessFigure } from "@/components/common/ProcessFigure";
import RotatingCircle from "@/components/common/RotatingCircle";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StepWork } from "@/components/common/StepWork";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { DESTINATION_DATA } from "@/constants/data";
import React from "react";

export default function page() {
  return (
    <div className="pb-10">
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/study.webp"
        imageAlt="WorkStudy image"
        eyebrow="Careers in Europe"
        heading="Work"
        paragraph1="Europe Provides Job Opportunities For Skilled, Semi-Skilled, And Non-Skilled Workers In IT, Engineering, Healthcare, Finance, Manufacturing, Logistics, Hospitality, Construction, Agriculture, Cleaning, And Warehouse Operations. Many Roles Offer Work Visa Sponsorship And Residency Pathways. Workers Benefit From Labor Rights, Social Security, And Competitive Salaries, Ensuring A Stable Career With Legal Registration, Job Contracts, And Work Permits."
        paragraph2=""
        paragraph3=""
        paragraph4=""
      />

      {/* work progress image */}
      <ProcessFigure
        eyebrow="How it works"
        title="Work Process"
        highlight="Process"
        src="https://ik.imagekit.io/eucareerserwis/euprimeserwis/work/work-process.webp"
        alt="Work Progress"
      />

      <RotatingCircle />

      {/* destinations + enquiry form */}
      <section className="relative py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            align="center"
            eyebrow="Destinations"
            title="Choose Destination"
            highlight="Destination"
            description="We help diverse industries to find and recruit the right talent for different job roles. We are focused on providing the best services dedicated to your business success."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            {/* Left side - flags */}
            <Stagger
              className="grid content-start grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4"
              stagger={0.03}
            >
              {DESTINATION_DATA.map((item, index) => (
                <StaggerItem key={index} blur={false} y={16}>
                  <FlagCard flagImageUrl={item.url} countryName={item.name} />
                </StaggerItem>
              ))}
            </Stagger>

            {/* Right side - sticky form */}
            <div>
              <div className="lg:sticky lg:top-28">
                <Reveal blur={false} distance={32}>
                  <FormCard
                    eyebrow="Free expert consultation"
                    title="Sign up for a free expert consultation"
                  >
                    <MyForm />
                  </FormCard>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
