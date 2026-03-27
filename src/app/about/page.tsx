"use client";

import { Hero } from "@/components/hero";
import content from "@/content/about.json";
import { motion, Variants } from "motion/react";

export default function AboutPage() {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <motion.div variants={item}>
        <Hero>
          <h1 className="text-xl lg:text-2xl xl:text-3xl">
            {content.hero.title}&nbsp;
            <span className="text-neutral-500">{content.hero.subtitle}</span>
          </h1>
        </Hero>
      </motion.div>

      <motion.section variants={item} className="flex flex-col lg:flex-row">
        <div className="flex-1"></div>
        <div className="flex-2 pb-12">
          <img src={content.image.src} alt={content.image.alt} className="w-full" />
        </div>
      </motion.section>

      <motion.section variants={item} className="flex flex-col lg:flex-row xl:text-lg">
        <div className="flex-1 pb-6 lg:mb-0">
          <p className="text-lg xl:text-xl">Experience</p>
          <p className="text-neutral-500">2023 - 2025</p>
        </div>
        <div className="flex flex-2 flex-col divide-y divide-neutral-200">
          {content.experiences.map((experience, i) => (
            <div key={i} className="pt-4 pb-3 first:pt-0 last:pb-0">
              <p className="text-lg xl:text-xl">{experience.company}</p>
              <div className="flex text-neutral-500">
                <p className="flex-2 lg:flex-1">{experience.position}</p>
                <p className="flex-1">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
