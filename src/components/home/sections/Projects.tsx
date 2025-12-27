import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectIcon from "@/assets/icons/project-icon.svg";
import { projects } from "@/data/projects";

// Projects Component
const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-background py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-black/5 blur-[120px]" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-black/5 blur-[140px]" />
      </div>

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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_50px_-36px_rgba(15,15,15,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_28px_70px_-40px_rgba(15,15,15,0.45)]"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6 text-foreground">
                <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  {project.category}
                </span>
                <h4 className="mt-3 text-xl font-semibold">{project.title}</h4>
                <p className="mt-3 text-sm text-foreground/70">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black hover:text-white"
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    Visit Live
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black/5 hover:text-foreground"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
