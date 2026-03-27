"use client";

import { Hero } from "@/components/hero";
import content from "@/content/home.json";
import { ProjectsList } from "@/features/projects/components/projects-list";
import { Post } from "@/types/post";
import { motion, Variants } from "motion/react";
import Link from "next/link";

interface HomeProps {
  posts: Post[];
  oldest: number;
  newest: number;
}

export const Home = ({ posts, oldest, newest }: HomeProps) => {
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
          <h1 className="text-xl lg:pr-14 lg:text-2xl xl:text-3xl">
            {content.hero.title}&nbsp;
            <span className="text-neutral-500">{content.hero.subtitle}</span>
          </h1>
        </Hero>
      </motion.div>

      <motion.section variants={item} className="flex flex-col pb-30 lg:flex-row">
        <div className="mb-8 flex-1 lg:mb-0">
          <p className="text-lg xl:text-xl">{content.featured.title}</p>
          <p className="text-neutral-500 xl:text-lg">
            {oldest} - {newest}
          </p>
        </div>
        <div className="flex flex-2 flex-col gap-8 lg:flex-col-reverse">
          <ProjectsList posts={posts} />
          <div className="flex justify-between text-lg xl:text-xl">
            {content.featured.cta.map((cta) => (
              <Link key={cta.href} href={cta.href} className={cta.isDesktopOnly ? "hidden lg:block" : ""}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section variants={item} className="flex flex-col text-lg lg:flex-row xl:text-xl">
        <div className="mb-4 flex-1 lg:mb-0">
          <p>{content.about.title}</p>
          <p className="hidden text-base text-neutral-500 lg:block">{content.about.subtitle}</p>
        </div>
        <div className="flex-2">
          <div className="mb-8">
            <h2 className="lg:text-2xl">
              {content.about.description_1}&nbsp;
              <span className="text-neutral-500">{content.about.description_2}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <p className="mb-3">Services</p>
              <div className="text-neutral-500">
                {content.services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-3">(Worked With)</p>
              <div className="text-neutral-500">
                {content.clients.map((client) => (
                  <p key={client}>{client}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
