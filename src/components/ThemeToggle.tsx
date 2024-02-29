import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {useEffect} from "react";

import {DarkIcon} from "../icons/DarkIcon";
import {LightIcon} from "../icons/LightIcon";
import {SystemIcon} from "../icons/SystemIcon";

type Props = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

const ThemeToggle = ({theme, setTheme}: Props) => {
  const themeOptions = ["Dark", "Light", "System"];
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement;

  useEffect(() => {
    const onWindowMatch = () => {
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    };

    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme, darkQuery.matches, element.classList]);

  useEffect(() => {
    const listener = (e: any) => {
      if ("theme" in localStorage) {
        return;
      }

      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    };

    darkQuery.addEventListener("change", listener);

    return () => {
      darkQuery.removeEventListener("change", listener);
    };
  }, [darkQuery, element.classList]);

  function themeIconToggle() {
    switch (theme) {
      case "dark":
        return <DarkIcon className="text-2xl" />;

      case "light":
        return <LightIcon className="text-2xl" />;

      case "system":
        return <SystemIcon className="text-2xl" />;
    }
  }

  return (
    <DropdownMenu.Root modal={true}>
      <DropdownMenu.Trigger className="cursor-pointer text-zinc-900/60 outline-none duration-200 dark:text-zinc-100/50 md:hover:text-zinc-900 dark:md:hover:text-emerald-500">
        {themeIconToggle()}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-10 min-w-[80px] origin-top space-y-1.5 rounded-md border border-zinc-900/10 bg-zinc-100/70 p-1.5 backdrop-blur-md backdrop-saturate-[180%] rdx-state-closed:animate-fade-out rdx-state-open:animate-fade-in dark:border-zinc-100/10 dark:bg-zinc-900/50"
          side="bottom"
          sideOffset={18}
        >
          {themeOptions.map((item, i) => {
            return (
              <DropdownMenu.Item
                key={i}
                className={`w-full cursor-pointer rounded-md py-0.5 text-center text-xs text-zinc-900 hover:bg-zinc-900/10 dark:text-zinc-100 ${theme === item.toLocaleLowerCase() && "bg-zinc-900/10 dark:bg-zinc-100/10"} outline-none duration-200 dark:hover:bg-zinc-100/10`}
                onClick={() => setTheme(item.toLocaleLowerCase())}
              >
                {item}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeToggle;
