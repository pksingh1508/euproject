import EmployerSection from "@/components/common/EmployerSection";
import React from "react";

export default function page() {
  const employerItems = [
    {
      id: "1",
      text: "Recruitment involves a one-time fee charged to the employer for the employment of a candidate."
    },
    {
      id: "2",
      text: "Employee leasing is conducted in accordance with the legislation governing temporary work. Additionally,"
    },
    {
      id: "3",
      text: "we offer outsourcing of personnel services, allowing the State to delegate certain tasks within the company to us."
    }
  ];
  return (
    <div>
      <EmployerSection heading="For Employer" items={employerItems} />
    </div>
  );
}
