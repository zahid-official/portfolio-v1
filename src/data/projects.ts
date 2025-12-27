import type { StaticImageData } from "next/image";
import projectOne from "@/assets/images/project-1.png";
import projectTwo from "@/assets/images/project-2.png";
import projectThree from "@/assets/images/project-3.png";
import shadcn from "@/assets/icons/shadcn.png";
import jwt from "@/assets/icons/jwt.png";
import zod from "@/assets/icons/zod.png";
import cloudinary from "@/assets/icons/cloudinary.png";

export type Tech = {
  name: string;
  icon?: string;
  src?: StaticImageData;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  stack: Tech[];
  links: {
    live: string;
    clientRepo: string;
    serverRepo?: string;
  };
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "lorvic",
    title: "Lorvic Furniture",
    category: "E-commerce Furniture",
    summary:
      "A premium furniture storefront focused on storytelling, clean product hierarchy, and conversion-first flow.",
    description:
      "Lorvic blends editorial storytelling with product discovery. I focused on typographic rhythm, fast-loading imagery, and a consistent component system to keep browsing sharp and conversion focused.",
    highlights: [
      "Typography-led hero and product focus",
      "Clear CTAs and catalog preview flow",
    ],
    image: projectOne,
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "shadcn/ui", src: shadcn },
      { name: "JWT", src: jwt },
      { name: "Cloudinary", src: cloudinary },
    ],
    links: {
      live: "https://lorvic-official.vercel.app/",
      clientRepo: "https://github.com/zahid-official/milestone-18-client",
      serverRepo: "https://github.com/zahid-official/milestone-18-server",
    },
    challenges: [
      "Keeping a clean hero split layout without breaking visual hierarchy on smaller screens.",
      "Optimizing large product imagery while preserving quality.",
      "Maintaining consistent spacing and rhythm across multiple content blocks.",
    ],
    improvements: [
      "Add full commerce flows with cart, checkout, and order tracking.",
      "Introduce a CMS-driven catalog for faster content updates.",
      "Expand product discovery with filters, search, and recommendations.",
    ],
  },
  {
    slug: "velocia",
    title: "Velocia",
    category: "Mobility Platform",
    summary:
      "A ride-sharing experience with bold dark UI, trust-forward messaging, and a frictionless onboarding path.",
    description:
      "Velocia is a ride-sharing concept that emphasizes brand clarity, instant trust, and a streamlined onboarding experience. The interface uses depth, contrast, and motion-ready sections to communicate reliability and speed.",
    highlights: [
      "Cohesive dark theme with strong contrast",
      "Trust-driven hero messaging and layout",
    ],
    image: projectTwo,
    stack: [
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "JWT", src: jwt },
    ],
    links: {
      live: "https://velocia-official.vercel.app/",
      clientRepo: "https://github.com/zahid-official/milestone-17-client",
      serverRepo: "https://github.com/zahid-official/milestone-17-server",
    },
    challenges: [
      "Creating depth in a dark UI without losing contrast and readability.",
      "Structuring the layout to communicate trust and safety instantly.",
      "Designing responsive sections that keep the hero messaging centered.",
    ],
    improvements: [
      "Add real-time ride tracking and map integration.",
      "Extend onboarding with driver onboarding and verification flows.",
      "Introduce analytics dashboards for fleet and demand insights.",
    ],
  },
  {
    slug: "shelfy",
    title: "Shelfy",
    category: "Library Dashboard",
    summary:
      "A clean operations dashboard for library management with analytics, activity tracking, and admin workflows.",
    description:
      "Shelfy is a library management dashboard that brings clarity to daily operations with stats, activity logs, and structured workflows. The UI surfaces key information quickly while keeping actions intuitive.",
    highlights: [
      "Data-dense UI with clear hierarchy",
      "Reusable cards and daily workflow actions",
    ],
    image: projectThree,
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Postgres", icon: "postgres" },
      { name: "Prisma", icon: "prisma" },
      { name: "Zod", src: zod },
      { name: "Supabase", icon: "supabase" },
    ],
    links: {
      live: "https://shelfy-official.vercel.app/",
      clientRepo: "https://github.com/zahid-official/milestone-16-client",
      serverRepo: "https://github.com/zahid-official/milestone-16-server",
    },
    challenges: [
      "Organizing dense data while keeping the layout clean and scannable.",
      "Designing reusable UI patterns for cards and activity lists.",
      "Balancing admin workflows with quick user actions.",
    ],
    improvements: [
      "Add role-based permissions for staff and admins.",
      "Introduce advanced analytics and export tools.",
      "Expand automation for overdue notices and reminders.",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
