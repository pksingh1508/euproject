"use client";

import * as React from "react";
import Image from "next/image";

interface StepWorkBulletPointProps {
  image: string;
  imageAlt?: string;
  heading: string;
  paragraph?: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  bullet5: string;
  bullet6: string;
  bullet7: string;
  isReversed?: boolean;
}

export function StepWorkBulletPoint({
  image,
  imageAlt = "Step illustration",
  heading,
  paragraph,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
  bullet6,
  bullet7,
  isReversed = false,
}: StepWorkBulletPointProps) {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-7xl px-4 lg:py-16 py-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16  ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div
            className={`flex justify-center ${
              isReversed ? "lg:justify-end" : "lg:justify-start"
            } ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative w-full h-auto max-w-lg">
              <Image
                src={image}
                alt={imageAlt}
                width={500}
                height={400}
                className="w-full h-[650px] object-cover rounded-md shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className={`space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          >
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              {heading}
            </h2>
            {paragraph && (
              <p className="font-inter text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            )}
            <div className="space-y-3">
              {bullet1 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet1}
                  </p>
                </div>
              )}

              {bullet2 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet2}
                  </p>
                </div>
              )}

              {bullet3 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet3}
                  </p>
                </div>
              )}
              <br />
              {bullet4 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet4}
                  </p>
                </div>
              )}

              {bullet5 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet5}
                  </p>
                </div>
              )}

              {bullet6 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet6}
                  </p>
                </div>
              )}

              {bullet7 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {bullet7}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
