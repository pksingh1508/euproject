import { TermsAndConditions } from "@/components/Privacy/TermsAndConditions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions | EU Prime Serwis",
  description: "Our terms and conditions for using EU Prime Serwis"
};

export default function page() {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
}
