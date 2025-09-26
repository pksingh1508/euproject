import PrivacyPolicy from "@/components/Privacy/PrivacyPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | EU Prime Serwis",
  description: "Our privacy policy for EU Prime Serwis"
};

export default function page() {
  return <PrivacyPolicy />;
}
