"use client";

import { Hero } from "@/components/hero";
import content from "@/content/contact.json";
import { CreateContact } from "@/features/contact/components/create-contact";
import { motion, Variants } from "motion/react";

export default function ContactPage() {
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
          <h1 className="mb-4 text-xl lg:text-2xl xl:text-3xl">{content.hero.title}</h1>
          <p className="text-lg text-neutral-500 xl:text-xl">{content.hero.subtitle}</p>
        </Hero>
        <CreateContact />
      </motion.div>
    </motion.div>
  );
}
