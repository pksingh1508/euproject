import { fontMontserrat, fontPoppins } from "@/fonts";
import React from "react";

interface Section {
  title: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  point5?: string;
}

interface RefundPolicyData {
  refundPolicy: {
    mainHeading: string;
    [key: string]: Section | string;
  };
}

const refundPolicyData: RefundPolicyData = {
  refundPolicy: {
    mainHeading: "EU Career Serwis – Refund & Service Policy",
    heading1: {
      title: "Refund Eligibility",
      point1:
        "Refund percentages apply to the entire service fee, not partial payments.",
      point2:
        "Refunds are only considered if the full service fee has been paid in advance and no balance remains.",
      point3:
        "Only applicants who meet all eligibility criteria are entitled to refunds."
    },
    heading2: {
      title: "Advance Registration & Immigration Rules",
      point1: "Immigration rules may change based on future expectations.",
      point2:
        "To secure opportunities under the cap system, clients may register early—even before their qualifications are officially recognized.",
      point3:
        "By registering in advance, clients accept responsibility for preparing documentation before official announcements.",
      point4:
        "If eligibility is not met after updates, alternative options may be considered."
    },
    heading3: {
      title: "Chargeback Policy",
      point1:
        "Zero tolerance for chargebacks. Any customer disputing a valid payment will be permanently banned from EU Career Serwis services.",
      point2:
        "Outstanding balances will be forwarded to collections, and unpaid debts may be reported to credit bureaus."
    },
    heading4: {
      title: "Billing & Taxes",
      point1:
        "All invoices include the consultation fee plus applicable taxes.",
      point2:
        "Refunds, where applicable, are calculated only on service fees, not on third-party charges."
    },
    heading5: {
      title: "Rejection by Immigration/Visa Authorities",
      point1:
        "If your visa application is officially rejected, refunds will be processed as per the signed Agreement.",
      point2:
        "Clients must submit: Refund claim form, Rejection letter/stamp from authorities, Proof of payment (receipt).",
      point3:
        "Refunds are processed within 35 working days of receiving required documents.",
      point4: "Missing documents make the client ineligible for a refund."
    },
    heading6: {
      title: "Delays & Third-Party Services",
      point1:
        "EU Career Serwis is not liable for delays caused by external parties (e.g., couriers, consulates).",
      point2: "Service charges are non-refundable for such delays."
    },
    heading7: {
      title: "Non-Refundable External Fees",
      point1:
        "Fees paid to assessment bodies, immigration offices, embassies, or testing centers are non-refundable under any circumstances.",
      point2:
        "Our service fee strictly covers EU Career Serwis advisory and consulting services."
    },
    heading8: {
      title: "Online Payments & Card Transactions",
      point1:
        "Clients must notify EU Career Serwis immediately of any card-related issues.",
      point2:
        "Payments made via credit card/net banking cannot be disputed or reversed once authorized.",
      point3:
        "Any misuse or chargeback attempts will be defended with relevant authorities."
    },
    heading9: {
      title: "Service Charges & Pricing",
      point1:
        "Service fees are based on EU Career Serwis standards, not market prices.",
      point2:
        "Complaints regarding fees after registration will not be entertained."
    },
    heading10: {
      title: "Proof of Funds",
      point1:
        "Clients are responsible for meeting financial proof requirements set by immigration authorities.",
      point2:
        "Failure to demonstrate sufficient funds disqualifies refund eligibility."
    },
    heading11: {
      title: "Documentation & Timelines",
      point1:
        "Clients must provide all required documents within 30 days of request.",
      point2:
        "Failure to comply results in forfeiture of consulting/advisory fees."
    },
    heading12: {
      title: "Client Communication",
      point1:
        "Clients must inform EU Career Serwis of any correspondence or updates received from immigration offices within 7 days.",
      point2: "Failure to report such updates voids refund eligibility."
    },
    heading13: {
      title: "Interviews & Appointments",
      point1:
        "Clients are responsible for attending visa interviews and assessments at their own expense.",
      point2:
        "Missing scheduled interviews or failing to comply with instructions leads to forfeiture of fees."
    },
    heading14: {
      title: "Refund Exclusions",
      point1:
        "Refunds will not be granted if the client misses an immigration interview.",
      point2:
        "Refunds will not be granted if required medical, police, or financial documents are not provided.",
      point3:
        "Refunds will not be granted if language test requirements are not fulfilled.",
      point4:
        "Refunds will not be granted if additional requested documents are submitted late.",
      point5:
        "Refunds will not be granted if the client abandons the case or stops communication for more than 30 days."
    },
    heading15: {
      title: "Language Test & Dependents",
      point1: "Passing the required language test is mandatory.",
      point2:
        "Dependents (spouse/children over 18) must also meet language criteria, where applicable.",
      point3:
        "Failure to pass language requirements does not qualify for a refund."
    },
    heading16: {
      title: "Service Withdrawal & Termination",
      point1:
        "EU Career Serwis reserves the right to terminate services without refund if the client fails to provide accurate or truthful information.",
      point2:
        "Services may be terminated if there is evidence of misuse, fraud, or non-cooperation.",
      point3:
        "Services may be terminated if the client engages in behavior that obstructs service delivery."
    },
    heading17: {
      title: "Limitations of Liability",
      point1:
        "Immigration approvals are subject to government rules and cap systems.",
      point2:
        "Even if criteria are met, approvals may be denied once yearly limits are reached.",
      point3: "EU Career Serwis provides no job or visa guarantees."
    },
    heading18: {
      title: "Refund Processing Time",
      point1: "Eligible refunds are processed within 15–30 working days."
    },
    heading19: {
      title: "Client Responsibilities",
      point1:
        "Keep EU Career Serwis informed of any changes (address, marital status, legal cases, new family members, etc.).",
      point2: "Provide accurate, updated information at all times.",
      point3: "Ensure full compliance with visa requirements and documentation."
    },
    heading20: {
      title: "Confidentiality & Data Protection",
      point1:
        "EU Career Serwis protects all client data under applicable privacy laws.",
      point2:
        "Information is used only for immigration and consulting purposes, never for unauthorized use."
    },
    heading21: {
      title: "Governing Law",
      point1: "EU Career Serwis operates under the laws of Poland.",
      point2:
        "Jurisdiction for disputes lies exclusively with Warsaw, Masovian State Courts."
    },
    heading22: {
      title: "Force Majeure",
      point1:
        "EU Career Serwis is not liable for delays caused by events beyond control (strikes, wars, natural disasters, epidemics, government restrictions, etc.)."
    },
    heading23: {
      title: "Final Agreement",
      point1:
        "By signing up for services, clients confirm they have read, understood, and accepted these terms.",
      point2: "Refunds are strictly limited to the conditions outlined above.",
      point3:
        "Once services have started, withdrawal or refund requests will not be accepted unless specifically covered under this policy."
    }
  }
};

const RefundPolicy: React.FC = () => {
  const renderSection = (section: Section, index: number) => {
    const sectionNumber = index + 1;

    return (
      <section key={`section-${sectionNumber}`} className="mb-8">
        <h2
          className={`text-xl font-semibold text-gray-800 mb-4 ${fontMontserrat.className}`}
        >
          {sectionNumber}. {section.title}
        </h2>

        <div className="space-y-2">
          {/* Render all points */}
          {Object.entries(section)
            .filter(([key, value]) => key.startsWith("point") && value)
            .sort(([a], [b]) => {
              const numA = parseInt(a.replace("point", ""));
              const numB = parseInt(b.replace("point", ""));
              return numA - numB;
            })
            .map(([key, value]) => (
              <div
                key={key}
                className={`text-gray-700 leading-relaxed ${fontPoppins.className}`}
              >
                • {value}
              </div>
            ))}
        </div>
      </section>
    );
  };

  const sections = Object.entries(refundPolicyData.refundPolicy)
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
            {refundPolicyData.refundPolicy.mainHeading}
          </h1>
          <div className="w-24 h-2 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Sections */}
        <div className={`prose prose-gray max-w-none ${fontPoppins.className}`}>
          {sections.map((section, index) => renderSection(section, index))}
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
