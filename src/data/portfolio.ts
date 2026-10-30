/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  Edit this file to customise everything shown on the site.
 *  Images live in /public — replace them with your own files
 *  and update the paths below.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Prashant Khope",
  shortName: "PK",
  role: "HR & Admin | Business Development | Operations",
  location: "Pune, India",
  email: "Prashantkhope552@gmail.com",
  phone: "+91 7389806552",
  // Change to your real domain once deployed (used for SEO / Open Graph).
  url: "https://prashantkhope.vercel.app",
  // Replace /profile.svg with your photo, e.g. /profile.jpg
  photo: "/profile.svg",
  resumeUrl: "/Prashant-Khope-Resume.pdf",
  description:
    "Prashant Khope — HR & Admin and business development professional in Pune with experience in event execution, real estate sales, sourcing and client relationship management.",
  keywords: [
    "Prashant Khope",
    "HR and Admin",
    "Business Development",
    "Event Execution",
    "Real Estate Sales",
    "Client Relationship Management",
    "Pune",
  ],
};

export const hero = {
  greeting: "Hello, I'm",
  headline: "Prashant Khope",
  rotatingTitles: [
    "HR & Admin Professional",
    "Business Developer",
    "Event Execution Specialist",
    "Client Relationship Manager",
  ],
  intro:
    "I help teams run smoothly and clients stay happy — from coordinating large corporate events to closing real estate deals and building lasting partner networks.",
};

export const about = {
  paragraphs: [
    "I'm a business development and operations professional based in Pune, with hands-on experience across event execution, real estate sales, channel sourcing and client relationship management.",
    "Currently in HR & Admin at SpiritSoar Events & Entertainment, I coordinate people, vendors, artists and internal teams to deliver corporate events end to end — on time and on budget.",
    "My engineering background gives me a structured, problem-solving approach, and my years in sales taught me how to listen, negotiate and build trust that lasts.",
  ],
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "5", label: "Companies" },
    { value: "3", label: "Industries" },
    { value: "100%", label: "Commitment" },
  ],
  interests: ["Traveling", "Listening to Music", "Cooking", "Learning New Things"],
};

export type SkillGroup = {
  title: string;
  icon: "briefcase" | "wrench" | "users";
  items: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    title: "Core Skills",
    icon: "briefcase",
    items: [
      { name: "Business Development", level: 90 },
      { name: "Sales & Negotiation", level: 90 },
      { name: "Client Relationship Management", level: 92 },
      { name: "Event Execution", level: 88 },
    ],
  },
  {
    title: "Operations & People",
    icon: "users",
    items: [
      { name: "HR & Administration", level: 80 },
      { name: "Vendor Management", level: 86 },
      { name: "Project Coordination", level: 85 },
      { name: "Budgeting & Logistics", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "MS Excel", level: 85 },
      { name: "Microsoft Office", level: 88 },
      { name: "Google Workspace", level: 85 },
      { name: "CRM Tools", level: 82 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
};

// Placeholder projects — swap in your own work, images and links.
export const projects: Project[] = [
  {
    title: "Corporate Annual Meet",
    description:
      "End-to-end planning and on-ground execution of a 500+ guest corporate event — vendors, artists, logistics and timelines.",
    image: "/projects/project-1.svg",
    tags: ["Event Execution", "Vendor Management", "Budgeting"],
    github: "https://github.com/your-username/project-1",
    live: "https://example.com",
  },
  {
    title: "Channel Partner Network",
    description:
      "Built a network of brokers and channel partners that drove a steady pipeline of qualified site visits for a residential project.",
    image: "/projects/project-2.svg",
    tags: ["Sourcing", "Networking", "Lead Generation"],
    github: "https://github.com/your-username/project-2",
    live: "https://example.com",
  },
  {
    title: "Sales Pipeline Tracker",
    description:
      "An Excel/CRM dashboard to track leads, follow-ups and closures — improving conversion visibility for the sales team.",
    image: "/projects/project-3.svg",
    tags: ["MS Excel", "CRM", "Sales Strategy"],
    github: "https://github.com/your-username/project-3",
    live: "https://example.com",
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "HR and Admin",
    company: "SpiritSoar Events & Entertainment",
    location: "Pune",
    period: "Oct 2025 – Present",
    points: [
      "Coordinated end-to-end execution for multiple corporate events.",
      "Coordinating with clients, vendors, artists and internal teams to ensure smooth event delivery.",
      "Managing event timelines, budgeting, logistics and on-ground execution.",
    ],
  },
  {
    role: "Sourcing Manager",
    company: "Yash Promoters and Builders",
    location: "Pune",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Built strong relationships with channel partners and brokers to generate site visits.",
      "Enhanced company reputation through consistent networking and trust-building.",
      "Coordinated broker-client visits, increasing customer engagement and leads.",
    ],
  },
  {
    role: "Sales Executive",
    company: "360 Realtors",
    location: "Pune",
    period: "Apr 2024 – Apr 2025",
    points: [
      "Executed sales strategies to meet and exceed revenue targets.",
      "Maintained customer satisfaction through follow-up calls and site visits.",
      "Supported sales staff in resolving advanced sales issues and deal closures.",
    ],
  },
  {
    role: "Management Trainee",
    company: "Square Yards Pvt. Ltd.",
    location: "Hyderabad",
    period: "Aug 2023 – Mar 2024",
    points: [
      "Assisted in developing and implementing sales strategies.",
      "Ensured client satisfaction with follow-ups and service support.",
      "Contributed to company growth by converting leads into sales.",
    ],
  },
  {
    role: "Sales Associate",
    company: "Farmila Automobile Pvt. Ltd.",
    location: "Bhopal",
    period: "Oct 2022 – Mar 2023",
    points: [
      "Specialised in selling three-wheelers to retail and institutional customers.",
      "Conducted product demonstrations and explained features to improve customer buying confidence.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "Laxmi Narayan College of Technology, Bhopal",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    period: "Graduated July 2023",
  },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "instagram" | "x" | "mail";
};

export const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prashant-khope-7bb426220",
    icon: "linkedin",
  },
  { name: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { name: "Instagram", href: "https://instagram.com/your-username", icon: "instagram" },
  { name: "Email", href: "mailto:Prashantkhope552@gmail.com", icon: "mail" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
