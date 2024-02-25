import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {useEffect} from "react";

import {DarkIcon} from "../icons/DarkIcon";
import {PenIcon} from "../icons/PenIcon";
import {GCIcon} from "../icons/GCIcon";

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

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        className="cursor-pointer text-zinc-100 outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {theme === "dark" && <DarkIcon className="text-[1.5em]" />}
        {theme === "light" && <PenIcon className="text-[1.5em]" />}
        {theme === "system" && <GCIcon className="text-[1.5em]" />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-10 min-w-[80px] origin-top space-y-1.5 rounded-md border border-zinc-100/10 bg-zinc-900 p-1.5 backdrop-blur-md rdx-state-closed:animate-fade-out rdx-state-open:animate-fade-in"
          side="bottom"
          sideOffset={20}
        >
          {themeOptions.map((item, i) => {
            return (
              <DropdownMenu.Item
                key={i}
                className="w-full cursor-pointer rounded-md bg-zinc-800 py-1 text-center text-xs text-zinc-100 outline-none duration-200 hover:bg-zinc-700"
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
