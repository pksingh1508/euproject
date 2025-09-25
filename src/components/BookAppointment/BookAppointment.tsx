"use client";

import React from "react";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/ripple-button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { fontPoppins } from "@/fonts";

export function BookAppointment() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const meetings = [
    {
      name: "In-Person Consultation at Our Office",
      duration: "30",
      price: "100",
      icon: <Clock className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Online Consultation via Zoom",
      duration: "30",
      price: "100",
      icon: <Calendar className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Quick Consultation via WhatsApp",
      duration: "15",
      price: "80",
      icon: <CheckCircle className="w-6 h-6" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white  py-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First Section - Two Information Boxes */}
        <motion.section className="mb-20" variants={itemVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Box (Top on mobile) */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2
                  className={`text-[22px] font-bold text-gray-700 ml-4 ${fontPoppins.className}`}
                >
                  "Job Seekers Advisory – International Clients"
                </h2>
              </div>
              <p
                className={`text-gray-600 leading-relaxed text-base ${fontPoppins.className}`}
              >
                "We provide professional one-on-one advisory sessions for job
                seekers looking to work in Poland and across Europe. Our
                guidance is tailored to your needs, helping you understand
                opportunities, recruitment procedures, and the best steps for
                your career journey."
              </p>
            </motion.div>

            {/* Right Box (Bottom on mobile) */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2
                  className={`text-[22px] font-bold text-gray-700 ml-4 ${fontPoppins.className}`}
                >
                  "Recruitment Advisory Services for B2B Clients"
                </h2>
              </div>
              <p
                className={`text-gray-600 leading-relaxed text-base ${fontPoppins.className}`}
              >
                "We support international companies in meeting their workforce
                needs through professional recruitment advisory sessions. Our
                services are designed to help businesses understand the European
                labor market, compliance requirements, and effective hiring
                strategies."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Second Section - Meeting Booking Cards */}
        <motion.section variants={itemVariants}>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Job Seeker Advisory */}
            <div>
              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-bold text-gray-700 mb-2 ${fontPoppins.className}`}
                >
                  Job Seeker Advisory
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 max-w-2xl lg:max-w-full mx-auto">
                {meetings.map((meeting, index) => (
                  <motion.div
                    key={`job-seeker-${index}`}
                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      meeting.popular
                        ? "border-blue-400 ring-4 ring-blue-100 py-10 my-9"
                        : "border-gray-200 hover:border-blue-400"
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {meeting.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex gap-6">
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          meeting.popular
                            ? "bg-gradient-to-br from-blue-400 to-blue-500"
                            : "bg-gradient-to-br from-blue-500 to-blue-600"
                        }`}
                      >
                        <div className="text-white">{meeting.icon}</div>
                      </div>

                      <div className="flex flex-row flex-1 gap-4 justify-between">
                        <div>
                          {/* Meeting Name */}
                          <h4
                            className={`text-md md:text-xl font-bold text-gray-700 mb-2 ${fontPoppins.className}`}
                          >
                            {meeting.name}
                          </h4>

                          {/* Duration and Price */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-500 mr-1" />
                              <span
                                className={`text-gray-600 text-sm font-medium ${fontPoppins.className}`}
                              >
                                {meeting.duration} minutes
                              </span>
                            </div>
                            <div>
                              <span
                                className={`text-2xl font-bold text-gray-700 ${fontPoppins.className}`}
                              >
                                €{meeting.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Book Button */}
                        <RippleButton
                          variant={meeting.popular ? "brand" : "brandOutline"}
                          size="default"
                          className={`w-28 h-10 text-sm font-semibold rounded-lg transition-all duration-300 ${
                            fontPoppins.className
                          } ${
                            meeting.popular
                              ? "bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg"
                              : "border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                          }`}
                        >
                          BOOK NOW
                        </RippleButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Recruitment Advisory */}
            <div>
              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-bold text-gray-700 mb-2 ${fontPoppins.className}`}
                >
                  Recruitment Advisory
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 max-w-2xl lg:max-w-full mx-auto">
                {meetings.map((meeting, index) => (
                  <motion.div
                    key={`recruitment-${index}`}
                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      meeting.popular
                        ? "border-blue-400 ring-4 ring-blue-100 py-10 my-9"
                        : "border-gray-200 hover:border-blue-400"
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {meeting.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex gap-6">
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          meeting.popular
                            ? "bg-gradient-to-br from-blue-400 to-blue-500"
                            : "bg-gradient-to-br from-blue-500 to-blue-600"
                        }`}
                      >
                        <div className="text-white">{meeting.icon}</div>
                      </div>

                      <div className="flex flex-row flex-1 gap-4 justify-between">
                        <div>
                          {/* Meeting Name */}
                          <h4
                            className={`text-md md:text-xl font-bold text-gray-700 mb-2 ${fontPoppins.className}`}
                          >
                            {meeting.name}
                          </h4>

                          {/* Duration and Price */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-500 mr-1" />
                              <span
                                className={`text-gray-600 text-sm font-medium ${fontPoppins.className}`}
                              >
                                {meeting.duration} minutes
                              </span>
                            </div>
                            <div>
                              <span
                                className={`text-2xl font-bold text-gray-700 ${fontPoppins.className}`}
                              >
                                €{meeting.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Book Button */}
                        <RippleButton
                          variant={meeting.popular ? "brand" : "brandOutline"}
                          size="default"
                          className={`w-28 h-10 text-sm font-semibold rounded-lg transition-all duration-300 ${
                            fontPoppins.className
                          } ${
                            meeting.popular
                              ? "bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg"
                              : "border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                          }`}
                        >
                          BOOK NOW
                        </RippleButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
