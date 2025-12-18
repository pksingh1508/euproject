import { fontMontserrat, fontPoppins } from "@/fonts";
import React from "react";

interface SubSection {
  subTitle: string;
  subPara1: string;
  subPara2?: string;
}

interface Section {
  title: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string | SubSection;
}

interface AntiFraudData {
  antiFraudPolicy: {
    mainHeading: string;
    [key: string]: Section | string;
  };
}

const antiFraudData: AntiFraudData = {
  antiFraudPolicy: {
    mainHeading: "EU Prime Serwis - Payment and Service Policy",
    heading1: {
      title: "Making Payments to EU Prime Serwis",
      paragraph1:
        "All payments must be made directly to EU Prime Serwis. Upon payment, clients may request an official receipt. The company always issues receipts for every payment received.",
      paragraph2:
        "All payments are also acknowledged in our central software system. For any queries related to your fees or payment details, you may contact us at info@eucareerserwis.pl"
    },
    heading2: {
      title: "Payments to Employees",
      paragraph1:
        "Clients are strictly advised not to make any additional payments to EU Prime Serwis employees.",
      paragraph2:
        "If any staff member offers to prepare your profile, arrange documents, or request money for personal services, please inform management immediately so that corrective measures can be taken.",
      paragraph3: {
        subTitle: "Responsibility",
        subPara1:
          "The company will not be liable for any verbal or written agreements you enter into with an employee or their reference.",
        subPara2:
          "If you have already made such payments, EU Prime Serwis cannot be held responsible for the outcome."
      }
    },
    heading3: {
      title: "Vendors Referred by Employees",
      paragraph1:
        "EU Prime Serwis does not authorise staff to recommend vendors.",
      paragraph2:
        "Using vendors suggested by an employee is discouraged, as it may expose clients to fraud.",
      paragraph3:
        "The company will not be responsible for any financial losses resulting from such referrals."
    },
    heading4: {
      title: "Accuracy of Information and Documentation",
      paragraph1:
        "EU Prime Serwis processes cases solely based on the information provided by clients, assuming it is truthful and accurate.",
      paragraph2:
        "The company does not prepare documents on behalf of applicants.",
      paragraph3: {
        subTitle: "Fraudulent Documentation",
        subPara1:
          "Submission of false, misleading, or fraudulent documents is strictly prohibited.",
        subPara2:
          "Cases based on fraudulent data will not be accepted, and EU Prime Serwis cannot be held accountable."
      }
    },
    heading5: {
      title: "Preventing Fraud and Scams",
      paragraph1:
        "Dishonest staff may attempt to persuade applicants to submit forged documents for visa applications. This is strictly prohibited and could result in rejection and legal investigation.",
      paragraph2:
        "Employees cannot influence visa application processing times or decisions, regardless of any payments or promises. Visa outcomes are determined only by authorised visa officers.",
      paragraph3: {
        subTitle: "Scam Awareness",
        subPara1:
          "Beware of individuals posing as visa officers. Genuine officers conduct meetings exclusively in official embassy or consulate premises and never solicit payments.",
        subPara2:
          "Be cautious of fake websites, job scams, or offers that seem 'too good to be true'."
      }
    },
    heading6: {
      title: "Fraud Consequences in Europe",
      paragraph1:
        "Some applicants have been misled by unethical staff into providing false documents or entering illegal arrangements. Such practices carry serious risks.",
      paragraph2:
        "Immigration authorities in Poland, Portugal, Germany, and other EU countries enforce zero tolerance for fraud.",
      paragraph3: {
        subTitle: "Consequences",
        subPara1: "Immediate visa refusal and a ten-year entry ban.",
        subPara2:
          "Potential legal action under criminal law. Applicants remain personally responsible for their visa submissions."
      }
    },
    heading7: {
      title: "Company Position on Honesty",
      paragraph1:
        "EU Prime Serwis management strongly advises clients to provide only truthful and accurate details when completing their profiles.",
      paragraph2:
        "Fraudulent activity or misrepresentation can lead to a long-term ban and legal penalties.",
      paragraph3:
        "Clients must remain vigilant against individuals who attempt to exploit their situation."
    },
    heading8: {
      title: "Employment and Education Services",
      paragraph1:
        "EU Prime Serwis is a leading overseas career consulting firm in Poland and one of the largest B2C and B2B immigration consultancies in Europe.",
      paragraph2:
        "Company Registration Numbers: REGON: 382604058, NIP: 5252780856, KRS: 0000770916.",
      paragraph3: {
        subTitle: "Collaboration",
        subPara1:
          "The company collaborates with international universities, employers, and placement agencies to facilitate opportunities.",
        subPara2:
          "However, EU Prime Serwis does not guarantee employment or university admission, nor does it charge candidates for confirmations."
      }
    },
    heading9: {
      title: "Guarantees and Limitations",
      paragraph1:
        "EU Prime Serwis cannot guarantee a job offer, university admission, or visa outcome.",
      paragraph2:
        "Final decisions rest exclusively with immigration authorities, employers, and universities.",
      paragraph3:
        "Employees are not authorised to make promises about guaranteed outcomes."
    },
    heading10: {
      title: "Contact Information",
      paragraph1:
        "For questions or complaints, clients may reach out to our Service Integrity Officer at: +48 22 208 5497.",
      paragraph2:
        "Our Job Search Service for students includes Resume Writing, LinkedIn Profile Optimisation, and Resume Marketing.",
      paragraph3:
        "This is not a placement or recruitment service and does not guarantee employment or admission."
    },
    heading11: {
      title: "Legal Compliance",
      paragraph1:
        "All services are delivered exclusively through our Registered Centres.",
      paragraph2:
        "Official company websites operate across more than five European countries.",
      paragraph3:
        "Registration Numbers: REGON: 382604058, NIP: 5252780856, KRS: 0000770916."
    }
  }
};

