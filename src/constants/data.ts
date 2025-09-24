// src/constants/navbarLinks.ts
export const NAVBAR_LINKS = [
  { label: "Home", href: "" },
  { label: "Work", href: "work" },
  { label: "Register Company", href: "register-company" },
  { label: "Our Serwis", href: "our-serwis" }, // keeping spelling as given
  { label: "Become Partner", href: "become-partner" },
  { label: "For Employer", href: "employer" },
  { label: "Contact Us", href: "contact" }
] as const;

export const DESTINATION_DATA = [
  {
    url: "/assets/country/albaniaya.png",
    name: "Albania",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/albania"
  },
  {
    url: "/assets/country/armenia.png",
    name: "Armenia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/armenia"
  },
  {
    url: "/assets/country/bulgeria.png",
    name: "Bulgaria",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/bulgaria"
  },
  {
    url: "/assets/country/croatia.png",
    name: "Croatia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/croatia"
  },
  {
    url: "/assets/country/czech-republic.png",
    name: "Czech Republic",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/czech-republic"
  },
  {
    url: "/assets/country/germany.png",
    name: "Germany",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/germany"
  },
  {
    url: "/assets/country/hungary.png",
    name: "Hungary",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/hungary"
  },
  {
    url: "/assets/country/itally.png",
    name: "Italy",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/italy"
  },
  {
    url: "/assets/country/kosovo.png",
    name: "Kosovo",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/kosovo"
  },
  {
    url: "/assets/country/latvia.png",
    name: "Latvia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/latvia"
  },
  {
    url: "/assets/country/lithuania.png",
    name: "Lithuania",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/lithuania"
  },
  {
    url: "/assets/country/montegro.png",
    name: "Montenegro",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/montenegro"
  },
  {
    url: "/assets/country/n-masidonia.png",
    name: "North Macedonia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/north-macedonia"
  },
  {
    url: "/assets/country/netherlands.png",
    name: "Netherlands",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/netherlands"
  },
  {
    url: "/assets/country/poland.png",
    name: "Poland",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/poland"
  },
  {
    url: "/assets/country/romania.png",
    name: "Romania",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/romania"
  },
  {
    url: "/assets/country/serbia.png",
    name: "Serbia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/serbia"
  },
  {
    url: "/assets/country/slovakia.png",
    name: "Slovakia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/slovakia"
  },
  {
    url: "/assets/country/slovenia.png",
    name: "Slovenia",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/slovenia"
  },
  {
    url: "/assets/country/uk.png",
    name: "United Kingdom",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/united-kingdom"
  }
];

export const COMPANY_DATA = [
  {
    url: "/assets/country/albaniaya.png",
    name: "Limited Liability Company",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/limited-liability-company"
  },
  {
    url: "/assets/country/armenia.png",
    name: "Joint-Stock Company",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/joint-stock-company"
  },
  {
    url: "/assets/country/bulgeria.png",
    name: "European Company",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/european-company"
  },
  {
    url: "/assets/country/croatia.png",
    name: "Sole Proprietorship",
    title:
      "For comprehensive information, please click 'Read More' to access additional details.",
    btnName: "Read More",
    btnUrl: "/sole-proprietorship"
  }
];

