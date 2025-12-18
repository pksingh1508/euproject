"use client";
import { fontMontserrat, fontPoppins } from "@/fonts";
import React from "react";

interface SubParagraphs {
  [key: string]: string;
}

interface Section {
  title: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
  paragraph7?: string;
  paragraph8?: string;
  subParagraphs: SubParagraphs;
}

interface TermsData {
  termsAndConditions: {
    mainHeading: string;
    [key: string]: Section | string;
  };
}

const termsData: TermsData = {
  termsAndConditions: {
    mainHeading: "EU Prime Serwis – Terms and Conditions",
    heading1: {
      title: "Company Overview and Data Protection Commitment",
      paragraph1:
        "EU Prime Serwis (NIP , KRS:  , REGON:  ) is committed to maintaining the highest standards of confidentiality and privacy. We operate in full compliance with European and Polish data protection regulations, including the General Data Protection Regulation (GDPR).",
      paragraph2:
        "All reasonable steps are taken to protect client information from unauthorized access, misuse, loss, alteration, or disclosure.",
      paragraph3:
        "Data is collected exclusively for business operations, legal compliance, client communication, and service improvement.",
      paragraph4:
        "Client data will never be disclosed to third parties without explicit consent, unless required by law.",
      paragraph5:
        "By engaging with EU Prime Serwis, clients acknowledge and agree to these terms and our data protection practices.",
      subParagraphs: {}
    },
    heading2: {
      title: "Scope of Services and Client Eligibility",
      paragraph1:
        "EU Prime Serwis provides consultancy and advisory support in immigration, legal, and regulatory processes.",
      paragraph2:
        "Services include assistance with document preparation, application guidance, and procedural support.",
      paragraph3:
        "Service scope may differ depending on the client's individual needs.",
      paragraph4:
        "All immigration and regulatory outcomes remain at the sole discretion of competent authorities.",
      paragraph5:
        "EU Prime Serwis does not guarantee successful immigration approvals, employment offers, or related outcomes.",
      paragraph6:
        "Services are advisory in nature and are not a substitute for formal legal advice.",
      subParagraphs: {}
    },
    heading3: {
      title: "Payment Conditions",
      paragraph1:
        "All service fees must be paid in full before commencement of the consulting process.",
      paragraph2:
        "EU Prime Serwis charges are separate from external costs such as fees charged by:",
      paragraph3:
        "Clients are solely responsible for covering these third-party fees.",
      subParagraphs: {
        subParagraph1: "Immigration authorities",
        subParagraph2: "Consulates",
        subParagraph3: "Testing centers",
        subParagraph4: "Other regulatory entities"
      }
    },
    heading4: {
      title: "Refund Eligibility",
      paragraph1:
        "Refund eligibility applies only to clients who have paid the full service fee without outstanding balances.",
      paragraph2:
        "Refunds are limited to consulting fees paid to EU Prime Serwis and exclude non-refundable taxes or administrative charges.",
      paragraph3:
        "Refunds may be considered if an application is officially rejected by the relevant authority, provided that:",
      paragraph4:
        "Approved refunds are processed within 15–30 working days, subject to potential external delays.",
      subParagraphs: {
        subParagraph1:
          "The client submits a complete Online Refund Claim Form.",
        subParagraph2:
          "Supporting documents, such as a formal rejection letter, are provided."
      }
    },
    heading5: {
      title: "Force Majeure and Exceptional Circumstances",
      paragraph1:
        "EU Prime Serwis is not responsible for service disruptions caused by events outside its control, including:",
      paragraph2: "Natural disasters",
      paragraph3: "Pandemics",
      paragraph4: "Acts of war or terrorism",
      paragraph5: "Government restrictions",
      paragraph6: "Significant changes in immigration policy",
      paragraph7:
        "In such cases, services will resume once feasible. Refunds are not issued for delays caused by uncontrollable circumstances.",
      paragraph8:
        "If a procedural issue on the company's part affects a client's case, EU Prime Serwis may review the matter in good faith and, at its discretion, provide a partial refund or alternative resolution.",
      subParagraphs: {}
    },
    heading6: {
      title: "Third-Party Fees and Charges",
      paragraph1:
        "Service fees paid to EU Prime Serwis are entirely separate from third-party fees (immigration authorities, testing centers, consulates, etc.).",
      paragraph2:
        "These external charges remain the sole responsibility of the client.",
      paragraph3:
        "EU Prime Serwis fees are determined independently to reflect service quality and cannot be contested once registration is completed.",
      paragraph4:
        "Refunds or transfers of services are not permitted if the client voluntarily discontinues services.",
      subParagraphs: {}
    },
    heading7: {
      title: "Confidentiality and Data Protection Obligations",
      paragraph1:
        "EU Prime Serwis guarantees full compliance with GDPR standards, ensuring client data remains confidential and secure.",
      paragraph2:
        "Clients must provide accurate and complete information relevant to the immigration process.",
      paragraph3:
        "Withholding critical details (e.g., criminal history, financial background) may:",
      paragraph4:
        "Transparency and cooperation are required to ensure effective consultancy.",
      subParagraphs: {
        subParagraph1: "Negatively impact the immigration case.",
        subParagraph2: "Lead to disqualification from refund eligibility."
      }
    },
    heading8: {
      title: "Limited Liability in Case of Immigration Policy Changes",
      paragraph1:
        "EU Prime Serwis cannot control or predict government policy changes, quota limits, or procedural updates.",
      paragraph2: "Such changes may affect:",
      paragraph3:
        "Clients accept that EU Prime Serwis is not responsible for visa denials or delays resulting from policy or regulatory changes.",
      paragraph4: "Refunds will not be issued under these circumstances.",
      subParagraphs: {
        subParagraph1: "Eligibility criteria",
        subParagraph2: "Timelines",
        subParagraph3: "Final outcomes"
      }
    },
    heading9: {
      title: "No Guarantee of Outcome or Employment",
      paragraph1: "EU Prime Serwis cannot guarantee:",
      paragraph2:
        "Final decisions lie exclusively with relevant government authorities, employers, and universities.",
      paragraph3:
        "Clients acknowledge that no consultant, employee, or partner of EU Prime Serwis may lawfully promise guaranteed results.",
      subParagraphs: {
        subParagraph1: "Immigration approval",
        subParagraph2: "Employment placement",
        subParagraph3: "University admission"
      }
    },
    heading10: {
      title: "Anti-Chargeback Policy",
      paragraph1:
        "Clients agree not to initiate chargebacks or cancel payments through their bank or financial institution.",
      paragraph2: "Any attempt to do so will result in:",
      subParagraphs: {
        subParagraph1: "Permanent blacklisting from EU Prime Serwis services.",
        subParagraph2: "Collection proceedings for outstanding balances.",
        subParagraph3: "Recovery of related costs through legal action."
      }
    },
    heading11: {
      title: "Communication and Timely Updates",
      paragraph1:
        "Clients are required to promptly update EU Prime Serwis regarding:",
      paragraph2: "Timely communication is essential to avoid:",
      subParagraphs: {
        subParagraph1:
          "Any official communication from immigration or regulatory authorities.",
        subParagraph2: "Changes to personal details or contact information.",
        subParagraph3: "Service delays",
        subParagraph4: "Interruptions",
        subParagraph5: "Loss of refund eligibility"
      }
    },
    heading12: {
      title: "Professional Integrity and Anti-Defamation Clause",
      paragraph1:
        "Clients are encouraged to raise grievances directly with the EU Prime Serwis support team for resolution.",
      paragraph2:
        "Any attempt to publicly defame, discredit, or damage the reputation of EU Prime Serwis without seeking resolution first may result in:",
      paragraph3:
        "EU Prime Serwis is committed to addressing issues professionally and constructively.",
      subParagraphs: {
        subParagraph1: "Termination of services.",
        subParagraph2: "Loss of refund eligibility."
      }
    },
    heading13: {
      title: "Final Agreement and Jurisdiction",
      paragraph1:
        "By accepting these Terms and Conditions, clients confirm their understanding and agreement regarding:",
      paragraph2:
        "All disputes fall under the jurisdiction of Polish courts and will be governed by Polish law.",
      paragraph3:
        "Clients are encouraged to request clarification on any term before engaging services.",
      paragraph4:
        "For assistance or inquiries, clients may contact EU Prime Serwis at info@eucareerserwis.com.",
      subParagraphs: {
        subParagraph1: "Refund policies",
        subParagraph2: "Data protection commitments",
        subParagraph3: "Client responsibilities"
      }
    }
  }
};

