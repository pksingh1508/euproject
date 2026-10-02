import EmployerSection from "@/components/common/EmployerSection";
import { FormCard } from "@/components/common/FormCard";
import { MyForm } from "@/components/common/MyForm";
import RotatingCircle from "@/components/common/RotatingCircle";
import { Reveal } from "@/components/motion/Reveal";
import React from "react";

export default function page() {
  const employerItems = [
    {
      id: "1",
      text: "Recruitment involves a one-time fee charged to the employer for the employment of a candidate."
    },
    {
      id: "2",
      text: "Employee leasing is conducted in accordance with the legislation governing temporary work."
    },
    {
      id: "3",
      text: "We offer outsourcing of personnel services, allowing the State to delegate certain tasks within the company to us."
    }
  ];
  return (
    <div className="pb-10">
      <EmployerSection
        eyebrow="For businesses"
        heading="For Employer"
        items={employerItems}
      />
      <RotatingCircle />
      <section className="py-16 lg:py-20">
        <div className="page-container">
          <Reveal blur={false} distance={32} className="mx-auto max-w-2xl">
            <FormCard
              eyebrow="Free expert consultation"
              title="Get in touch"
              description="Please fill out the form below to become an Employer."
            >
              <MyForm />
            </FormCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
