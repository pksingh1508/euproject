import AntiFraudPolicy from "@/components/Privacy/AntiFraudPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Anti Fraud Policy | EU Prime Serwis",
  description: "Our anti fraud policy for EU Prime Serwis"
};

export default function page() {
  return <AntiFraudPolicy />;
}
