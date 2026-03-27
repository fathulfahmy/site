"use client";

import content from "@/content/header.json";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kuala_Lumpur",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
        .format(now)
        .replace(/am|pm/, (match) => match.toUpperCase());
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <motion.header
      initial="hidden"
      animate="visible"
      variants={container}
      className="mx-auto flex max-w-7xl flex-col border-b border-neutral-200 px-3 py-5 lg:flex-row"
    >
      <motion.div variants={item} className="mb-3 flex-1 lg:mb-0 lg:pr-30">
        <Link href={"/"}>
          <p className="text-[28dvw] leading-none font-semibold tracking-tight lg:text-[11dvh]">{content.logo}</p>
        </Link>
      </motion.div>
      <nav className="flex flex-2 text-neutral-500 xl:text-lg">
        <motion.div variants={item} className="flex flex-1 flex-col gap-2">
          {content.site.map((link) => (
            <Link key={link.href} href={link.href}>
              <p>{link.label}</p>
            </Link>
          ))}
        </motion.div>
        <motion.div variants={item} className="flex flex-1 flex-col gap-2">
          {content.socials.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              <p>{link.label}</p>
            </a>
          ))}
        </motion.div>
        <motion.div variants={item} className="flex flex-1 flex-col gap-2">
          <p>{content.location}</p>
          <p>{time}</p>
        </motion.div>
      </nav>
    </motion.header>
  );
};
