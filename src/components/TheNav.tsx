import {useEffect, useRef, useState} from "react";
import {useBreakpoint} from "use-breakpoint";

import {ExperienceIcon} from "../icons/ExperienceIcon";
import {CodeIcon} from "../icons/CodeIcon";
import {AboutMeIcon} from "../icons/AboutMeIcon";
import {BlogIcon} from "../icons/BlogIcon";
import {LinkProps} from "../types";

import ThemeToggle from "./ThemeToggle";

const LINKS: LinkProps[] = [
  {
    title: "Experience",
    url: "#experience",
    label: "experience",
    icon: <ExperienceIcon className="size-6" />,
  },
  {
    title: "Projects",
    url: "#projects",
    label: "projects",
    icon: <CodeIcon className="size-6" />,
  },
  {
    title: "About me",
    url: "#about-me",
    label: "about-me",
    icon: <AboutMeIcon className="size-6" />,
  },
  {
    title: "Blog",
    url: "#blog",
    label: "blog",
    icon: <BlogIcon className="size-6" />,
    disabled: true,
  },
];

const TheNav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );
  const navRef = useRef(null);

  const BREAKPOINTS = {md: 768};

  const {breakpoint} = useBreakpoint(BREAKPOINTS);

  useEffect(() => {
    const threshold = 0.5;
    const observers: IntersectionObserver[] = [];

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute("data-section"));
        }
      });
    };

    document.querySelectorAll("section").forEach((section) => {
      const sectionHeight = section.getBoundingClientRect().height;
      let tth = threshold;

      if (sectionHeight > window.innerHeight * threshold) {
        tth = ((window.innerHeight * threshold) / sectionHeight) * threshold;
      }
      const observer = new IntersectionObserver(handleIntersection, {threshold: tth});

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex items-center gap-6 rounded-full border border-zinc-900/10 bg-zinc-100/70 px-5 py-2 backdrop-blur-lg backdrop-saturate-[180%] dark:border-zinc-100/10 dark:bg-zinc-900/70"
    >
      {LINKS.map((link) => {
        return (
          <a
            key={link.title}
            aria-disabled={link.disabled}
            aria-label={link.label}
            className={`
            ${activeLink === link.label && "!text-zinc-900 dark:!text-emerald-400"} 
            ${link.disabled ? "cursor-not-allowed text-zinc-900/20 dark:text-zinc-100/20" : "text-zinc-900/50 duration-200 hover:text-zinc-900 dark:text-zinc-100/50 dark:hover:text-emerald-400"}
            `}
            href={link.url}
            onClick={(e) => link.disabled && e.preventDefault()}
          >
            {breakpoint && breakpoint === "md" ? link.title : link.icon}
          </a>
        );
      })}
      <ThemeToggle setTheme={setTheme} theme={theme} />
    </nav>
  );
};

export default TheNav;
