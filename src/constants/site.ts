import { Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react";

/** Single source of truth for contact details used across the site. */
export const CONTACT = {
  phones: [
    { label: "+48 888 620 222", href: "tel:+48888620222" },
    { label: "+48 886 886 816", href: "tel:+48886886816" }
  ],
  whatsapp: { label: "+48 886 886 816", href: "tel:+48886886816" },
  email: { label: "info@euprimeserwis.pl", href: "mailto:info@euprimeserwis.pl" },
  address: {
    street: "ul. Bolesława Prusa 2",
    zip: "00-493",
    city: "Warsaw",
    country: "Poland",
    full: "ul. Bolesława Prusa 2, 00-493, Warsaw Poland"
  }
} as const;

export const SOCIAL_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Facebook", href: "https://www.facebook.com/euprimeserwis/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/euprimeserwis", icon: Instagram },
  { label: "Twitter", href: "https://x.com/euprimeserwis", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/euprimeserwis", icon: Linkedin }
];
