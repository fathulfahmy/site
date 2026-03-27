"use client";

import content from "@/content/footer.json";
import { motion, Variants } from "motion/react";

export const Footer = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        staggerDirection: -1,
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
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={container}
      className="mx-auto max-w-7xl px-3 py-10 text-lg xl:text-xl"
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row-reverse">
        <motion.div variants={item} className="flex-1">
          <p className="mb-0.5">{content.contact.title}</p>
          <p className="text-neutral-500">{content.contact.email}</p>
        </motion.div>

        <motion.div variants={item} className="flex-1">
          <p className="mb-0.5">{content.made_in.title}</p>
          <a href="http://github.com/fathulfahmy/site" target="_blank" rel="noopener noreferrer">
            <p className="text-neutral-500">{content.made_in.subtitle}</p>
          </a>
        </motion.div>

        <motion.div variants={item} className="flex-1">
          <p className="mb-0.5">{content.copyright.title}</p>
          <p className="text-neutral-500">{content.copyright.subtitle}</p>
        </motion.div>
      </div>
      <motion.div variants={item} className="text-center">
        <p className="text-[16dvw] leading-none font-semibold tracking-tight lg:text-[10dvw]">{content.logo}</p>
      </motion.div>
    </motion.footer>
  );
};
