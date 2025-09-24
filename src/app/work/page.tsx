"use client";
import { FlipCard } from "@/components/common/FlipCard";
import RotatingCircle from "@/components/common/RotatingCircle";
import { StepWork } from "@/components/common/StepWork";
import { DESTINATION_DATA } from "@/constants/data";
import { fontMontserrat } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <StepWork
        image="/assets/work/study-bg.jpg"
        imageAlt="WorkStudy image"
        heading="Work"
        paragraph1="Europe Provides Job Opportunities For Skilled, Semi-Skilled, And Non-Skilled Workers In IT, Engineering, Healthcare, Finance, Manufacturing, Logistics, Hospitality, Construction, Agriculture, Cleaning, And Warehouse Operations. Many Roles Offer Work Visa Sponsorship And Residency Pathways. Workers Benefit From Labor Rights, Social Security, And Competitive Salaries, Ensuring A Stable Career With Legal Registration, Job Contracts, And Work Permits."
        paragraph2=""
        paragraph3=""
        paragraph4=""
      />
      {/* work progress image */}
      <div className="bg-white p-2 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-2xl md:text-3xl font-bold font-poppins text-gray-900">
            Work{" "}
            <span
              className={`text-[#1877f2] font-bold ${fontMontserrat.className}`}
            >
              Process
            </span>
          </h1>
          <Image
            src="/assets/work/work-process.jpg"
            alt="Work Progress"
            width={800}
            height={450}
            className="w-[90%] h-[90%] object-cover rounded-md p-1 md:p-5 mx-auto"
            priority
          />
        </div>
      </div>

      <RotatingCircle />

      {/* flip card components */}
      <div className="bg-white p-7 md:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-3 p-2 md:p-4">
            <h1 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
              Choose Destination
            </h1>
            <div className="w-24 h-2 bg-[#1877f2] mx-auto rounded-full"></div>
            <p className="text-center text-gray-600">
              We help diverse industries to find and recruit the right talent
              for different job roles. We are focused on providing the best
              services dedicated to your business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {DESTINATION_DATA.map((item, index) => (
              <FlipCard
                key={index}
                flagImageUrl={item.url}
                countryName={item.name}
                title={item.title}
                btnName={item.btnName}
                btnUrl={item.btnUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
