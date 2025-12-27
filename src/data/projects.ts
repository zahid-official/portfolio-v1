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

export type ProjectDetailSection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
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
  detailSections: ProjectDetailSection[];
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
    detailSections: [
      {
        eyebrow: "Client Experience",
        title: "Shopping flow with role-aware dashboards",
        description:
          "Server components and structured layouts keep browsing fast while supporting admin and vendor workflows.",
        bullets: [
          "Role-based dashboards for admin, vendor, and customer.",
          "Product discovery with filters, categories, and galleries.",
          "Cart and Stripe checkout with live order feedback.",
          "SSR and image optimization for fast loads and SEO.",
          "Dark/light theme support with accessible UI primitives.",
        ],
      },
      {
        eyebrow: "Backend Platform",
        title: "Marketplace operations and secure payments",
        description:
          "The API manages users, products, and orders with strict access control and audit-ready flows.",
        bullets: [
          "JWT auth with httpOnly cookies and middleware guards.",
          "Vendor onboarding and inventory tracking.",
          "Order lifecycle management with stock updates.",
          "Stripe payments with webhook handling.",
          "Cloudinary uploads for product and profile media.",
        ],
      },
      {
        eyebrow: "Architecture",
        title: "Modular, type-safe delivery stack",
        description:
          "Clear module boundaries keep the system scalable and easy to extend.",
        bullets: [
          "Feature modules for auth, shop, vendor, admin, and customer.",
          "Server actions for mutations and protected flows.",
          "TypeScript with Zod validation across layers.",
          "Cloud-native deployment on Vercel.",
          "Security-first routing with edge protection.",
        ],
      },
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
    detailSections: [
      {
        eyebrow: "Rider Experience",
        title: "Fast booking with live visibility",
        description:
          "Front-end flows prioritize speed, clarity, and confidence for riders.",
        bullets: [
          "Real-time ride requests with map-based pickup and dropoff.",
          "Live ride status tracking and trip history.",
          "Fare calculation with clear summaries.",
          "Rider profile management with OTP verification.",
          "Responsive UI with dark/light theme support.",
        ],
      },
      {
        eyebrow: "Driver + Admin Ops",
        title: "Multi-role dashboards for fleet control",
        description:
          "Operational tools support verification, oversight, and earnings.",
        bullets: [
          "Driver availability and request handling.",
          "Admin verification workflows and user management.",
          "Earnings tracking with analytics views.",
          "Dispute resolution and ride oversight.",
          "Role-based dashboards for rider, driver, and admin.",
        ],
      },
      {
        eyebrow: "Platform Services",
        title: "Scalable API and real-time foundation",
        description:
          "Backend services handle authentication, rides, and financial operations.",
        bullets: [
          "JWT auth with refresh tokens and Redis-backed sessions.",
          "Service modules for rides, drivers, users, and payments.",
          "Geolocation services and smart driver matching.",
          "Dynamic pricing logic and transaction history.",
          "Event-ready architecture for live status updates.",
        ],
      },
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
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Zod", src: zod },
    ],
    detailSections: [
      {
        eyebrow: "Library Workflow",
        title: "Clear, responsive operations",
        description:
          "A streamlined interface for core library tasks and reporting.",
        bullets: [
          "Book catalog CRUD with filtering and sorting.",
          "Borrowing flow with availability checks and due dates.",
          "Borrow summary dashboard with aggregated stats.",
          "Real-time UI updates for inventory changes.",
          "Zero-auth access for fast demos.",
        ],
      },
      {
        eyebrow: "Data Integrity",
        title: "Business rules enforced in the API",
        description:
          "Server-side validation keeps records accurate and consistent.",
        bullets: [
          "Zod validation with descriptive errors.",
          "Business logic prevents over-borrowing.",
          "MongoDB aggregation for borrow summaries.",
          "Mongoose static methods and middleware hooks.",
          "Structured error handling and response formats.",
        ],
      },
      {
        eyebrow: "Stack + UX",
        title: "Modern React foundation",
        description:
          "A lightweight stack with accessible UI components.",
        bullets: [
          "React 19, TypeScript, and Vite for fast iteration.",
          "RTK Query for caching and data sync.",
          "Tailwind and Radix UI for consistent styling.",
          "Responsive layout across devices.",
          "Minimal, accessibility-first design.",
        ],
      },
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
