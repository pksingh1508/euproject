import RotatingCircle from "@/components/common/RotatingCircle";
import { StepWork } from "@/components/common/StepWork";
import React from "react";

export default function page() {
  return (
    <div>
      <StepWork
        image="/assets/home/home-aboutus-new.jpg"
        imageAlt="Home Section"
        heading="EU Immigration & Visa expert consultancy"
        paragraph1="EU Prime Serwis is a leading European consultancy specializing in employment visas, career services, and international recruitment. As a trusted B2B and B2C migration advisor, we provide expert guidance to individuals and businesses navigating immigration and workforce solutions. We recruit skilled, semi-skilled, and unskilled workers, ensuring smooth job placements across Europe. Our expertise helps businesses secure top talent while supporting individuals in advancing their careers. The District Court for the Capital City of Warsaw in Poland, 13th Commercial Division of the National Court Register (KRS: 0001133506, NIP: 7011228130), we are a legally recognized and reliable firm, dedicated to delivering efficient, professional, and expert recruitment and immigration services."
        paragraph2="EU Prime Serwis to wiodąca europejska firma konsultingowa specjalizująca się w wizach pracowniczych, usługach kariery i rekrutacji międzynarodowej. Jako zaufany doradca ds. migracji B2B i B2C zapewniamy fachowe doradztwo osobom i firmom poruszającym się po rozwiązaniach imigracyjnych i kadrowych. Rekrutujemy wykwalifikowanych, półwykwalifikowanych i niewykwalifikowanych pracowników, zapewniając płynne zatrudnienie w całej Europie. Nasza wiedza specjalistyczna pomaga firmom pozyskiwać najlepsze talenty, jednocześnie wspierając osoby w rozwoju ich kariery. Sąd Rejonowy dla m. st. Warszawy w Polsce, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego(KRS: 0001133506) jesteśmy prawnie uznaną i niezawodną firmą, która poświęca się świadczeniu wydajnych, profesjonalnych i eksperckich usług rekrutacyjnych i imigracyjnych."
        paragraph3=""
        paragraph4=""
      />
      <RotatingCircle />
    </div>
  );
}
