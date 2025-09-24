import RotatingCircle from "@/components/common/RotatingCircle";
import { ContactContainer } from "@/components/contact/ContactContainer";
import { LocationMap } from "@/components/contact/LocationMap";
import React from "react";

export default function page() {
  return (
    <div className="w-full bg-white pb-10">
      <ContactContainer />
      <RotatingCircle />
      <div className="my-10">
        <LocationMap />
      </div>
      <RotatingCircle />
    </div>
  );
}
