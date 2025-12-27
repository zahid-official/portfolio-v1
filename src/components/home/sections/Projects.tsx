import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectIcon from "@/assets/icons/project-icon.svg";
import { projects } from "@/data/projects";

// Projects Component
const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-background sm:pt-30 pt-22 sm:pb-20 pb-12">
      <div className="container relative mx-auto max-w-7xl px-5">
        {/* Title */}
        <div className="text-center text-foreground">
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
          <p className="mt-3 text-sm sm:text-base max-w-3xl mx-auto text-foreground/70">
            A focused collection of real builds that highlight clean UI,
            thoughtful UX, and reliable data flows from frontend to backend.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 ">
          {projects.map((project, index) => {
            const cardNumber = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.slug}
                className="group relative pb-8 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-36px_rgba(15,15,15,0.35)] transition-all duration-300 ease-out max-w-sm hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_28px_70px_-40px_rgba(15,15,15,0.45)]"
              >
                <div className="relative rounded-xl border h-48 overflow-hidden sm:h-56">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-black/25 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 text-foreground">
                  <span className="rounded-full border border-black/10 bg-black/3 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/60">
                    {project.category}
                  </span>
                  <span className="text-4xl font-semibold text-foreground/10">
                    {cardNumber}
                  </span>
                </div>

                <h4 className="mt-3 text-xl font-semibold text-foreground">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm text-foreground/70">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/cta inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-foreground text-background transition-all duration-200 hover:border-black/25 hover:bg-secondary hover:text-foreground"
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    Visit Live
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                  </Link>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/cta inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-all duration-200 hover:border-black/25 hover:bg-black/5 hover:text-foreground"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
