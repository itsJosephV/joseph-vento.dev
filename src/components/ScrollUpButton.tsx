import {useEffect, useState} from "react";
import useBreakpoint from "use-breakpoint";

import {ArrowTopIcon} from "../icons/ArrowTopIcon";

const ScrollUpButton = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const BREAKPOINTS = {md: 768};

  const {breakpoint} = useBreakpoint(BREAKPOINTS);
  const treshold = 20;

  useEffect(() => {
    if (breakpoint && breakpoint === "md") {
      setIsMdScreen(true);
    } else {
      setIsMdScreen(false);
    }
  }, [breakpoint]);

  useEffect(() => {
    function handleScroll() {
      if (
        !isAtBottom &&
        window.innerHeight + window.scrollY + treshold >= document.body.offsetHeight
      ) {
        setIsAtBottom(true);
      } else if (
        isAtBottom &&
        window.scrollY + treshold < document.body.offsetHeight - window.innerHeight
      ) {
        setIsAtBottom(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtBottom]);

  useEffect(() => {
    function windowScreen() {
      if (window.scrollY > 400) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    }

    window.addEventListener("scroll", windowScreen);

    return () => {
      window.removeEventListener("scroll", windowScreen);
    };
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`fixed ${isAtBottom && !isMdScreen ? "bottom-11" : "bottom-3"} right-3 flex h-10 w-10 items-center justify-center rounded-full text-zinc-900/30 transition duration-300 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-100/30 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100 ${
        backToTopBtn ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={scrollTop}
    >
      <ArrowTopIcon className="text-[1.3em]" />
    </button>
  );
};

export default ScrollUpButton;
