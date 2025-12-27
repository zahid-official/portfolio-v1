import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectStack from "@/components/projects/ProjectStack";

type ProjectPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Zahid Portfolio`,
    description: project.summary,
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-5 py-24">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Details */}
          <div>
            <span className="rounded-full border border-black/10 bg-black/3 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/60">
              {project.category}
            </span>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm text-foreground/70">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="group/cta inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-foreground text-background transition-all duration-200 hover:border-black/25 hover:bg-secondary hover:text-foreground"
              >
                Visit Live
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </Link>
              <Link
                href={project.links.clientRepo}
                target="_blank"
                rel="noreferrer"
                className="group/cta inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-all duration-200 hover:border-black/25 hover:bg-black/5 hover:text-foreground"
              >
                Client Repo
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </Link>
              {project.links.serverRepo ? (
                <Link
                  href={project.links.serverRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-all duration-200 hover:border-black/25 hover:bg-black/5 hover:text-foreground"
                >
                  Server Repo
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                </Link>
              ) : null}
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
                Main Stack
              </p>
              <ProjectStack stack={project.stack} />
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-70 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_24px_60px_-40px_rgba(15,15,15,0.35)] sm:min-h-90">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,15,15,0.25)]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
              Challenges
            </p>
            <h2 className="mt-3 text-xl font-semibold">What I had to solve</h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,15,15,0.25)]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
              Future Plans
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Improvements and next steps
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {project.improvements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
