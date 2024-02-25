import {useEffect, useRef, useState} from "react";
import {useBreakpoint} from "use-breakpoint";

import {ExperienceIcon} from "../icons/ExperienceIcon";
import {CodeIcon} from "../icons/CodeIcon";
import {AboutMeIcon} from "../icons/AboutMeIcon";
import {BlogIcon} from "../icons/ContactIcon";
import {LinkProps} from "../types";

// import ThemeToggle from "./ThemeToggle";

const LINKS: LinkProps[] = [
  {
    title: "Experience",
    url: "/#experience",
    label: "experience",
    icon: <ExperienceIcon className="text-[1.5em]" />,
  },
  {
    title: "Projects",
    url: "/#projects",
    label: "projects",
    icon: <CodeIcon className="text-[1.5em]" />,
  },
  {
    title: "About me",
    url: "/#about-me",
    label: "about-me",
    icon: <AboutMeIcon className="text-[1.5em]" />,
  },
  {
    title: "Blog",
    url: "/#blog",
    label: "blog",
    icon: <BlogIcon className="text-[1.5em]" />,
    disabled: true,
  },
];

const TheNav = () => {
  // const [theme, setTheme] = useState<string | null>(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  // );
  const [activeLink, setActiveLink] = useState(null);
  const navRef = useRef(null);

  const BREAKPOINTS = {md: 768};

  const {breakpoint} = useBreakpoint(BREAKPOINTS);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // document.querySelectorAll("section").forEach((section) => {
    //   observer.observe(section);
    // });

    document.onvisibilitychange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex items-center gap-6 rounded-full border border-zinc-100/10 bg-zinc-900/50 px-6 py-2 text-sm backdrop-blur-2xl"
    >
      {LINKS.map((link) => {
        return (
          <a
            key={link.title}
            aria-disabled={link.disabled}
            aria-label={link.label}
            className={`
            ${activeLink === link.label ? "text-teal-400" : ""} 
            ${link.disabled ? "cursor-not-allowed text-zinc-500" : "duration-200 md:hover:text-zinc-100"}
            `}
            href={link.url}
            onClick={(e) => link.disabled && e.preventDefault()}
          >
            {breakpoint && breakpoint === "md" ? link.title : link.icon}
          </a>
        );
      })}
      {/* <ThemeToggle setTheme={setTheme} theme={theme} /> */}
    </nav>
  );
};

export default TheNav;
