"use client";

import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Flag from "react-country-flag";
import countryData from "@/constants/countrycode.json";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { fontPoppins } from "@/fonts";

interface CountryCode {
  country: string;
  code: string;
  iso: string;
}

export function ContactForm() {
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

    // try to send data to ZOHO CRM
    try {
      // const res = await axios.post("/api/zoho/submit", {
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
        toast.success("Form submitted successfully", {
          style: {
            borderRadius: "10px",
            background: "#fecc00",
            color: "#111827"
          }
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form", {
        style: {
          borderRadius: "10px",
          background: "#fecc00",
          color: "#111827"
        }
      });
    } finally {
      // Set loading to false when API call completes (success or error)
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <FormField label="First Name" required>
            <div className="font-inter">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
          </FormField>

          <FormField label="Last Name" required>
            <div className="font-inter">
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </FormField>
        </div>

        <FormField label="Email" required>
          <div className="font-inter">
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
        </FormField>

        <FormField label="Phone Number" required>
          <div className="font-inter">
            <div className="flex gap-2 flex-col">
              <Select
                value={selectedCountry.iso}
                onValueChange={(value) => {
                  const country = countryData.find((c) => c.iso === value);
                  if (country) setSelectedCountry(country);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Flag
                        countryCode={selectedCountry.iso}
                        svg
                        style={{ width: "16px", height: "12px" }}
                      />
                      <span className={`text-sm ${fontPoppins.className}`}>
                        {selectedCountry.code}
                      </span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="border-2 border-blue-400">
                  {countryData.map((country) => (
                    <SelectItem key={country.iso} value={country.iso}>
                      <div className="flex items-center gap-2">
                        <Flag
                          countryCode={country.iso}
                          svg
                          style={{ width: "16px", height: "12px" }}
                        />
                        <span className={`text-sm ${fontPoppins.className}`}>
                          {country.code}
                        </span>
                        <span
                          className={`text-xs text-muted-foreground truncate ${fontPoppins.className}`}
                        >
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
                required
              />
            </div>
          </div>
        </FormField>

        <FormField label="I am" required>
          <div className="font-inter">
            <Select
              value={formData.userType}
              onValueChange={(value) => handleInputChange("userType", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Your Role" />
              </SelectTrigger>
              <SelectContent className="border-2 border-blue-400">
                <SelectItem
                  className={`${fontPoppins.className}`}
                  value="jobseeker"
                >
                  Job Seeker
                </SelectItem>
                <SelectItem
                  className={`${fontPoppins.className}`}
                  value="BecomePartner"
                >
                  Become Partner
                </SelectItem>
                <SelectItem
                  className={`${fontPoppins.className}`}
                  value="employer"
                >
                  Employer
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </FormField>

        <FormField label="Subject" required>
          <div className="font-inter">
            <Input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
            />
          </div>
        </FormField>

        <FormField label="Message" required>
          <div className="font-inter">
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 resize-vertical font-inter ${fontPoppins.className}`}
              required
            />
          </div>
        </FormField>

        <div className="flex items-start gap-3 font-inter">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={formData.acceptTerms}
            onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
            required
          />
          <label
            htmlFor="acceptTerms"
            className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${fontPoppins.className}`}
          >
            I accept the{" "}
            <a
              href={`/terms-and-conditions`}
              className={`text-yellow-600 hover:text-yellow-700 underline font-medium ${fontPoppins.className}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className={`w-full border-2 border-blue-400 text-blue-400 text-[17px] font-montserrat font-semibold cursor-pointer  hover:bg-blue-400 hover:text-white hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed ${fontPoppins.className}`}
          variant="brandOutline"
        >
          {loading ? "Loading" : "Submit"}
        </Button>
      </form>
    </div>
  );
}
