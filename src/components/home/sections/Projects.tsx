import Image, { type StaticImageData } from "next/image";
import projectIcon from "@/assets/icons/project-icon.svg";
import projectOne from "@/assets/images/project-1.png";
import projectTwo from "@/assets/images/project-2.png";
import projectThree from "@/assets/images/project-3.png";
import shadcn from "@/assets/icons/shadcn.png";
import jwt from "@/assets/icons/jwt.png";
import zod from "@/assets/icons/zod.png";
import motion from "@/assets/icons/motion.png";
import cloudinary from "@/assets/icons/cloudinary.png";

type Tech = {
  name: string;
  icon?: string;
  src?: StaticImageData;
};

type Project = {
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  image: StaticImageData;
  stack: Tech[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Lorvic Furniture",
    category: "E-commerce Landing",
    summary:
      "A premium furniture storefront focused on storytelling, clean product hierarchy, and conversion-first layout.",
    highlights: [
      "Typography-led hero with strong visual balance",
      "Clear product CTAs and catalog previews",
      "Polished spacing and responsive composition",
    ],
    image: projectOne,
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "shadcn/ui", src: shadcn },
      { name: "Figma", icon: "figma" },
    ],
    featured: true,
  },
  {
    title: "Velocia",
    category: "Mobility Platform",
    summary:
      "A ride-sharing experience with bold dark UI, brand-forward messaging, and a frictionless onboarding flow.",
    highlights: [
      "Cohesive dark theme with depth and contrast",
      "Clear onboarding and trust-building layout",
      "Motion-ready components for interactions",
    ],
    image: projectTwo,
    stack: [
      { name: "React", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Node.js", icon: "nodejs" },
      { name: "JWT", src: jwt },
      { name: "motion.dev", src: motion },
    ],
  },
  {
    title: "Shelfy",
    category: "Library Dashboard",
    summary:
      "A clean operational dashboard for library management with analytics, activity tracking, and admin workflows.",
    highlights: [
      "Data-dense UI with clear readability",
      "Reusable cards and stat-driven layout",
      "Streamlined actions for daily ops",
    ],
    image: projectThree,
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Postgres", icon: "postgres" },
      { name: "Prisma", icon: "prisma" },
      { name: "Zod", src: zod },
      { name: "Cloudinary", src: cloudinary },
    ],
  },
];

const ProjectStack = ({ stack }: { stack: Tech[] }) => {
  return (
    <div className="mt-3 flex flex-wrap gap-2.5">
      {stack.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/10 hover:text-foreground"
        >
          {tech.src ? (
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <Image
                src={tech.src}
                alt={`${tech.name} icon`}
                className="h-4 w-4 rounded-full object-contain"
                width={16}
                height={16}
              />
            </span>
          ) : tech.icon ? (
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <Image
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={`${tech.name} icon`}
                className="h-4 w-4 rounded-full"
                width={16}
                height={16}
              />
            </span>
          ) : (
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[10px] font-semibold text-foreground/70 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              {tech.name.slice(0, 2).toUpperCase()}
            </span>
          )}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-36 text-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-black/5 blur-[120px]" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-black/5 blur-[140px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Title */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-0.5">
            <Image
              src={projectIcon}
              className="-ml-2 size-10"
              alt="project icon"
            />
            <span className="text-xs uppercase tracking-[0.35em] text-foreground/60">
              Featured
            </span>
          </div>
          <h3 className="sm:text-5xl text-4xl title-font mt-3">
            <span className="font-bold">Project</span> Work
          </h3>
          <p className="mt-2 text-sm sm:text-base max-w-3xl mx-auto text-foreground/70">
            A focused collection of real builds that highlight clean UI,
            thoughtful UX, and reliable data flows from frontend to backend.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-8">
          <article className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_60px_-40px_rgba(15,15,15,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_32px_80px_-45px_rgba(15,15,15,0.5)]">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]">
                <Image
                  src={featured.image}
                  alt={`${featured.title} preview`}
                  fill
                  priority
                  className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] tracking-[0.2em]">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                </div>
                <h4 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
                  {featured.title}
                </h4>
                <p className="mt-3 text-sm text-foreground/70">
                  {featured.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-foreground/70 transition-colors duration-300 group-hover:border-black/20 group-hover:bg-black/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-black/10 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
                    Stack
                  </p>
                  <ProjectStack stack={featured.stack} />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-8 lg:grid-cols-2">
            {rest.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_50px_-36px_rgba(15,15,15,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_28px_70px_-40px_rgba(15,15,15,0.45)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] tracking-[0.2em]">
                      Case
                    </span>
                    <span>{project.category}</span>
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm text-foreground/70">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-foreground/70 transition-colors duration-300 group-hover:border-black/20 group-hover:bg-black/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-black/10 pt-4">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
                      Stack
                    </p>
                    <ProjectStack stack={project.stack} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
