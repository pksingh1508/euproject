import { fontMontserrat, fontPoppins } from "@/fonts";
import React from "react";

interface FlipCardProps {
  flagImageUrl: string;
  countryName: string;
  title: string;
  btnName: string;
  btnUrl: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  flagImageUrl,
  countryName,
  title,
  btnName,
  btnUrl
}) => {
  const handleButtonClick = () => {
    window.open(btnUrl);
  };

  return (
    <div className="flip-card  h-64 perspective-1000">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-blue-300">
          <div className="bg-white rounded-lg p-1 shadow-lg mb-6">
            <img
              src={flagImageUrl}
              alt={`${countryName} flag`}
              className="w-24 h-16 object-cover rounded"
            />
          </div>
          <h2
            className={`text-2xl font-bold text-gray-500 text-center tracking-wide ${fontMontserrat.className}`}
          >
            {countryName}
          </h2>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-xl flex flex-col justify-center p-8 border border-slate-200">
          <h2
            className={`text-2xl font-bold text-slate-800 mb-4 text-center ${fontMontserrat.className}`}
          >
            {countryName}
          </h2>
          <p
            className={`text-slate-600 text-center mb-8 leading-relaxed ${fontPoppins.className}`}
          >
            {title}
          </p>
          <button
            onClick={handleButtonClick}
            className={`bg-[#1877f2] hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 cursor-pointer ${fontPoppins.className}`}
          >
            {btnName}
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};
