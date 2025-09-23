import React from "react";
import RotatingCircle from "../common/RotatingCircle";

interface CompanyDataProps {
  className?: string;
}

const CompanyData: React.FC<CompanyDataProps> = ({ className = "" }) => {
  return (
    <div className={`bg-gray-50 p-4 md:p-6 lg:p-8 font-sans ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Our Solutions Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 font-bold text-lg mb-3 tracking-wide">
            Our Solutions -:
          </h2>
          <div className="flex flex-wrap gap-1 text-sm font-medium leading-relaxed">
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Job Seeker Registration
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Institutions
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employer Questionnaire
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Overseas Employee Recruiters
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Job Seeker Registration for Driver
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Job Seeker Registration for Welder
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Job Seeker Registration for Health Care and Medical job
            </a>
          </div>
        </div>

        {/* The EU Prime Serwis Solution Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 font-bold text-lg mb-3 tracking-wide">
            The EU Prime Serwis Solution -:
          </h2>
          <div className="flex flex-wrap gap-1 text-sm font-medium leading-relaxed">
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Poland – Employer of Record
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Poland Compensation & Benefits
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Poland Recruiting & Hiring
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Poland Payroll
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/our-serwis"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Poland Work Visas & Permits
            </a>
          </div>
        </div>

        {/* For Employer Section */}
        <div className="mb-8">
          <h2 className="text-blue-600 font-bold text-lg mb-3 tracking-wide">
            For Employer-:
          </h2>
          <div className="flex flex-wrap gap-1 text-sm font-medium leading-relaxed">
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employer's questionnaire
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employee leasing
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Recruitment of labour force from the East for the purposes of IT
              industry
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Recruitment employee from Ukraine, Belarus, Moldova, Georgia,
              India, Nepal and Bangladesh
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Delegating third-country nationals (non-EU) to work in the EU
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              How to hire an employee from Ukraine - step by step?
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employee recruitment
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employee leasing (temporary work)
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Outsourcing
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Work permit
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Declaration on entrusting work to a foreigner
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Posting of foreigners
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employees from Ukraine
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employees from India
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="/employer"
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Employees from Bangladesh
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-l-4 border-blue-500 pl-4 mb-8">
          <p className="text-gray-700 text-sm font-medium leading-relaxed">
            <span className="font-bold text-blue-600">Disclaimer:</span> EU
            Prime Serwis is a complimentary visa information platform and
            marketplace connecting users with immigration professionals. The
            information provided on this page is not intended as legal advice.
            For assistance with your application, please seek guidance from a
            qualified expert.
          </p>
        </div>

        <div className="py-7">
          <RotatingCircle />
        </div>

        {/* Bottom Section with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#1877f2] text-white p-6 rounded-lg">
          {/* Company Information */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 tracking-wide">
                Company Information
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-medium mb-3">
                Click the link to access detailed company information and
                verification procedures.
              </p>
              <button className="text-sm font-semibold underline hover:no-underline transition-all duration-200 text-blue-200 hover:text-white">
                Learn More →
              </button>
            </div>
          </div>

          {/* Government of Poland */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 tracking-wide">
                Government of Poland
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-medium mb-3">
                Click here to stay informed with the latest updates by regularly
                accessing the official government portal.
              </p>
              <button className="text-sm font-semibold underline hover:no-underline transition-all duration-200 text-blue-200 hover:text-white">
                Visit Portal →
              </button>
            </div>
          </div>

          {/* Work Information */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 tracking-wide">
                Work Information
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-medium mb-3">
                Click here to learn more about available work positions.
              </p>
              <button className="text-sm font-semibold underline hover:no-underline transition-all duration-200 text-blue-200 hover:text-white">
                View Jobs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