export const BLOGS_DATA = [
  {
    imageUrl: "https://picsum.photos/seed/canada-visa/800/600",
    title:
      "Canada Announces Major Updates to its Express Entry System for 2026",
    shortDesc:
      "The Canadian government has just revealed significant changes to the Comprehensive Ranking System (CRS), prioritizing candidates with experience in key sectors like healthcare and technology. Find out if you're eligible.",
    postDate: "September 23, 2025",
    likes_count: 87
  },
  {
    imageUrl: "https://picsum.photos/seed/schengen-travel/800/600",
    title: "Navigating the New ETIAS System for European Travel",
    shortDesc:
      "The European Travel Information and Authorisation System (ETIAS) is now live. We break down what this means for visa-exempt travelers and provide a step-by-step guide on how to apply for authorization.",
    postDate: "September 18, 2025",
    likes_count: 112
  },
  {
    imageUrl: "https://picsum.photos/seed/skilled-worker/800/600",
    title:
      "Australia's Global Talent Visa: The Fast-Track to Permanent Residency",
    shortDesc:
      "Looking for a faster way to immigrate? Australia's Global Talent Visa program is attracting top professionals from around the world. Learn about the requirements and benefits of this exclusive pathway.",
    postDate: "September 11, 2025",
    likes_count: 65
  },
  {
    imageUrl: "https://picsum.photos/seed/student-visa/800/600",
    title:
      "Top 5 Countries Offering Extended Post-Study Work Visas for Students",
    shortDesc:
      "Choosing where to study is a big decision, and post-study work opportunities are a huge factor. Discover which countries are offering the most favorable work visas for international graduates in 2025.",
    postDate: "September 5, 2025",
    likes_count: 154
  },
  {
    imageUrl: "https://picsum.photos/seed/digital-nomad/800/600",
    title: "The Rise of the Digital Nomad: Japan Launches New Long-Term Visa",
    shortDesc:
      "Japan joins the growing list of countries catering to remote workers. The new 'Digital Nomad' visa allows eligible professionals to live and work in the country for up to six months. Here’s how you can qualify.",
    postDate: "August 29, 2025",
    likes_count: 98
  }
];

// src/constants/countries.ts
export const COUNTRIES = [
  { label: "Japan", value: "japan" },
  { label: "Italy", value: "italy" },
  { label: "France", value: "france" },
  { label: "Switzerland", value: "switzerland" },
  { label: "Spain", value: "spain" },
  { label: "Greece", value: "greece" },
  { label: "Thailand", value: "thailand" },
  { label: "Australia", value: "australia" },
  { label: "New Zealand", value: "new-zealand" },
  { label: "Canada", value: "canada" },
  { label: "United States", value: "united-states" },
  { label: "United Kingdom", value: "united-kingdom" },
  { label: "Germany", value: "germany" },
  { label: "Netherlands", value: "netherlands" },
  { label: "Austria", value: "austria" },
  { label: "Iceland", value: "iceland" },
  { label: "Portugal", value: "portugal" },
  { label: "Turkey", value: "turkey" },
  { label: "Singapore", value: "singapore" },
  { label: "United Arab Emirates", value: "uae" }
] as const;

export const FAQS = [
  {
    question: "What services do you provide?",
    answer:
      "We offer services such as study abroad guidance, work opportunities, investment advice, migration support, mentorship, and job-seeker assistance."
  },
  {
    question: "Which countries do you work with?",
    answer:
      "We work with multiple countries including the USA, UK, Canada, Australia, and various European and Asian nations depending on the service requirements."
  },
  {
    question: "How long does the process take?",
    answer:
      "The duration varies depending on the type of service. On average, processes can take anywhere from a few weeks to several months."
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes, we assist with visa applications, documentation, and interview preparation to ensure a smooth process."
  },
  {
    question: "What are your fees?",
    answer:
      "Our fees depend on the type of service you choose. We provide transparent pricing upfront with no hidden charges."
  }
] as const;

export const Testimonials = [
  {
    name: "Sarah Johnson",
    role: "International Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review:
      "Amazing support throughout my study abroad journey. They made the process seamless and stress-free."
  },
  {
    name: "Michael Chen",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review:
      "Professional guidance for my international investments. Highly recommend their expertise."
  },
  {
    name: "Priya Patel",
    role: "Migrant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review:
      "They helped my entire family migrate smoothly. Excellent service and support."
  },
  {
    name: "David Wilson",
    role: "Job Seeker",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review:
      "Found my dream job abroad thanks to their comprehensive career guidance and support."
  },
  {
    name: "Emma Thompson",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    review:
      "CountryNation helped me establish my business overseas. Their investment guidance was invaluable."
  },
  {
    name: "Ahmed Hassan",
    role: "PhD Student",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    review:
      "Exceptional support for my PhD application. They made studying in Europe possible for me."
  },
  {
    name: "Maria Rodriguez",
    role: "Healthcare Professional",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    review:
      "Seamless visa process for my medical career abroad. Professional and efficient service."
  },
  {
    name: "James Kim",
    role: "Tech Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    review:
      "Their startup visa guidance helped me launch my tech company in Canada. Highly recommended!"
  }
] as const;
