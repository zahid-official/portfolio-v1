import Image from "next/image";
import skillIcon from "@/assets/icons/skill-icon.svg";

type Skill = {
  name: string;
  icon?: string;
  badge?: string;
};

const skillGroups: { title: string; description: string; skills: Skill[] }[] = [
  {
    title: "Core Web",
    description: "Foundations for structure, styling, and logic.",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
    ],
  },
  {
    title: "Frontend Frameworks",
    description: "Component-driven UIs and stateful experiences.",
    skills: [
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React Router", badge: "RR" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "shadcn/ui", badge: "UI" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Servers, integrations, and typed validation.",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Firebase", icon: "firebase" },
      { name: "JWT", badge: "JWT" },
      { name: "Axios", badge: "AX" },
      { name: "Zod", badge: "ZOD" },
    ],
  },
  {
    title: "Data & ORM",
    description: "Databases and modeling layers for scale.",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", badge: "MG" },
      { name: "Postgres", icon: "postgres" },
      { name: "Prisma", icon: "prisma" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Tooling & Delivery",
    description: "Versioning, deployment, and workflows.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

// Skills Component
const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-36 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
      </div>
      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Title */}
        <div className="text-center">
          <h4 className="uppercase sm:text-base text-sm flex flex-col gap-2 justify-center items-center">
            <Image src={skillIcon} className="ml-4" alt="skill icon" />
            <p className="text-sm uppercase sm:text-base">
              <span className="ml-2.5 mr-1.5 inline-block h-3 w-3 rounded-full invisible bg-white"></span>
              Expertise
            </p>
          </h4>
          <h3 className="sm:text-5xl text-4xl title-font mt-1.5">
            <span className="font-bold">Skill </span> Set
          </h3>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            A production-ready toolkit for building modern web experiences from
            UI to data to deployment.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/25"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold">{group.title}</h4>
                    <p className="mt-1 text-sm text-white/60">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {group.skills.length} Tools
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10"
                    >
                      {skill.icon ? (
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={`${skill.name} icon`}
                          className="h-5 w-5"
                          width={20}
                          height={20}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px] font-semibold text-white/80">
                          {skill.badge ?? skill.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
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
