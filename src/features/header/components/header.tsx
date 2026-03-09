"use client";

import content from "@/content/header.json";
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

  return (
    <header className="mx-auto flex max-w-7xl flex-col border-b border-neutral-200 px-3 py-5 lg:flex-row">
      <div className="mb-3 flex-1 lg:mb-0 lg:pr-30">
        <Link href={"/"}>
          <p className="text-[28dvw] leading-none font-semibold tracking-tight lg:text-[10dvh]">{content.logo}</p>
        </Link>
      </div>
      <nav className="flex flex-2 text-neutral-500 xl:text-lg">
        <div className="flex flex-1 flex-col gap-2">
          {content.site.map((link) => (
            <Link key={link.href} href={link.href}>
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {content.socials.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              <p>{link.label}</p>
            </a>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p>{content.location}</p>
          <p>{time}</p>
        </div>
      </nav>
    </header>
  );
};
