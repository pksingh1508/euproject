"use client";
import EmployerSection from "@/components/common/EmployerSection";
import { FormCard } from "@/components/common/FormCard";
import { MyForm } from "@/components/common/MyForm";
import RotatingCircle from "@/components/common/RotatingCircle";
import { Reveal } from "@/components/motion/Reveal";
import React from "react";

export default function page() {
  const partnerItems = [
    {
      id: "1",
      text: "We are thrilled about the opportunity to work together. To begin our collaboration, we kindly request you to complete the provided form and take a moment to visit our work page, which outlines detailed information about the work process and the countries we operate in. This will give you valuable insight into how we can collaborate effectively."
    },
    {
      id: "2",
      text: "We value our partners as integral members of our company, regardless of whether they are new or highly experienced. Our dedicated immigration team is committed to providing comprehensive guidance throughout the entire process, ensuring a seamless and efficient journey for every partner. Your success is our priority, and we are here to support you every step of the way."
    }
  ];
  return (
    <div className="pb-10">
      <EmployerSection
        eyebrow="Partnerships"
        heading="Become a Partner"
        items={partnerItems}
      />
      <RotatingCircle />
      <section className="py-16 lg:py-20">
        <div className="page-container">
          <Reveal blur={false} distance={32} className="mx-auto max-w-2xl">
            <FormCard
              eyebrow="Free expert consultation"
              title="Get in touch"
              description="Please fill out the form below to become a Partner."
            >
              <MyForm />
            </FormCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
