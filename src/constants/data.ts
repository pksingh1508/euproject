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

export const NEWS_DATA = [
  {
    id: 1,
    title:
      "UK Unveils Stricter Salary Thresholds for Skilled Worker Visas in 2026",
    shortDesc:
      "The UK Home Office has announced a significant overhaul of its points-based immigration system, set to take effect in January 2026. The new rules introduce a higher minimum salary requirement for most Skilled Worker visa applicants, aiming to attract high-earners and reduce net migration. The changes also include a revised Shortage Occupation List, with several roles being removed and new ones added in the green energy and AI sectors. Immigration experts suggest that these adjustments will make it more challenging for businesses to recruit overseas talent for mid-level positions, potentially leading to labor shortages.",
    postDate: "September 24, 2025",
    views: 256
  },
  {
    id: 2,
    title:
      "US Citizenship and Immigration Services Concludes H-1B Visa Lottery for FY 2026",
    shortDesc:
      "The USCIS has officially completed the selection process for the Fiscal Year 2026 H-1B visa cap. This year saw another record number of registrations, highlighting the immense demand for skilled foreign workers in the United States, particularly within the tech and engineering fields. Applicants who were selected in the electronic lottery are now being notified through their online accounts. Attorneys are advising successful applicants to promptly prepare and submit their full petitions before the deadline. For those not selected, exploring alternative visa options such as the O-1 or L-1 visas is highly recommended.",
    postDate: "September 22, 2025",
    views: 543
  },
  {
    id: 3,
    title:
      "Germany's New Citizenship Law Comes Into Effect, Easing Naturalization Rules",
    shortDesc:
      "A landmark citizenship law has officially taken effect in Germany, significantly reducing the time required for foreign nationals to become German citizens. Under the new regulations, individuals can now apply for naturalization after just five years of legal residence, down from the previous eight. The law also permits dual citizenship for non-EU nationals, a major policy shift that acknowledges the multicultural reality of the country. This reform is part of Germany's broader strategy to attract and retain skilled workers to combat demographic decline and address critical labor shortages across its economy, making it more attractive.",
    postDate: "September 20, 2025",
    views: 302
  },
  {
    id: 4,
    title:
      "Ontario and British Columbia Expand Provincial Nominee Programs for Tech Workers",
    shortDesc:
      "In a bid to attract top tech talent, the Canadian provinces of Ontario and British Columbia have expanded their Provincial Nominee Programs (PNPs). The Ontario Immigrant Nominee Program (OINP) has added new occupations to its Human Capital Priorities stream, focusing on software developers and cybersecurity analysts. Similarly, the BC PNP Tech stream has lowered its points requirement for key tech roles, making it easier for qualified candidates to receive an invitation to apply for permanent residency. These targeted draws reflect a strategic effort by provincial governments to address specific labor market needs and bolster their industries.",
    postDate: "September 19, 2025",
    views: 411
  },
  {
    id: 5,
    title:
      "New Zealand Tightens Requirements for its Active Investor Plus Visa",
    shortDesc:
      "The New Zealand government has introduced stricter criteria for its Active Investor Plus visa, aiming to encourage more direct investment into Kiwi businesses. The updated policy requires applicants to make a larger portion of their investment in private companies rather than publicly listed equities or bonds. The minimum investment amount remains NZ$5 million, but the weighting towards direct investments has increased significantly. Officials state that the change is designed to ensure that immigrant investment capital contributes more directly to local job creation, innovation, and economic growth, moving away from more passive forms of investment.",
    postDate: "September 17, 2025",
    views: 198
  },
  {
    id: 6,
    title:
      "South Korea Launches New 'K-Culture Training Visa' for Aspiring Artists",
    shortDesc:
      "Capitalizing on the global popularity of its entertainment industry, South Korea has introduced a new visa category: the K-Culture Training Visa (H-1). This visa is specifically designed for foreign nationals wishing to enroll in training programs at leading Korean entertainment agencies and dance academies. The initiative aims to nurture international talent and further cement South Korea's status as a global hub for pop culture. Applicants must demonstrate acceptance into a recognized training program and meet financial requirements. The visa allows for an initial stay of one year, with possibilities for extension based on performance.",
    postDate: "September 15, 2025",
    views: 678
  },
  {
    id: 7,
    title:
      "UAE Expands Golden Visa Eligibility to Include Environmental Scientists and AI Experts",
    shortDesc:
      "The United Arab Emirates continues to broaden its Golden Visa program, which grants 10-year residency to exceptional individuals. The latest expansion now includes professionals in the fields of environmental science, sustainability, and artificial intelligence. This move aligns with the UAE's strategic goals of becoming a leading center for green technology and advanced digital economies. By offering long-term residency to experts in these critical areas, the nation aims to attract the world's brightest minds to contribute to its ambitious national projects and drive innovation, further diversifying its economy away from oil.",
    postDate: "September 12, 2025",
    views: 450
  },
  {
    id: 8,
    title:
      "UN Report Highlights Worsening Global Displacement Crisis and Calls for Action",
    shortDesc:
      "A new report from the United Nations High Commissioner for Refugees (UNHCR) has revealed a stark increase in the number of forcibly displaced people worldwide. The figures, now exceeding 120 million, are primarily driven by new and ongoing conflicts, as well as climate change-related disasters. The report urges the international community to increase humanitarian funding and find lasting political solutions to address the root causes of displacement. It specifically calls on developed nations to uphold their commitments to international law by streamlining asylum processes and increasing resettlement quotas to help host countries.",
    postDate: "September 10, 2025",
    views: 89
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
    question: "What services does EU Price Serwis offer?",
    answer:
      "Our Expertise Lies In International Recruitment, Immigration Services, Employment Visas, And Career Development. We Offer Comprehensive Solutions For Both Businesses And Individuals Seeking To Work And Grow In Europe."
  },
  {
    question: "How can EU Prime Serwis help me with recruitment?",
    answer:
      "We Assist Companies In Sourcing Skilled, Semi-Skilled, And Unskilled Labor Across Diverse Sectors In Poland And Europe. Our Service Connects Exceptional Talent With Job Vacancies, Facilitating A Smooth Placement Experience."
  },
  {
    question:
      "What are the benefits of working with EU Prime Serwis for recruitment?",
    answer:
      "We Offer Tailored Assistance, Access To An International Talent Pool, And Guarantee Adherence To Polish Labor Laws And EU Regulations, Thereby Facilitating A Seamless And Efficient Recruitment Process."
  },
  {
    question: "Can EU Prime Serwis assist with obtaining an employment visa?",
    answer:
      "We Provide Professional Support In Securing Employment Visas For Individuals Seeking To Work In Poland And Other European Nations. Our Team Will Assist You Throughout The Entire Process, Ensuring That All Necessary Documentation And Legal Requirements Are Fulfilled."
  },
  {
    question: "How do i apply for a job through EU Prime Serwis?",
    answer:
      "Please Submit Your Resume Along With Your Application Details, And Our Team Will Evaluate Your Qualifications To Connect You With The Most Suitable Opportunities In Poland And Throughout Europe."
  },
  {
    question: "What types of workers do we recruit?",
    answer:
      "We Engage In The Recruitment Of Personnel At All Tiers, Encompassing Skilled, Semi-Skilled, And Unskilled Labor Across A Diverse Range Of Sectors, Such As Construction, Hospitality, Manufacturing, And Others."
  },
  {
    question: "Do i need to speak Polish to work in Poland?",
    answer:
      "Although Proficiency In Polish May Offer Advantages, We Provide Job Opportunities Specifically For English-Speaking Professionals And Actively Support Multilingual Recruitment, Thereby Ensuring A Diverse Pool Of Candidates Can Discover Appropriate Positions"
  },
  {
    question: "Is EU Prime Serwis a legally registered company?",
    answer:
      "We are a legally registered entity in Poland (KRS: 0001133506) and adhere to all applicable Polish and EU regulations concerning employment and immigration services."
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "The timeline is contingent upon the specific job and the qualifications of the candidate; however, we strive to efficiently align candidates with positions while maintaining high standards of quality and compliance."
  },
  {
    question: "Can EU Prime Serwis help businesses expand their workforce?",
    answer:
      "Certainly! We offer staffing solutions for organizations seeking to recruit employees in Poland and throughout Europe, guaranteeing they identify the appropriate talent to meet their requirements."
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
      "They helped my entire family migrate smoothly. Excellent service and support. Thanks to EU Prime Serwis"
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
      "EU Prime Serwis helped me establish my business overseas. Their investment guidance was invaluable."
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
