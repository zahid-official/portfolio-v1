"use client";

import Image from "next/image";
import type { Tech } from "@/data/projects";

type ProjectStackProps = {
  stack: Tech[];
};

const ProjectStack = ({ stack }: ProjectStackProps) => {
  return (
    <div className="mt-3 flex flex-wrap gap-2.5">
      {stack.map((tech) => (
        <div
          key={tech.name}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/10 hover:text-foreground"
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

export default ProjectStack;
