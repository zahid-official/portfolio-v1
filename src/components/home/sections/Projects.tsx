import projectIcon from "@/assets/icons/project-icon.svg";
import Image from "next/image";

// Projects Component
const Projects = () => {
  return (
    <div className="container relative mx-auto max-w-7xl py-32 px-5">
      {/* Title */}
      <div className="text-center">
        <div className="flex flex-col items-center gap-0.5">
          <Image
            src={projectIcon}
            className="-ml-2 size-10"
            alt="project icon"
          />
          <span className="text-xs uppercase tracking-[0.35em]">Featured</span>
        </div>
        <h3 className="sm:text-5xl text-4xl title-font mt-3">
          <span className="font-bold">Project</span> Work
        </h3>
        <p className="mt-2 text-sm sm:text-base max-w-3xl mx-auto">
          A focused collection of real builds that highlight clean UI,
          thoughtful UX, and reliable data flows from frontend to backend.
        </p>
      </div>

      {/* Projects */}
      <div>
        
      </div>
    </div>
  );
};

export default Projects;
