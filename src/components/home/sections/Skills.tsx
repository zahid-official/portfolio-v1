import Image from "next/image";
import skillIcon from "@/assets/icons/skill-icon.svg";
import shadcn from "@/assets/icons/shadcn.png";
import zod from "@/assets/icons/zod.png";
import jwt from "@/assets/icons/jwt.png";
import mongoose from "@/assets/icons/mongoose.png";

type Skill = {
  name: string;
  icon?: string;
  badge?: string;
};

type SkillArea = {
  title: string;
  summary: string;
  highlights: string[];
  skills: Skill[];
};

const skillAreas: SkillArea[] = [
  {
    title: "Product UI",
    summary: "Polished interfaces with a design-system mindset.",
    highlights: [
      "Design tokens and component systems",
      "Responsive layouts with clean hierarchy",
      "Accessible, production-ready UI",
    ],
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "shadcn/ui", badge: "UI" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "Frontend Apps",
    summary: "Interactive, performant React and Next.js builds.",
    highlights: [
      "Type-safe state and data flows",
      "Rendering strategies that scale",
      "Motion and micro-interactions",
    ],
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux", icon: "redux" },
    ],
  },
  {
    title: "Backend & APIs",
    summary: "Secure services, validation, and integrations.",
    highlights: [
      "RESTful API design and auth",
      "Schema validation and safeguards",
      "Reliable integrations and workflows",
    ],
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Firebase", icon: "firebase" },
      { name: "JWT", badge: "JWT" },
      { name: "Zod", badge: "ZOD" },
    ],
  },
  {
    title: "Data & Delivery",
    summary: "Resilient data layers and clean deployments.",
    highlights: [
      "Relational and document modeling",
      "ORM workflows and caching",
      "Deployment-ready delivery",
    ],
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Postgres", icon: "postgres" },
      { name: "Prisma", icon: "prisma" },
      { name: "Redis", icon: "redis" },
      { name: "Mongoose", icon: "mongoose" },
    ],
  },
];

// Skills Component
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-36 text-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-background/5 blur-3xl" />
        <div className="absolute -bottom-10 right-0 h-96 w-96 rounded-full bg-background/5 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
      </div>
      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Title */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            <Image src={skillIcon} className="ml-1 size-10" alt="skill icon" />
            <span className="text-xs uppercase tracking-[0.35em] text-background/70">
              Expertise
            </span>
          </div>
          <h3 className="sm:text-5xl text-4xl title-font mt-3">
            <span className="font-bold">Skill </span> Set
          </h3>
          <p className="mt-4 text-sm sm:text-base text-background/70 max-w-3xl mx-auto">
            A modern toolkit built for real products. I focus on clean UI,
            scalable frontend architecture, and reliable backend systems.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillAreas.map((area) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-2xl border border-background/10 bg-[#0b0b0b] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-background/25 hover:shadow-[0_32px_90px_-60px_rgba(255,255,255,0.3)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-background/40">
                      Focus
                    </p>
                    <h4 className="mt-2 text-2xl font-semibold text-background">
                      {area.title}
                    </h4>
                    <p className="mt-2 text-sm text-background/60">
                      {area.summary}
                    </p>
                  </div>
                  <span className="rounded-full border border-background/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-background/50 transition-colors duration-300 group-hover:border-background/25">
                    {area.skills.length} Tools
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {area.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-background/10 bg-background/5 px-3 py-1 text-xs text-background/70 transition-colors duration-300 group-hover:border-background/20 group-hover:bg-background/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-background/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-background/40">
                    Toolbox
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {area.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-background/10 bg-black/40 px-3 py-2 text-xs font-medium text-background/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-background/30 hover:bg-background/10 hover:text-background"
                      >
                        {skill.icon ? (
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-background/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                            <Image
                              src={`https://skillicons.dev/icons?i=${skill.icon}`}
                              alt={`${skill.name} icon`}
                              className="h-5 w-5 rounded-full object-center"
                              width={20}
                              height={20}
                              unoptimized
                            />
                          </span>
                        ) : (
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-background/10 text-[10px] font-semibold text-background/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                            {skill.badge ??
                              skill.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
