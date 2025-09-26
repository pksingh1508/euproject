import React from "react";
import Image from "next/image";
import { fontPoppins } from "@/fonts";
import Link from "next/link";

interface FlagCardProps {
  flagImageUrl: string;
  countryName: string;
}

const FlagCard: React.FC<FlagCardProps> = ({ flagImageUrl, countryName }) => {
  return (
    <Link href={"/contact"}>
      <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200 max-w-32 max-h-40 w-full h-full p-2">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg p-1 px-auto shadow-lg">
            <Image
              src={flagImageUrl}
              alt={`${countryName} flag`}
              width={24}
              height={16}
              className="w-24 h-16 object-cover rounded"
            />
          </div>
          <div className="p-4">
            <h3
              className={`text-lg font-semibold text-gray-800 text-center ${fontPoppins.className}`}
            >
              {countryName}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlagCard;
