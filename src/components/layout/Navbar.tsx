"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS } from "@/constants/data";
import {
  Globe,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { colors } from "@/constants/color";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fontInter, fontMontserrat, fontRoboto } from "@/fonts";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/home"; // in case Home is mapped differently
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : ""
      }`}
    >
      {/* Top bar - hide when scrolling */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-[200px] opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 text-sm bg-[#1877f2] max-w-7xl">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between py-2">
            {/* Phone numbers - stack on small screens */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-50">
              <a
                href="tel:+48222095497"
                className={`inline-flex items-center gap-2 hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-2.5 ${fontRoboto.className}`}
                style={{ ["--hover-bg" as any]: colors.yellow.dark }}
              >
                <Phone className="md:h-4 md:w-4 h-3 w-3" /> +48 888 620 222
              </a>
              <a
                href="tel:+48726635666"
                className={`inline-flex items-center gap-2 hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-2.5 ${fontRoboto.className}`}
                style={{ ["--hover-bg" as any]: colors.yellow.dark }}
              >
                <Phone className="md:h-4 md:w-4 h-3 w-3" /> +48 886 886 816
              </a>
            </div>

            {/* Social icons and buttons - stack on small screens */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 text-gray-50">
              <div className="flex items-center pr-2">
                <a
                  href="https://www.facebook.com/eucareerserwis/"
                  aria-label="Facebook"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-3"
                  style={{ ["--hover-bg" as any]: colors.yellow.dark }}
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/eucareerserwis"
                  aria-label="Instagram"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-3"
                  style={{ ["--hover-bg" as any]: colors.yellow.dark }}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/eucareerserwis"
                  aria-label="Twitter"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-3"
                  style={{ ["--hover-bg" as any]: colors.yellow.dark }}
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/eu-career-serwis"
                  aria-label="Linkedin"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors hover:bg-[var(--hover-bg)] px-2.5 py-3"
                  style={{ ["--hover-bg" as any]: colors.yellow.dark }}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <Button
                  asChild
                  variant="outline"
                  className={`bg-[#1877f2] text-gray-50 hover:border-1 hover:border-gray-300 inline-flex hover:bg-[var(--hover-bg)] hover:text-gray-50 border-[var(--hover-bg)] ${
                    fontMontserrat.className
                  } ${isActive("/book") ? "bg-white text-black" : ""}`}
                  style={{
                    ["--hover-bg" as any]: colors.yellow.DEFAULT,
                  }}
                >
                  <Link href={`/book`}>Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={`bg-[#1877f2] text-gray-50 hover:border-1 hover:border-gray-300 inline-flex hover:bg-[var(--hover-bg)] hover:text-gray-50 border-[var(--hover-bg)] ${
                    fontMontserrat.className
                  } ${isActive("/contact") ? "bg-white text-black" : ""}`}
                  style={{
                    ["--hover-bg" as any]: colors.yellow.dark,
                    ["--active-bg" as any]: colors.yellow.DEFAULT,
                  }}
                >
                  <Link href={`/contact`}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - fixed when scrolling */}
      <div
        className={`border-t border-b sticky top-0 transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : "bg-white"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="container mx-auto px-4 flex items-center">
            {/* Logo and nav links in one flex container */}
            <div className="flex flex-1 items-center justify-between">
              {/* Logo */}
              <Link href={`/`} className="flex items-center gap-3">
                <motion.div>
                  <Image
                    src="/mylogo.png"
                    alt="EU Prime Serwis"
                    width={150}
                    height={50}
                    className="h-24 w-52"
                  />
                </motion.div>
              </Link>

              {/* Links - show from xl and up, next to logo */}
              <div className="hidden xl:flex items-center ml-8 gap-2">
                {NAVBAR_LINKS.map((item) => {
                  return (
                    <motion.div key={item.href} whileHover={{ y: -2 }}>
                      <Link
                        href={`/${item.href}`}
                        className={`text-gray-700 transition-colors rounded-md px-2 py-2 hover:bg-[var(--hover-bg)] hover:text-gray-50 hover:shadow-lg ${
                          fontInter.className
                        } font-medium ${
                          isActive(`/${item.href}`)
                            ? "bg-[var(--active-bg)] text-white shadow-lg"
                            : ""
                        }`}
                        style={{
                          ["--hover-bg" as any]: colors.yellow.dark,
                          ["--active-bg" as any]: colors.yellow.DEFAULT,
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile toggle button */}
              <div className="xl:hidden flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden border-t bg-white"
          >
            <div className="container mx-auto py-4 flex flex-col gap-3">
              {NAVBAR_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  className={`text-gray-700 rounded-md px-3 py-2 hover:bg-[var(--hover-bg)] hover:text-gray-50 ${
                    fontInter.className
                  } font-medium ${
                    isActive(`/${item.href}`)
                      ? "bg-[var(--active-bg)] text-white"
                      : ""
                  }`}
                  style={{
                    ["--hover-bg" as any]: colors.yellow.DEFAULT,
                    ["--active-bg" as any]: colors.yellow.DEFAULT,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
