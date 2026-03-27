"use client";

import { Hero } from "@/components/hero";
import content from "@/content/projects.json";
import { ProjectsList } from "@/features/projects/components/projects-list";
import { Post } from "@/types/post";
import { motion, Variants } from "motion/react";

interface ProjectProps {
  posts: Post[];
  oldest: number;
  newest: number;
}

export const Project = ({ posts, oldest, newest }: ProjectProps) => {
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
          <h1 className="mb-1 text-xl lg:text-2xl xl:text-3xl">{content.hero.title}</h1>
          <p className="text-lg text-neutral-500 lg:text-xl xl:text-2xl">
            {content.hero.subtitle} &copy;{oldest}-{newest}
          </p>
        </Hero>
      </motion.div>
      <motion.section variants={item} className="flex flex-col lg:flex-row">
        <div className="flex-1"></div>
        <div className="flex-2">
          <ProjectsList posts={posts} />
        </div>
      </motion.section>
    </motion.div>
  );
};
