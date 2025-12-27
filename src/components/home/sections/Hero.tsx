import background from "@/assets/images/background.png";
import profile from "@/assets/images/profile.jpeg";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaDownload, FaFacebookF } from "react-icons/fa6";

// Hero Component
const Hero = () => {
  return (
    <header
      id="home"
      className="bg-bottom-left 2xl:pt-48 md:pt-36 pt-28 2xl:pb-36 pb-20"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="mx-auto container max-w-7xl px-5 text-center">
        {/* img */}
        <div className="flex justify-center">
          <Image
            src={profile}
            alt="Zahidul Islam"
            className="h-36 w-36 rounded-full border border-gray-100 object-cover sm:h-40 sm:w-40"
          />
        </div>

        {/* text */}
        <div>
          <p className="mt-5 text-xl">Hi! I&apos;m Zahidul Islam</p>

          <h1 className="text-4xl sm:my-6 my-4 font-medium sm:text-6xl">
            Web Application Developer <br /> focused on impact.
          </h1>

          <p className="mx-auto max-w-2xl text-sm text-black/70 sm:text-base">
            As a web application developer, I craft modern web solutions that
            prioritize architecture, performance and usability. I transform
            concepts into impactful web experiences that{" "}
            <br className="max-lg:hidden" /> solve problems and deliver value.
          </p>
        </div>

        {/* button */}
        <div className="sm:mt-10 mt-7 flex flex-wrap justify-center gap-2.5">
          <Link href="#contact">
            <button
              className={cn(
                "group inline-flex items-center justify-self-end gap-1.5 border border-black/10 px-8 py-3 font-semibold transition-colors duration-200 cursor-pointer rounded-full bg-foreground text-background hover:bg-secondary hover:text-foreground"
              )}
            >
              Contact Me
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/16-vdGp3w0AurEBYW8OFlDNqaVqm4qRFH/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-self-end gap-1.5 border border-black/10 px-8 py-3 font-semibold transition-colors duration-200 cursor-pointer rounded-full bg-secondary text-foreground hover:bg-foreground hover:text-background"
          >
            My Resume
            <FaDownload size={18} />
          </Link>
        </div>

        {/* social */}
        <div className="social-rail fixed bottom-16 right-3 flex flex-col items-center gap-4 max-lg:hidden z-20">
          <ul className="social-rail__list">
            <li>
              <Link
                href="https://www.linkedin.com/in/zahid-web/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-rail__link"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/zahid-official"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-rail__link"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/zahid.official8"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-rail__link"
              >
                <FaFacebookF />
              </Link>
            </li>
          </ul>
          <div className="social-rail__divider" />
          <p className="social-rail__label vertical-text">Connect on</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
