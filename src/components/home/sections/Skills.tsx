import Image from "next/image";
import skillIcon from "@/assets/icons/skill-icon.svg";

// Skills Component
const Skills = () => {
  return (
    <div className="bg-black text-white py-36">
      <div className="container mx-auto max-w-7xl px-5">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
