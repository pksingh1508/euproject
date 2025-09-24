"use client";
import EmployerSection from "@/components/common/EmployerSection";
import { MyForm } from "@/components/common/MyForm";
import RotatingCircle from "@/components/common/RotatingCircle";
import { fontInter } from "@/fonts";
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
    <div className="bg-white">
      <EmployerSection heading="Become a Partner" items={partnerItems} />
      <RotatingCircle />
      <div className="flex items-center justify-center py-7 my-10 px-2">
        <div className="bg-white rounded-2xl shadow-2xl p-3 lg:p-6 order-1 lg:order-2 border-5 border-blue-500">
          <div className="mb-8">
            <p
              className={`text-gray-600 font-inter text-center ${fontInter.className}`}
            >
              Please fill out the form below to become a partner.
            </p>
          </div>
          <MyForm />
        </div>
      </div>
    </div>
  );
}
