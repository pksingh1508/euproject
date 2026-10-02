import RotatingCircle from "@/components/common/RotatingCircle";
import { ContactContainer } from "@/components/contact/ContactContainer";
import { LocationMap } from "@/components/contact/LocationMap";
import React from "react";

export default function page() {
  return (
    <div className="w-full pb-10">
      <ContactContainer />
      <RotatingCircle />
      <LocationMap />
    </div>
  );
}
