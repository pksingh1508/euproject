"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Flag from "react-country-flag";
import axios from "axios";
import toast from "react-hot-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import countryData from "@/constants/countrycode.json";
import { Button } from "../ui/button";

interface CountryCode {
  country: string;
  code: string;
  iso: string;
}

export function ContactForm() {
  const termsId = React.useId();
  const [detectedCountry, setDetectedCountry] = useState<CountryCode>(
    countryData.find((c) => c.iso === "US") || countryData[0]
  );
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(detectedCountry);

  // useEffect for auto-detect the country
  React.useEffect(() => {
    // Detect country via IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          const userCountry =
            countryData.find((c) => c.iso === data.country_code) ||
            detectedCountry;
          setDetectedCountry(userCountry);
          setSelectedCountry(userCountry);
        }
      })
      .catch(() => {
        // Keep the default country if detection fails.
      });
  }, []);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    subject: "",
    message: "",
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "",
      subject: "",
      message: "",
      acceptTerms: false
    });
    setSelectedCountry(detectedCountry);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.userType ||
      !formData.subject ||
      !formData.message ||
      !formData.acceptTerms
    ) {
      console.error("Please fill in all required fields");
      return;
    }

    // Set loading to true when starting the API call
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: `${selectedCountry.code} ${formData.phone}`,
        option: formData.userType,
        subject: formData.subject,
        message: formData.message
      });
      if (res.status === 200) {
        clearForm();
        toast.success("Form submitted successfully");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      // Set loading to false when API call completes (success or error)
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <FormField label="First Name" required>
          <Input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </FormField>

        <FormField label="Last Name" required>
          <Input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        <FormField label="Email" required>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </FormField>

        <FormField label="I am" required>
          <Select
            value={formData.userType}
            onValueChange={(value) => handleInputChange("userType", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Your Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jobseeker">Job Seeker</SelectItem>
              <SelectItem value="BecomePartner">Become Partner</SelectItem>
              <SelectItem value="employer">Employer</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>

      <FormField label="Phone Number" required>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select
            value={selectedCountry.iso}
            onValueChange={(value) => {
              const country = countryData.find((c) => c.iso === value);
              if (country) setSelectedCountry(country);
            }}
          >
            <SelectTrigger className="w-full sm:w-36" aria-label="Country code">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <Flag
                    countryCode={selectedCountry.iso}
                    svg
                    style={{ width: "16px", height: "12px", borderRadius: 2 }}
                  />
                  <span className="text-sm">{selectedCountry.code}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countryData.map((country) => (
                <SelectItem key={country.iso} value={country.iso}>
                  <div className="flex items-center gap-2">
                    <Flag
                      countryCode={country.iso}
                      svg
                      style={{ width: "16px", height: "12px", borderRadius: 2 }}
                    />
                    <span className="text-sm">{country.code}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {country.country.split("(")[0].trim()}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="flex-1"
            required
          />
        </div>
      </FormField>

      <FormField label="Subject" required>
        <Input
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          required
        />
      </FormField>

      <FormField label="Message" required>
        <Textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="min-h-32"
          required
        />
      </FormField>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={termsId}
          checked={formData.acceptTerms}
          onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-input accent-primary"
          required
        />
        <label htmlFor={termsId} className="text-sm leading-relaxed text-muted-foreground">
          I accept the{" "}
          <Link
            href="/terms"
            className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </Link>
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="group w-full disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
}