export const TermsAndConditions: React.FC = () => {
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
          {/* Render paragraphs */}
          {Object.entries(section)
            .filter(([key, value]) => key.startsWith("paragraph") && value)
            .sort(([a], [b]) => {
              const numA = parseInt(a.replace("paragraph", ""));
              const numB = parseInt(b.replace("paragraph", ""));
              return numA - numB;
            })
            .map(([key, value]) => (
              <p
                key={key}
                className={`text-gray-700 leading-relaxed mb-2 ${fontPoppins.className}`}
              >
                {value}
              </p>
            ))}

          {/* Render sub-paragraphs as bullet points */}
          {Object.keys(section.subParagraphs).length > 0 && (
            <ul className="ml-6 space-y-1 mt-3">
              {Object.entries(section.subParagraphs)
                .sort(([a], [b]) => {
                  const numA = parseInt(a.replace("subParagraph", ""));
                  const numB = parseInt(b.replace("subParagraph", ""));
                  return numA - numB;
                })
                .map(([key, value]) => (
                  <li
                    key={key}
                    className={`text-gray-700 list-disc ${fontPoppins.className}`}
                  >
                    {value}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    );
  };

  const sections = Object.entries(termsData.termsAndConditions)
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
            {termsData.termsAndConditions.mainHeading}
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
