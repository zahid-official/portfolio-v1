"use client";

import logo from "@/assets/images/logo-light.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { animate } from "motion";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useRef, useState } from "react";

// Navitems
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Navbar Component
const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollAnimationRef = useRef<ReturnType<typeof animate> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 32);
  });

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) {
      return;
    }

    const hash = href.slice(href.indexOf("#"));
    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    event.preventDefault();

    const header = document.querySelector("header");
    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const nextTop = Math.max(0, targetTop);

    scrollAnimationRef.current?.stop();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: nextTop, behavior: "auto" });
    } else {
      scrollAnimationRef.current = animate(window.scrollY, nextTop, {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        },
      });
    }

    window.history.replaceState(null, "", hash);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-40  backdrop-blur",
        isScrolled ? "shadow-sm bg-white/92" : ""
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-3 py-6 flex items-center gap-2.5 justify-between">
        {/* Logo */}
        <Link href="#home" className="w-28">
          <Image src={logo} alt="logo" />
        </Link>

        {/* Navbar */}
        <nav
          className={cn(
            "max-md:hidden flex items-center justify-self-center gap-7 rounded-full border border-black/10 px-8 py-3 text-sm font-medium transition-all duration-300"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="group relative overflow-hidden"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {item.label}
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Let's Talk */}
        <div className="flex items-center gap-2">
          <Link href="mailto:zahid.official8@gmail.com">
            <button
              className={cn(
                "group inline-flex items-center justify-self-end gap-2 border border-black/10 px-6 py-3 text-sm font-semibold transition-colors duration-200 max-md:hidden cursor-pointer hover:bg-foreground hover:text-background"
              )}
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </Link>

          {/* Mobile menu */}
          <DropdownMenu modal={false} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hidden size-9 items-center justify-center rounded-full border cursor-pointer border-black/10 bg-white/80 transition-all max-md:inline-flex"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="size-4.5" />
                ) : (
                  <Menu className="size-4.5" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 py-2 text-sm font-medium  max-md:block md:hidden"
            >
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  className="group relative block w-full cursor-pointer overflow-hidden text-center text-sm font-medium"
                  asChild
                >
                  <Link
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    <span className="grid w-full place-items-center overflow-hidden">
                      <span className="col-start-1 row-start-1 transition-transform duration-300 group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="col-start-1 row-start-1 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
