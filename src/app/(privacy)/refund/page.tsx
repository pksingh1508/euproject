import RefundPolicy from "@/components/Privacy/RefundPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Refund Policy | EU Prime Serwis",
  description: "Our refund policy for EU Prime Serwis"
};

export default function page() {
  return <RefundPolicy />;
}
