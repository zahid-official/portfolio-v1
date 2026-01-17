"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import ProjectStack from "@/components/projects/ProjectStack";

type ProjectDetailsClientProps = {
  project: Project;
};

const ProjectDetailsClient = ({ project }: ProjectDetailsClientProps) => {
  const shouldReduceMotion = useReducedMotion();
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easing,
      },
    },
  };
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easing,
      },
    },
  };
  const mediaVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  const inViewProps = (amount = 0.2) => ({
    initial: shouldReduceMotion ? "show" : "hidden",
    whileInView: "show" as const,
    viewport: { once: true, amount },
  });

  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-5 py-24">
        {/* Back */}
        <motion.div variants={fadeUp} {...inViewProps(0.6)}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
          variants={listVariants}
          {...inViewProps(0.2)}
        >
          {/* Details */}
          <motion.div variants={fadeUp}>
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
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/50">
                Main Stack
              </p>
              <ProjectStack stack={project.stack} />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative min-h-70 overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_24px_60px_-40px_rgba(15,15,15,0.35)] sm:min-h-90"
            variants={mediaVariants}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </motion.div>
        </motion.div>

        {project.detailSections.length ? (
          <motion.div className="mt-16" variants={listVariants} {...inViewProps(0.2)}>
            <motion.p
              className="text-[11px] uppercase tracking-[0.35em] text-foreground/50"
              variants={fadeUp}
            >
              Project Scope
            </motion.p>
            <motion.div
              className="mt-6 grid gap-6 lg:grid-cols-3"
              variants={listVariants}
            >
              {project.detailSections.map((section) => (
                <motion.div
                  key={`${section.eyebrow}-${section.title}`}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,15,15,0.25)]"
                  variants={cardVariants}
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/50">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-3 text-lg font-semibold">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/70">
                    {section.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          variants={listVariants}
          {...inViewProps(0.2)}
        >
          <motion.div
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,15,15,0.25)]"
            variants={cardVariants}
          >
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
          </motion.div>

          <motion.div
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,15,15,0.25)]"
            variants={cardVariants}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailsClient;
