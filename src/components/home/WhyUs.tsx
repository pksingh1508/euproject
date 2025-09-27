"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Users, UserCheck, Star, Building2 } from "lucide-react";
import {
  fontOpenSans,
  fontPoppins,
  fontPlayfair,
  fontRoboto,
  fontMontserrat
} from "@/fonts";

const features = [
  { iconUrl: "/home-icon.png", title: "Expert Recruitment Process" },
  { iconUrl: "/home-icon1.png", title: "Skilled Workforce" },
  { iconUrl: "/home-icon2.png", title: "Fast & Legal Hiring" },
  { iconUrl: "/home-icon3.png", title: "Strong Employer Network" }
];

const WhyUs: React.FC = () => {
  const router = useRouter();

  return (
    <section className="w-full py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-10 ${fontMontserrat.className}`}
            >
              Why EU Prime Serwis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  onClick={() => router.push("/register-company")}
                  className="flex flex-col items-center justify-center border-2 border-[#1877f2] rounded-xl p-8 shadow-sm cursor-pointer transition-all duration-300 transform hover:shadow-lg hover:scale-105 hover:border-blue-600"
                >
                  <div className="mb-4 text-blue-600 transition-transform duration-300 group-hover:rotate-6">
                    <Image
                      src={item.iconUrl}
                      alt={item.title}
                      width={40}
                      height={40}
                      unoptimized
                      className="w-full h-full"
                    />
                  </div>
                  <p
                    className={`text-center font-medium ${fontPoppins.className}`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/why-choose-bg.webp"
              alt="Why Us"
              width={500}
              height={400}
              priority
              className="w-full h-[650px] rounded-2xl object-cover shadow-md hover:shadow-xl transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
