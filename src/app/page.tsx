import { CustomHero } from "@/components/common/CustomHero";
import RotatingCircle from "@/components/common/RotatingCircle";
import { StepWork } from "@/components/common/StepWork";
import { StepWorkBulletPoint } from "@/components/common/StepWorkBulletPoint";
import { RecentBlog } from "@/components/home/RecentBlog";
import { Testimonials } from "@/components/home/Testimonials";
import { TopBanner } from "@/components/home/TopBanner";
import WhyUs from "@/components/home/WhyUs";
import { NewsSection } from "@/components/Immigration_FAQ/NewsSection";

export default function Home() {
  const workButtons = [
    { text: "Poland" },
    { text: "Lithuania" },
    { text: "Germany" },
    { text: "Croatia" }
  ];
  const migrateButtons = [
    { text: "Poland" },
    { text: "Slovakia" },
    { text: "Germany" },
    { text: "Czech Republic" }
  ];
  const investButtons = [
    { text: "Stock" },
    { text: "Crypto" },
    { text: "Real State" }
  ];
  const registerCompanyButtons = [
    { text: "Liability Company" },
    { text: "Join-Stack Company" },
    { text: "European Company" },
    { text: "Sole Proprietorship" }
  ];
  return (
    <div>
      <TopBanner />
      {/* Home Page */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/home_about.webp"
        imageAlt="Home Section"
        heading="EU Immigration & Visa expert consultancy"
        paragraph1="EU Prime Serwis is a leading European consultancy specializing in employment visas, career services, and international recruitment. As a trusted B2B and B2C migration advisor, we provide expert guidance to individuals and businesses navigating immigration and workforce solutions. We recruit skilled, semi-skilled, and unskilled workers, ensuring smooth job placements across Europe. Our expertise helps businesses secure top talent while supporting individuals in advancing their careers. The District Court for the Capital City of Warsaw in Poland, 13th Commercial Division of the National Court Register (KRS: 0001133506, NIP: 7011228130), we are a legally recognized and reliable firm, dedicated to delivering efficient, professional, and expert recruitment and immigration services."
        paragraph2="EU Prime Serwis to wiodąca europejska firma konsultingowa specjalizująca się w wizach pracowniczych, usługach kariery i rekrutacji międzynarodowej. Jako zaufany doradca ds. migracji B2B i B2C zapewniamy fachowe doradztwo osobom i firmom poruszającym się po rozwiązaniach imigracyjnych i kadrowych. Rekrutujemy wykwalifikowanych, półwykwalifikowanych i niewykwalifikowanych pracowników, zapewniając płynne zatrudnienie w całej Europie. Nasza wiedza specjalistyczna pomaga firmom pozyskiwać najlepsze talenty, jednocześnie wspierając osoby w rozwoju ich kariery. Sąd Rejonowy dla m. st. Warszawy w Polsce, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego(KRS: 0001133506) jesteśmy prawnie uznaną i niezawodną firmą, która poświęca się świadczeniu wydajnych, profesjonalnych i eksperckich usług rekrutacyjnych i imigracyjnych."
        paragraph3=""
        paragraph4=""
      />
      {/* why eu price serwis component */}
      <WhyUs />
      <RotatingCircle />
      {/* Work Section */}
      <CustomHero
        heading="Work"
        paragraph1="Choose your preferred country and take the first step towards your dream job. Start your career today with personalized guidance and opportunities tailored to you."
        paragraph2=""
        buttons={workButtons}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/study.webp"
        imageAlt="Work Section"
        isReversed
      />
      <RotatingCircle />
      {/* Migrate section */}
      <CustomHero
        heading="Migrate"
        paragraph1="Migrate to Europe and unlock new opportunities with expert immigration guidance. Start your journey today with seamless support and professional assistance."
        paragraph2=""
        buttons={migrateButtons}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/migrate.webp"
        imageAlt="Migrate Section"
      />
      <RotatingCircle />
      {/* Invest */}
      <CustomHero
        heading="Invest"
        paragraph1="Invest in Europe and unlock profitable opportunities across diverse industries. Let our expert team guide you to successful investments and long-term growth."
        paragraph2=""
        buttons={investButtons}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/invest-bg.webp"
        imageAlt="Invest Section"
        isReversed
      />
      <RotatingCircle />
      {/* Register Company */}
      <CustomHero
        heading="Register Company"
        paragraph1="Consult with EU PRIME SERWIS lawyers to register your company in Poland and ensure legal compliance every step of the way."
        paragraph2=""
        buttons={registerCompanyButtons}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/registered-company-bg.webp"
        imageAlt="Register Company Section"
      />
      <RotatingCircle />
      {/* Our Serwis */}
      <CustomHero
        heading="Our Serwis"
        paragraph1="EU Prime Serwis offers a wide range of professional services to support your move and success in Europe. From work and business visas to investment, migration, and residency applications, we handle it all. Our team also provides expert help with permit renewals, document translation, health insurance, tax advisory, and accommodation support. With many services under one roof, Eu Prime Serwis is your trusted partner for a smooth experience."
        paragraph2=""
        buttons={[]}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/our-services-bg.webp"
        imageAlt="Our Serwis Section"
        isReversed
      />
      <RotatingCircle />
      {/* become partner */}
      <CustomHero
        heading="Become Partner"
        paragraph1="Partner with EU Prime Serwis and grow with us. We are always open to collaboration with agencies, consultants, and businesses who share our vision of delivering trusted and efficient services across Europe. Whether you're involved in recruitment, legal advisory, travel, or relocation support, partnering with Prime Serwis means expanding your reach and offering more value to your clients. Join us and be part of a reliable network committed to excellence and success."
        paragraph2=""
        buttons={[]}
        imageSrc="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/our-partener.webp"
        imageAlt="Become Partner Section"
      />
      <RotatingCircle />
      {/* For Employer */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/work-bg.webp"
        imageAlt="For Employer Section"
        heading="For Employer"
        paragraph="At Prime Serwis, we connect employers with qualified candidates from diverse backgrounds to meet your workforce needs efficiently. Our candidate pool includes:"
        bullet1="Individuals in Poland and the EU with valid work permits, TRC, or visas"
        bullet2="International students currently residing in Poland or other EU countries"
        bullet3="Skilled and non-skilled professionals from Asia, Africa, and CIS countries"
        bullet4="End-to-end support with visa processes and legal documentation"
        bullet5="Fast, reliable, and flexible hiring solutions"
        bullet6="Trusted expertise in international recruitment and workforce integration"
        bullet7=""
      />

      <RotatingCircle />
      {/* TODO: Recent Blogs */}
      <RecentBlog />
      {/* TODO: NewsAndFAQs */}
      <RotatingCircle />
      <NewsSection />
      {/* TODO: Testimonials */}
      <RotatingCircle />
      <Testimonials />
    </div>
  );
}
