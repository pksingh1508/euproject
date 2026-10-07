/**
 * Home hero slides. Each card on the hero's U-shaped carousel is paired with
 * the copy shown in the middle of the page while that card sits at the bottom
 * of the curve.
 *
 * Photos are free-licence stock (Unsplash License / Pexels License), cropped
 * to 4:3 and stored in /public/assets/hero:
 *  - consultation          https://images.unsplash.com/photo-1551836022-d5d88e9218df
 *  - skilled-worker        https://www.pexels.com/photo/8961155/
 *  - passport              https://www.pexels.com/photo/4922356/
 *  - relocation            https://www.pexels.com/photo/12742855/
 *  - warehouse             https://www.pexels.com/photo/1267338/
 *  - company-registration  https://www.pexels.com/photo/7841499/
 *  - partnership           https://images.unsplash.com/photo-1521791136064-7986c2920216
 *  - warsaw                https://images.unsplash.com/photo-1607078486875-a697a8a38e87
 *  - eu-flag               https://www.pexels.com/photo/12541594/
 *  - success               https://images.unsplash.com/photo-1600880292203-757bb62b4baf
 */

export interface HeroSlide {
  image: string;
  alt: string;
  /** Short label shown on the card and above the headline. */
  eyebrow: string;
  title: string;
  /** Phrase inside `title` rendered in the italic accent colour. */
  highlight?: string;
  description: string;
  cta: { label: string; href: string };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/assets/hero/consultation.webp",
    alt: "Immigration adviser talking with a client across a desk",
    eyebrow: "Immigration consultancy",
    title: "Your path to a career in Europe",
    highlight: "career in Europe",
    description:
      "Warsaw-based advisers guiding people and employers through visas, permits and recruitment — from first call to first day at work.",
    cta: { label: "About EU Prime Serwis", href: "/about" }
  },
  {
    image: "/assets/hero/skilled-worker.webp",
    alt: "Smiling skilled worker wearing a yellow hard hat",
    eyebrow: "Work in Europe",
    title: "Find the right job across Europe",
    highlight: "across Europe",
    description:
      "Roles for skilled and entry-level workers in construction, logistics, manufacturing and hospitality — many with visa sponsorship.",
    cta: { label: "Explore work", href: "/work" }
  },
  {
    image: "/assets/hero/passport.webp",
    alt: "Open passport filled with visa stamps",
    eyebrow: "Visas & permits",
    title: "Visas & permits, handled end to end",
    highlight: "end to end",
    description:
      "We prepare, translate and file every document for your work visa, residence card or permit renewal, so nothing holds up your move.",
    cta: { label: "View our services", href: "/our-serwis" }
  },
  {
    image: "/assets/hero/relocation.webp",
    alt: "Traveller with a suitcase watching planes from an airport window",
    eyebrow: "Relocation",
    title: "Relocate to Europe with confidence",
    highlight: "with confidence",
    description:
      "Family relocation, dependent visas, accommodation and health insurance — practical help with every step of settling in.",
    cta: { label: "Plan your move", href: "/contact" }
  },
  {
    image: "/assets/hero/warehouse.webp",
    alt: "Forklift operator moving pallets in a warehouse",
    eyebrow: "For employers",
    title: "Reliable talent, hired legally",
    highlight: "hired legally",
    description:
      "Recruitment, employee leasing and outsourcing, with skilled and unskilled workers from the EU, Asia, Africa and CIS countries.",
    cta: { label: "Hire with us", href: "/employer" }
  },
  {
    image: "/assets/hero/company-registration.webp",
    alt: "Business owner signing company registration documents",
    eyebrow: "Company registration",
    title: "Register your company in Poland",
    highlight: "in Poland",
    description:
      "Set up a limited liability company, joint-stock company or sole proprietorship with our lawyers — fully compliant from day one.",
    cta: { label: "Start your company", href: "/register-company" }
  },
  {
    image: "/assets/hero/partnership.webp",
    alt: "Two business partners shaking hands",
    eyebrow: "Partnerships",
    title: "Grow with a partner you can trust",
    highlight: "you can trust",
    description:
      "Agencies and consultants in recruitment, legal, travel or relocation: join a network built on trusted, efficient service.",
    cta: { label: "Become a partner", href: "/become-partner" }
  },
  {
    image: "/assets/hero/warsaw.webp",
    alt: "Warsaw skyline with the Palace of Culture and Science at sunset",
    eyebrow: "Based in Warsaw",
    title: "Your local experts in Warsaw",
    highlight: "in Warsaw",
    description:
      "Visit our office at ul. Bolesława Prusa 2, or talk to our advisers by phone, WhatsApp or email — whichever suits you.",
    cta: { label: "Contact us", href: "/contact" }
  },
  {
    image: "/assets/hero/eu-flag.webp",
    alt: "European Union flag flying against a cloudy sky",
    eyebrow: "Destinations",
    title: "20 destinations, one trusted partner",
    highlight: "one trusted partner",
    description:
      "Poland, Germany, Lithuania, Croatia, the Czech Republic and more — choose where you want to go and we'll guide the rest.",
    cta: { label: "Choose a destination", href: "/work" }
  },
  {
    image: "/assets/hero/success.webp",
    alt: "Two colleagues celebrating with a high five in an office",
    eyebrow: "Success stories",
    title: "Real people, real journeys",
    highlight: "real journeys",
    description:
      "See how the candidates and employers we've supported built new careers and stronger teams across Europe.",
    cta: { label: "Read their stories", href: "/success-story" }
  }
];
