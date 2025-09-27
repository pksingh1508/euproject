import EmployerSection from "@/components/common/EmployerSection";
import { MyForm } from "@/components/common/MyForm";
import RotatingCircle from "@/components/common/RotatingCircle";
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
    <div>
      <EmployerSection heading="For Employer" items={employerItems} />
      <RotatingCircle />
      <div className="flex items-center justify-center py-7 my-10 px-2">
        <div className="bg-white rounded-2xl shadow-2xl p-3 lg:p-6 order-1 lg:order-2 border-5 border-blue-500">
          <div className="mb-8">
            <p className="text-gray-600 font-inter text-center">
              Please fill out the form below to become a Employer.
            </p>
          </div>
          <MyForm />
        </div>
      </div>
    </div>
  );
}
