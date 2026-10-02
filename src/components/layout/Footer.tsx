import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone
} from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/constants/site";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Information",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Serwis", href: "/our-serwis" },
      { label: "Become Partner", href: "/become-partner" },
      { label: "For Employer", href: "/employer" },
      { label: "Contact Us", href: "/contact" }
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

const bottomLinks: FooterLink[] = [
  { label: "Refund Policy", href: "/refund" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "Anti Fraud Policy", href: "/anti-fraud" },
  { label: "Privacy Policy", href: "/privacy" }
];

const contactItems = [
  { icon: Phone, label: CONTACT.phones[0].label, href: CONTACT.phones[0].href },
  { icon: MessageCircleMore, label: CONTACT.whatsapp.label, href: CONTACT.whatsapp.href },
  { icon: Mail, label: CONTACT.email.label, href: CONTACT.email.href },
  { icon: MapPin, label: CONTACT.address.full }
];

/** Link with an underline that draws in from the left on hover. */
const linkClass =
  "bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 text-navy-muted transition-[color,background-size] duration-500 ease-premium hover:bg-[length:100%_1px] hover:text-navy-foreground";

const Footer: React.FC = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-48 left-1/2 -z-10 h-96 w-[min(64rem,100%)] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px] dark:bg-primary/10"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="page-container">
        {/* Call to action */}
        <Reveal className="flex flex-col gap-8 border-b border-white/10 py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              <span aria-hidden className="h-px w-8 bg-current opacity-60" />
              Get in touch
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Connect with our{" "}
              <em className="text-gold">Work Abroad Experts</em> today.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-navy-foreground px-7 text-[15px] font-medium text-navy shadow-elevated transition-transform duration-300 ease-premium hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-[15px] font-medium text-navy-foreground transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
            >
              Book Appointment
            </Link>
          </div>
        </Reveal>

        {/* Main footer content */}
        <Stagger className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <StaggerItem className="lg:col-span-4">
            <Image
              src="/mylogo.png"
              alt="EU Prime Serwis"
              width={207}
              height={100}
              className="mb-6 h-12 w-auto"
            />
            <p className="max-w-sm text-sm leading-relaxed text-navy-muted">
              EU Prime Serwis Overseas Career Consultant is a trusted global
              leader in immigration services, delivering personalized, premium
              solutions for B2B and B2C worldwide. Registered in Poland under
              KRS Number: 0001133506, NIP Number: 7011228130, REGON Number:
              529955956
            </p>

            <div className="mt-7 flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-navy-muted transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-navy-foreground"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </StaggerItem>

          {footerSections.map((section) => (
            <StaggerItem key={section.title} className="lg:col-span-2">
              <h3 className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy-foreground/90">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={cn("text-sm", linkClass)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}

          <StaggerItem className="sm:col-span-2 lg:col-span-4">
            <h3 className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy-foreground/90">
              Get in touch
            </h3>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold">
                    <Icon className="size-3.5" strokeWidth={1.75} />
                  </span>
                  {href ? (
                    <a href={href} className={cn("mt-1.5 text-sm", linkClass)}>
                      {label}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
                      {label}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 lg:flex-row">
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {bottomLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-[13px]", linkClass)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-center text-[13px] text-navy-muted/80 lg:text-right">
            © {new Date().getFullYear()} www.euprimeserwis.pl - All Rights
            Reserved.
          </p>
        </div>
      </div>

      {/* Oversized faded wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.22em] whitespace-nowrap text-center font-display text-[15.5vw] font-medium leading-none tracking-[-0.04em] text-white/[0.035]">
          EU Prime Serwis
        </p>
      </div>
    </footer>
  );
};

export default Footer;
