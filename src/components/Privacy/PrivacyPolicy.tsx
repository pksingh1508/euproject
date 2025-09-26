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

interface PrivacyPolicyData {
  "term&Conditions": {
    mainHeading: string;
    [key: string]: Section | string;
  };
}

const privacyPolicyData: PrivacyPolicyData = {
  "term&Conditions": {
    mainHeading: "EU Career Serwis – Terms, Conditions & Policies",
    heading1: {
      title: "Organisation Affiliation & Disclaimer",
      point1:
        "EU Career Serwis charges a service fee and provides general information on immigration and job markets through its private publishing website www.atozserwisplus.pl.",
      point2:
        "We are not affiliated with any government, embassy, or consulate.",
      point3: "We are not a law firm and do not offer legal representation.",
      point4:
        "Information on our site is for guidance only and should not be considered legal advice.",
      point5:
        "By purchasing any service, you agree to be bound by our Terms of Use."
    },
    heading2: {
      title: "Certifications & Legitimacy",
      point1:
        "EU Career Serwis has undergone verification checks to prove legitimacy.",
      point2:
        "The company is registered in Poland and supported by legal professionals who ensure all services and documentation are compliant with regulations."
    },
    heading3: {
      title: "Intellectual Property Rights",
      point1:
        "The website content, including design, text, graphics, logos, and data, belongs to EU Career Serwis unless otherwise stated.",
      point2: "It is protected under Polish and international copyright law.",
      point3:
        "Unauthorised use, copying, or distribution is strictly prohibited and may lead to legal enforcement."
    },
    heading4: {
      title: "Limitation of Liability",
      point1:
        "EU Career Serwis shall not be held liable for any direct, indirect, or consequential damages resulting from the use of our services or website.",
      point2:
        "This limitation applies even if we have been informed of possible damages.",
      point3:
        "Some jurisdictions may not allow full limitations, in which case local law applies."
    },
    heading5: {
      title: "Legal Structure & Governing Law",
      point1:
        "By using our website or services, you agree to enter into a legally binding agreement with EU Career Serwis.",
      point2:
        "In case of disputes, the prevailing party may recover legal fees.",
      point3:
        "All matters will be governed under the jurisdiction of the Warsaw Courts, Poland."
    },
    heading6: {
      title: "Limitations for Personal Use",
      point1:
        "Services, content, and products are strictly for personal, non-commercial use.",
      point2:
        "You may not copy, modify, resell, or distribute our content without permission."
    },
    heading7: {
      title: "Pricing Errors & Typographical Mistakes",
      point1:
        "While we aim for accuracy, errors in pricing or details may occur.",
      point2:
        "EU Career Serwis reserves the right to refuse or cancel orders listed at incorrect prices.",
      point3: "Refunds will be processed if payment has already been made."
    },
    heading8: {
      title: "Bulletin & Newsletter Policy",
      point1:
        "Clients may subscribe to receive newsletters, guides, and updates.",
      point2: "You may unsubscribe at any time.",
      point3: "We do not sell subscriber data.",
      point4:
        "External links in bulletins are for information only, and EU Career Serwis is not responsible for third-party content."
    },
    heading9: {
      title: "Refund Policy",
      point1:
        "Non-refundable services: evaluations, guidebooks, directories, job search tools.",
      point2:
        "Refunds are not provided if: Client withdraws after payment; Documents are false or incomplete; Medical/security checks are failed; Funds are insufficient; Client has prior immigration violations.",
      point3: "Refunds, if approved, may take up to 45 working days.",
      point4: "Refunds are issued only via company check.",
      point5: "Clients agree not to initiate chargebacks."
    },
    heading10: {
      title: "Services & Products",
      point1:
        "Evaluations – profile assessments within 48 hours (non-refundable).",
      point2: "Immigration Guidance – consultancy and document support.",
      point3: "Guidebooks & Kits – informational resources for clients.",
      point4: "Directories – curated lists of employers and agencies.",
      point5: "Requisition Forms – official forms from government sources."
    },
    heading11: {
      title: "Copyright & Distribution Rules",
      point1: "Digital products are copyright-protected.",
      point2:
        "Sharing, copying, or republishing without permission is prohibited.",
      point3: "Violations will result in legal action."
    },
    heading12: {
      title: "Shipping Policy",
      point1: "Most products are delivered electronically via email.",
      point2:
        "Physical delivery (if applicable) is made to the address provided by the client.",
      point3: "We are not responsible for postal or courier delays."
    },
    heading13: {
      title: "Warranty Disclaimer",
      point1: "Services are provided on an as-is basis.",
      point2: "We do not guarantee visa approvals, employment, or residency.",
      point3: "Final decisions rest with government authorities."
    },
    heading14: {
      title: "Terms & Conditions Amendments",
      point1: "We may update or revise these terms without prior notice.",
      point2:
        "Continued use of services implies agreement with updated policies."
    },
    heading15: {
      title: "Data Protection & Privacy",
      point1: "EU Career Serwis follows strict privacy protocols.",
      point2:
        "Data is used only for service delivery and is never sold to third parties.",
      point3: "We comply with GDPR and Polish data protection laws."
    },
    heading16: {
      title: "GDPR Principles & Sensitive Data",
      point1: "Fairness, transparency, and lawfulness.",
      point2: "Limited use of data for specified purposes.",
      point3: "Accuracy and accountability.",
      point4:
        "Special protection for sensitive data (medical, biometric, criminal records).",
      point5:
        "Clients may request correction or deletion of their personal data."
    },
    heading17: {
      title: "Cookies & Tracking Technologies",
      point1: "Our website uses cookies to enhance functionality.",
      point2:
        "Clients may disable cookies, though this may limit certain features.",
      point3: "We do not use cookies for intrusive advertising."
    },
    heading18: {
      title: "Data Subject Rights",
      point1: "Request access to your data.",
      point2: "Correct inaccuracies.",
      point3: "Request deletion right to be forgotten.",
      point4: "Object to certain processing.",
      point5: "File a complaint with supervisory authorities."
    },
    heading19: {
      title: "CCPA Privacy Notice (California Residents)",
      point1: "You may request details about data collected.",
      point2: "You may request deletion of personal data.",
      point3: "We do not sell client data.",
      point4: "Requests may be made in writing or electronically."
    },
    heading20: {
      title: "Trademark & Legal Protection",
      point1: "EU Career Serwis, its name, and logo are protected trademarks.",
      point2: "Any misuse, imitation, or misrepresentation is prohibited.",
      point3:
        "We actively enforce our rights under Polish, EU, and international law."
    }
  }
};

const PrivacyPolicy: React.FC = () => {
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

  const sections = Object.entries(privacyPolicyData["term&Conditions"])
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
            {privacyPolicyData["term&Conditions"].mainHeading}
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

export default PrivacyPolicy;
