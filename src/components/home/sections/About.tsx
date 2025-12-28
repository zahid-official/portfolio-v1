"use client";

import { motion, useReducedMotion } from "motion/react";

// About Component
const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.14,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="sm:pt-8 pt-4 sm:pb-34 pb-26"
      variants={containerVariants}
      initial={shouldReduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div className="container mx-auto" variants={itemVariants}>
          <h4 className="text-sm uppercase text-[#606060] sm:text-base">
            <span className="ml-2.5 mr-1.5 inline-block h-3 w-3 rounded-full bg-black"></span>
            Introduction
          </h4>
          <h3 className="title-font mt-1.5 text-4xl sm:text-5xl">
            <span className="font-bold">About</span> Me
          </h3>
        </motion.div>

        <div className="mt-5 max-sm:text-sm leading-7 text-black/80 grid md:grid-cols-2 md:gap-8 gap-5 container mx-auto">
          <motion.p variants={itemVariants}>
            I'm Zahidul Islam, a web application developer with a background in
            Islamic Studies. I completed my Darul Hadis (Master's) from Jamia
            Islamia Dhaka in 2024. After finishing my studies, I became deeply
            interested in web development. I enjoy creating things that not only
            look good but also solve problems and bring value to people in
            meaningful ways, keeping usability at the core.
          </motion.p>

          <motion.p variants={itemVariants}>
            I started learning web development in July 2024, diving into core
            fundamentals like JavaScript, React, Express and MongoDB. Months of
            consistent learning helped me land my first internship in April
            2025, where I gained real-world experience. Since then, I've been
            exploring advanced tools like TypeScript, Prisma,
            Postgres focusing on performance, secure APIs and better
            architecture.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
