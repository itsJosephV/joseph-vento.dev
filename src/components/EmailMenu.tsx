import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {useState} from "react";

import {MailIcon} from "../icons/MailIcon";

const EmailMenu = () => {
  const [isAlert, setIsAlert] = useState(false);

  const EMAIL = "jvp.2703@gmail.com";

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setIsAlert(true);

    setTimeout(() => {
      setIsAlert(false);
    }, 2500);
  }

  const handleModalMenu = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <DropdownMenu.Root modal={false}>
        {/* <DropdownMenu.Root modal={true}> */}
        <DropdownMenu.Trigger asChild>
          <button
            className="h-full rounded-md border border-zinc-900/10 bg-zinc-100 px-1.5 text-xl font-medium text-zinc-900 duration-200 hover:bg-zinc-200 dark:border-zinc-100/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            onClick={handleModalMenu}
          >
            <MailIcon className="" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="start"
            className="pointer-events-auto min-w-[150px] origin-top-left rounded-md border border-zinc-900/10 bg-zinc-100 p-1.5 backdrop-blur-md rdx-state-closed:animate-fade-out rdx-state-open:animate-fade-in dark:border-zinc-100/20 dark:bg-zinc-900"
            side="right"
            sideOffset={8}
          >
            <DropdownMenu.Item className="mb-2 outline-none" onClick={(e) => e.preventDefault()}>
              <p className="text-center text-xs text-zinc-900 dark:text-zinc-100">{EMAIL}</p>
            </DropdownMenu.Item>
            <div className="flex flex-row gap-1.5">
              <DropdownMenu.Item
                asChild
                className="w-full cursor-pointer rounded-md bg-zinc-200 py-1 text-center text-xs  text-zinc-900 outline-none duration-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                <a className=" " href="mailto:jvp.2703@gmail.com">
                  Mail
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="w-full cursor-pointer rounded-md bg-zinc-200 py-1 text-center text-xs text-zinc-900 outline-none duration-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100"
                onClick={handleCopyEmail}
              >
                Copy
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <AlertBox isAlert={isAlert} message={"Copied!"} />
    </div>
  );
};

export default EmailMenu;

const AlertBox = ({message, isAlert}: {message: string; isAlert: boolean}) => {
  return (
    <div
      className={`absolute left-full top-1/2 z-10 ml-2 w-max -translate-y-1/2 cursor-default select-none rounded-sm border-solid bg-zinc-800 px-2.5 py-1 text-sm text-zinc-100 transition-opacity duration-300 after:absolute after:right-full after:top-1/2 after:mt-[-5px] after:border-[5px] after:border-transparent after:border-r-zinc-800 ${isAlert ? "opacity-100" : "pointer-events-none opacity-0"}`}
      role="alert"
    >
      {message}
    </div>
  );
};
