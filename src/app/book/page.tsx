import { BookAppointment } from "@/components/BookAppointment/BookAppointment";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Book Appointment | CountryNation",
  description: "Schedule a consultation with our experts"
};

export default function page() {
  return <BookAppointment />;
}
