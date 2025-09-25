import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  MessageCircleMore
} from "lucide-react";
import { fontMontserrat, fontPoppins } from "@/fonts";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Information",
      links: [
        { label: "Home", href: "/" },
        { label: "Our Servis", href: "/our-serwis" },
        { label: "Become Partner", href: "/become-partner" },
        { label: "For Employer", href: "/employer" },
        { label: "Contat Us", href: "/contact" }
      ]
    },
    {
      title: "Testimonials",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Immigration News", href: "/immigration-news" },
        { label: "Success Stories", href: "/success-story" },
        { label: "Book Appointment", href: "/book" },
        { label: "About Us", href: "/about" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Instagram, href: "#", color: "bg-pink-500 hover:bg-pink-600" },
    { icon: Twitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Linkedin, href: "#", color: "bg-blue-700 hover:bg-blue-800" }
  ];

  const bottomLinks = [
    { label: "Refund Policy", href: "/refund" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Anti Fraud Policy", href: "/anti-fraud" },
    { label: "Privacy Policy", href: "/privacy" }
  ];

  return (
    <footer className="bg-[#1877f2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <p
                  className={`text-sm leading-relaxed text-gray-200 ${fontPoppins.className}`}
                >
                  EU Prime Serwis Overseas Career Consultant is a trusted global
                  leader in immigration services, delivering personalized,
                  premium solutions for B2B and B2C worldwide. Registered in
                  Poland under KRS Number: 0001133506, NIP Number: 7011228130,
                  REGON Number: 529955956
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded ${social.color} flex items-center justify-center transition-colors duration-200`}
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Information Links */}
            <div>
              <h3
                className={`text-lg font-semibold mb-6 ${fontMontserrat.className}`}
              >
                {footerSections[0].title}
              </h3>
              <ul className="space-y-3">
                {footerSections[0].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center ${fontPoppins.className}`}
                    >
                      <span className="mr-2">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials Links */}
            <div>
              <h3
                className={`text-lg font-semibold mb-6 ${fontMontserrat.className}`}
              >
                {footerSections[1].title}
              </h3>
              <ul className="space-y-3">
                {footerSections[1].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center ${fontPoppins.className}`}
                    >
                      <span className="mr-2">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3
                className={`text-lg font-semibold mb-6 ${fontMontserrat.className}`}
              >
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone
                    size={16}
                    className="text-gray-400 mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <a
                      href="+48222683497"
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm block ${fontPoppins.className}`}
                    >
                      +48 22 268 3497
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircleMore
                    size={16}
                    className="text-gray-400 mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <a
                      href="tel:+48222683497"
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm block ${fontPoppins.className}`}
                    >
                      +48 22 268 3497
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    size={16}
                    className="text-gray-400 mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <a
                      href="mailto:info@euprimeserwis.pl"
                      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm block ${fontPoppins.className}`}
                    >
                      info@euprimeserwis.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin
                    size={16}
                    className="text-gray-400 mt-1 mr-3 flex-shrink-0"
                  />
                  <div>
                    <p
                      className={`text-gray-300 text-sm ${fontPoppins.className}`}
                    >
                      ul. Bolesława Prusa 2, 00-493, Warsaw Poland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-700 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm ${fontPoppins.className}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className={`text-gray-400 text-sm ${fontPoppins.className}`}>
                © 2025 www.euprimeserwis.pl - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