const AntiFraudPolicy: React.FC = () => {
  const renderSection = (section: Section, index: number) => {
    const sectionNumber = index + 1;

    return (
      <section key={`section-${sectionNumber}`} className="mb-8">
        <h2
          className={`text-xl font-semibold text-gray-800 mb-4 ${fontMontserrat.className}`}
        >
          {sectionNumber}. {section.title}
        </h2>

        <div className="space-y-3">
          {/* Render paragraph1 */}
          {section.paragraph1 && (
            <p
              className={`text-gray-700 leading-relaxed mb-2 ${fontPoppins.className}`}
            >
              {section.paragraph1}
            </p>
          )}

          {/* Render paragraph2 */}
          {section.paragraph2 && (
            <p
              className={`text-gray-700 leading-relaxed mb-2 ${fontPoppins.className}`}
            >
              {section.paragraph2}
            </p>
          )}

          {/* Render paragraph3 - can be either string or SubSection */}
          {section.paragraph3 && (
            <>
              {typeof section.paragraph3 === "string" ? (
                <p
                  className={`text-gray-700 leading-relaxed mb-2 ${fontPoppins.className}`}
                >
                  {section.paragraph3}
                </p>
              ) : (
                <div className="mt-4">
                  <h3
                    className={`text-lg font-medium text-gray-800 mb-2 ${fontPoppins.className}`}
                  >
                    {section.paragraph3.subTitle}
                  </h3>
                  <ul className="ml-6 space-y-1">
                    <li
                      className={`text-gray-700 list-disc ${fontPoppins.className}`}
                    >
                      {section.paragraph3.subPara1}
                    </li>
                    {section.paragraph3.subPara2 && (
                      <li
                        className={`text-gray-700 list-disc ${fontPoppins.className}`}
                      >
                        {section.paragraph3.subPara2}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    );
  };

  const sections = Object.entries(antiFraudData.antiFraudPolicy)
    .filter(
      ([key, value]) => key.startsWith("heading") && typeof value === "object"
    )
    .sort(([a], [b]) => {
      const numA = parseInt(a.replace("heading", ""));
      const numB = parseInt(b.replace("heading", ""));
      return numA - numB;
    })
    .map(([key, value]) => value as Section);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl font-bold text-gray-900 mb-2 ${fontPoppins.className}`}
          >
            {antiFraudData.antiFraudPolicy.mainHeading}
          </h1>
          <div className="w-24 h-2 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Sections */}
        <div className="prose prose-gray max-w-none">
          {sections.map((section, index) => renderSection(section, index))}
        </div>
      </div>
    </div>
  );
};

export default AntiFraudPolicy;
