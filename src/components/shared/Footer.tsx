"use client";

import logo from "@/assets/images/logo-dark.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { motion, useReducedMotion } from "motion/react";

// Footer Component
const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const showTop = pathname === "/";
  const [formValues, setFormValues] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState<{ email?: string; message?: string }>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const handleChange =
    (field: "email" | "message") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { email?: string; message?: string } = {};

    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      nextErrors.email = "Enter a valid email.";
    }

    const trimmedMessage = formValues.message.trim();
    if (!trimmedMessage) {
      nextErrors.message = "Message is required.";
    } else if (trimmedMessage.length < 5) {
      nextErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");
    submitTimeoutRef.current = setTimeout(() => {
      toast.success("Message sent successfully.", { id: toastId });
      setFormValues({ email: "", message: "" });
      setIsSubmitting(false);
    }, 900);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  const contentVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.14,
      },
    },
  };
  const panelVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  const copyrightVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <footer id="contact">
      {showTop && (
        <motion.div
          className="sm:pb-8 pb-12 pt-12 max-w-7xl w-full mx-auto"
          variants={headerVariants}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-end">
            <div>
              <h4 className="uppercase text-sm">
                <span className="ml-2.5 mr-1.5 inline-block h-3 w-3 rounded-full bg-black"></span>
                Let&apos;s Talk
              </h4>

              <h3 className="mt-1.5 text-5xl font-bold uppercase lg:text-7xl font-condensed">
                <span className="text-black/80 transparent-text">
                  About your
                </span>{" "}
                Next project
                <span className="text-black/80 transparent-text">.</span>
              </h3>
            </div>

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zahid.official8@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="group justify-self-end gap-2 px-6 py-3 backdrop-blur hover:bg-foreground hover:text-background inline-flex items-center transition-colors duration-200 justify-center rounded-none border border-black bg-transparent  text-sm font-semibold uppercase text-black cursor-pointer md:mt-0"
              >
                Get in Touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </Link>
          </div>
        </motion.div>
      )}

      <motion.div
        className="flex flex-col text-white sm:flex-row font-condensed"
        variants={contentVariants}
        initial={shouldReduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* left Column */}
        <div className="flex-1 bg-black/98 sm:py-28 py-14 px-6">
          <motion.div
            className="mx-auto max-w-sm sm:max-w-70"
            variants={panelVariants}
          >
            {/* logo */}
            <div className="navbar-start">
              {/* Logo */}
              <Link href="#home" className="w-28 block">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>

            {/* contact */}
            <div className="mt-6 space-y-2.5">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zahid.official8@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-lg"
              >
                <IoIosMail size={25} /> zahid.official8@gmail.com
              </Link>
              <a
                href="https://wa.me/8801869618216"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm sm:text-base"
              >
                <FaPhoneAlt size={19} /> (+880) 18696-18216
              </a>
              <p className="flex items-center gap-1.5 text-sm sm:text-base">
                <FaLocationDot size={19} /> Dhaka, Bangladesh
              </p>
            </div>

            {/* social media */}
            <div>
              <p className="mt-12 uppercase">
                <span className="inline-block bg-[#21252c] px-1 py-0.5 text-lg font-semibold">
                  Connect
                </span>{" "}
                on
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/zahid.official8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9fa1a4] text-white transition-colors duration-200 hover:bg-gray-200 hover:text-black"
                >
                  <FaFacebookF size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/zahid-web/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9fa1a4] text-white transition-colors duration-200 hover:bg-gray-200 hover:text-black"
                >
                  <FaLinkedinIn size={22} />
                </a>

                <a
                  href="https://github.com/zahid-official"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9fa1a4] text-white transition-colors duration-200 hover:bg-gray-200 hover:text-black"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://discordapp.com/users/1251522037080391791"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9fa1a4] text-white transition-colors duration-200 hover:bg-gray-200 hover:text-black"
                >
                  <FaDiscord size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* right Column */}
        <div className="flex-1 bg-[#090a0e] sm:pt-14 sm:pb-28 pb-14 px-6">
          <motion.div className="mx-auto max-w-sm" variants={panelVariants}>
            <h3 className="mt-14 text-3xl uppercase">
              <span className="inline-block bg-[#21252c] px-2 py-0.5 font-semibold">
                Leave
              </span>{" "}
              Message
            </h3>

            <p className="mt-2 mb-10 text-xs uppercase tracking-[0.2em] text-white/80 sm:text-sm">
              If you have questions please leave a message
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-5">
                <input
                  className={`w-full rounded border bg-[#171a22] px-4 py-3 text-white focus:border-gray-600 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-transparent"
                  }`}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  disabled={isSubmitting}
                />
                {errors.email ? (
                  <p className="text-sm text-red-400">{errors.email}</p>
                ) : null}
                <textarea
                  placeholder="Message"
                  className={`w-full resize-none rounded border bg-[#171a22] px-4 py-3 text-white placeholder:text-white/60 focus:border-gray-600 focus:outline-none ${
                    errors.message ? "border-red-500" : "border-transparent"
                  }`}
                  rows={4}
                  name="message"
                  value={formValues.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message ? (
                  <p className="text-sm text-red-400">{errors.message}</p>
                ) : null}

                <button
                  className="w-full rounded bg-[#131a27] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#0c1320] disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* copyright */}
      <div className="bg-[#0c0e13] py-8 text-center text-lg font-condensed text-white">
        <motion.span
          className="inline-block"
          variants={copyrightVariants}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          © This Portfolio is develop by Zahidul Islam.
        </motion.span>
      </div>
    </footer>
  );
};

export default Footer;
