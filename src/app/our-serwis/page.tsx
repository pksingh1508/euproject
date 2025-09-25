import { CustomHero } from "@/components/common/CustomHero";
import RotatingCircle from "@/components/common/RotatingCircle";
import { StepWork } from "@/components/common/StepWork";
import React from "react";

export default function page() {
  const OurSerwisButton = [
    { text: "Work Visa" },
    { text: "Business Visa" },
    { text: "Invest Services" },
    { text: "Migrate Assistance" },
    { text: "Visa Prep" },
    { text: "Resume Writing" },
    { text: "Cover Letter" },
    { text: "IELTS Prep" },
    { text: "Job Placement" },
    { text: "Document Translation" },
    { text: "Interview Prep" },
    { text: "Residency Application" },
    { text: "Permit Renewal" },
    { text: "Business Consultation" },
    { text: "Health Insurance" },
    { text: "Career Counselling" },
    { text: "Tax Advisory" },
    { text: "Accommodation Support" }
  ];

  const OurCoreSerwisButton = [
    { text: "Visa Assistance" },
    { text: "Permit Support" },
    { text: "Job Placement" },
    { text: "Document Preparation" },
    { text: "Residency Guidance" }
  ];

  const OurAdditionalSerwisButton = [
    { text: "Customized Councelling" },
    { text: "Interview Preparation" },
    { text: "Legal Compliance Check" },
    { text: "Emergency Assistance" }
  ];

  const OurValueAddedFeatureButton = [
    { text: "Family Relocation" },
    { text: "Dependent Visa" },
    { text: "Study Program" },
    { text: "Admission Assistance" }
  ];

  const OurFamilyAndEducationSupportButton = [
    { text: "Family Relocation" },
    { text: "Dependent Visa" },
    { text: "Study Program" },
    { text: "Admission Assistance" }
  ];

  const OurStudyAbroadGuidanceButton = [
    { text: "Program & Coursed" },
    { text: "Admission Help" },
    { text: "Study Visa Assistance" },
    { text: "Top Destinations" }
  ];

  const OurResumeSerwisButton = [
    { text: "Resume Writing" },
    { text: "ATS Optimization" },
    { text: "Mock Interview" },
    { text: "Cover Letter Help" }
  ];

  const OurCoachingSerwisButton = [
    { text: "IELTS Preps" },
    { text: "Polish, German Preps" },
    { text: "Exam Preparation" },
    { text: "Interview Preparation" }
  ];

  const OurAuthenticationSerwisButton = [
    { text: "Apostille Serwis" },
    { text: "Document Notarization" },
    { text: "Power of Attorney Prep" },
    { text: "Document Verification" }
  ];

  const OurStudentVisaButton = [{ text: "Poland" }];

  const OurExpertVisaApplicationAssistanceButton = [
    { text: "Poland" },
    { text: "Germany" },
    { text: "France" },
    { text: "Switzerland" }
  ];

  const OurWorkPermitVerificationButton = [
    { text: "Poland" },
    { text: "Slovakia" },
    { text: "Czech Republic" },
    { text: "Croatia" }
  ];

  return (
    <div>
      {/* first step  */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/our-services-bg.webp"
        imageAlt="Our serwis"
        heading="Our Serwis"
        paragraph1="EU Prime Serwis Is A Registered Entity In Poland That Works In Partnership With Various Employers To Offer An Extensive Array Of Job Opportunities. We Focus On The Recruitment Of Skilled, Semi-Skilled, And Unskilled Labor Across Multiple Sectors, Such As Information Technology, Healthcare, Construction, Logistics, Manufacturing, And Others."
        paragraph2="Our Proficiency And Extensive Network Allow Us To Match Dependable Talent With Esteemed Organizations, Facilitating Effective Employment Solutions. Collaborate With EU Prime SerwisFor Reliable Recruitment And Outsourcing Services Customized To Fulfill Industry Requirements."
        paragraph3=""
        paragraph4=""
      />

      <RotatingCircle />

      {/* our serwis part */}
      <CustomHero
        imageAlt="Our serwis Lists"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/our-serwis-abouts-bg.webp"
        heading="Our Serwis Lists"
        paragraph1=""
        paragraph2=""
        buttons={OurSerwisButton}
        isReversed
      />

      <RotatingCircle />

      {/* our core serwis */}
      <CustomHero
        imageAlt="Our core serwis"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/core-serwis-bg.webp"
        heading="Our Core Serwis"
        paragraph1="We Provide Visa Assistance, Permit Support, And Job Placement To Simplify Your Journey. Our Services Also Include Document Preparation And Residency Guidance For Seamless Relocation."
        paragraph2=""
        buttons={OurCoreSerwisButton}
      />

      <RotatingCircle />

      {/* Additional Serwis */}
      <CustomHero
        imageAlt="Additional Serwis"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/additiona-serwies-bg.webp"
        heading="Additional Serwis"
        paragraph1="We Offer Customized CounselingFor Personalized Guidance, Interview Preparation To Boost Performance, Legal Compliance Checks To Ensure Regulations Are Met, And Emergency Assistance For Urgent Support."
        paragraph2=""
        buttons={OurAdditionalSerwisButton}
        isReversed
      />

      <RotatingCircle />

      {/* Value Added Feature */}
      <CustomHero
        imageAlt="Value Added Feature"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/valued-and-female-new.webp"
        heading="Value Added Feature"
        paragraph1="Our Family And Education Support Service Ensures Seamless Relocation, From Dependent Visas To Family Integration. We Also Provide Guidance For Education Planning, Scholarships, And Skill Enhancement Programs."
        paragraph2=""
        buttons={OurValueAddedFeatureButton}
      />

      <RotatingCircle />

      {/* Family and Eduction Support */}
      <CustomHero
        imageAlt="Family and Eduction Support"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/family-collection-bg.webp"
        heading="Family and Eduction Support"
        paragraph1="Our Family And Education Support Service Ensures Seamless Relocation, From Dependent Visas To Family Integration. We Also Provide Guidance For Education Planning, Scholarships, And Skill Enhancement Programs."
        paragraph2=""
        buttons={OurFamilyAndEducationSupportButton}
        isReversed
      />

      <RotatingCircle />

      {/* Study Abroad Guidance */}
      <CustomHero
        imageAlt="Study Abroad Guidance"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/study-abroad-guidance-bg.webp"
        heading="Study Abroad Guidance"
        paragraph1="Our Study Abroad Guidance Service Assists Students In Exploring Global Education Opportunities. From Admission To Visas, We Provide Complete Support For Overseas Studies."
        paragraph2=""
        buttons={OurStudyAbroadGuidanceButton}
      />

      <RotatingCircle />

      {/* Resume Serwis */}
      <CustomHero
        imageAlt="Resume Serwis"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/resume-serwis-bg.webp"
        heading="Resume Serwis"
        paragraph1="Our Resume Service Helps Craft Professional, ATS-Friendly Resumes Tailored To Your Desired Industry. We Also Offer Editing, Formatting, And Personalized Advice To Enhance Your Career Prospects."
        paragraph2=""
        buttons={OurResumeSerwisButton}
        isReversed
      />

      <RotatingCircle />

      {/* Coaching Serwis for Students */}
      <CustomHero
        imageAlt="Coaching Serwis for Students"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/coaching-serwis-bg.webp"
        heading="Coaching Serwis for Students"
        paragraph1="Our Student Coaching Service Offers Personalized Guidance For Career Growth And Exam Readiness, Empowering Students To Achieve Their Academic And Professional Goals."
        paragraph2=""
        buttons={OurCoachingSerwisButton}
      />

      <RotatingCircle />

      {/* Authentication Serwis */}
      <CustomHero
        imageAlt="Authentication Serwis"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/authentication-serwis-bg.webp"
        heading="Authentication Serwis"
        paragraph1="Our Authentication Service Verifies And Validates Crucial Documents To Ensure Their Legal Acceptability. We Provide Swift And Reliable Support For All Your Document Authentication Needs."
        paragraph2=""
        buttons={OurAuthenticationSerwisButton}
        isReversed
      />
      <RotatingCircle />

      {/* Student Visa */}
      <CustomHero
        imageAlt="Student Visa"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/select-consult-bg.webp"
        heading="Student Visa"
        paragraph1="Migrate To Europe and Unlock New Opportunities with Expert Immigration Guidance. Start Your Journey Today with Seamless Support and Professional Assistance."
        paragraph2=""
        buttons={OurStudentVisaButton}
      />
      <RotatingCircle />

      {/* Expert Visa Application Assistance */}
      <CustomHero
        imageAlt="Expert Visa Application Assistance"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/expert-visa-allication.webp"
        heading="Expert Visa Application Assistance"
        paragraph1="Simplify your visa process with our expert application preparation services for seamless and successful results."
        paragraph2=""
        buttons={OurExpertVisaApplicationAssistanceButton}
        isReversed
      />
      <RotatingCircle />

      {/* Work Permit Verification */}
      <CustomHero
        imageAlt="Work Permit Verification"
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/serwis/verify-work.webp"
        heading="Work Permit Verification"
        paragraph1="Our services offer reliable and efficient work permit verification, prioritizing professionalism to ensure a seamless and stress-free process. We strive to instill complete confidence in the authenticity of your documents."
        paragraph2=""
        buttons={OurWorkPermitVerificationButton}
      />
    </div>
  );
}
