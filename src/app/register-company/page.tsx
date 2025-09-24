"use client";
import { FlipCard } from "@/components/common/FlipCard";
import RotatingCircle from "@/components/common/RotatingCircle";
import { StepWork } from "@/components/common/StepWork";
import { COMPANY_DATA } from "@/constants/data";
import { fontMontserrat } from "@/fonts";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <StepWork
        image="/assets/register-company/registered-company-bg.jpg"
        imageAlt="WorkStudy image"
        heading="Register Company"
        paragraph1="As A Registered Company, We Ensure Transparency, Legality, And Reliability in All Our Operations. We Are Fully Compliant with European Regulations, Providing Trusted and Professional Services Across Industries. Our Registration Guarantees Proper Documentation, Legally Binding Contracts, And Adherence to Labor and Immigration Laws. By Working With Us, Clients and Partners Benefit from Accountability, Ethical Practices, And Comprehensive Support, Ensuring A Seamless Experience from Start To Finish."
        paragraph2=""
        paragraph3=""
        paragraph4=""
      />
      {/* work progress image */}
      <div className="bg-white p-2 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-2xl md:text-3xl font-bold font-poppins text-gray-900">
            Step to Open{" "}
            <span
              className={`text-[#1877f2] font-bold ${fontMontserrat.className}`}
            >
              A Company
            </span>
          </h1>
          <Image
            src="/assets/register-company/steps-to-open-a-company.png"
            alt="Steps to Open a Company"
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
              Types of Company
            </h1>
            <div className="w-24 h-2 bg-[#1877f2] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {COMPANY_DATA.map((item, index) => (
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
