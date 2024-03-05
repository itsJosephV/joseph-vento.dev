import * as Popover from "@radix-ui/react-popover";
import {useState} from "react";

import {MailIcon} from "../icons/MailIcon";

const EmailMenu = () => {
  const [isAlert, setIsAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const EMAIL = "jvp.2703@gmail.com";

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setIsAlert(true);
    setIsOpen(false);

    setTimeout(() => {
      setIsAlert(false);
    }, 1500);
  }

  const itemStyle =
    "w-full cursor-pointer rounded-md bg-zinc-200 py-1 text-center text-xs  text-zinc-900 outline-none duration-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700";

  return (
    <div className="relative">
      <Popover.Root
        modal={true}
        open={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          // console.log(isOpen);
        }}
      >
        <Popover.Trigger asChild>
          <button className="icon-email-state h-full rounded-md border border-zinc-900/10 bg-zinc-100 pl-1.5 pr-[6.5px] text-zinc-900 outline-none duration-200 hover:bg-zinc-200 dark:border-zinc-100/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800">
            <MailIcon className="size-5" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="start"
            className="min-w-[150px] origin-top-left rounded-md border border-zinc-900/10 bg-zinc-100 p-1.5 backdrop-blur-md rdx-state-closed:animate-fade-out rdx-state-open:animate-fade-in dark:border-zinc-100/10 dark:bg-zinc-900"
            side="right"
            sideOffset={8}
          >
            <div className="mb-2 outline-none" onClick={(e) => e.preventDefault()}>
              <p className="text-center text-xs text-zinc-900 dark:text-zinc-100">{EMAIL}</p>
            </div>
            <div className="flex flex-row gap-1.5">
              <a
                className={itemStyle}
                href="mailto:jvp.2703@gmail.com"
                onClick={() => setIsOpen(false)}
              >
                Mail
              </a>
              <button className={itemStyle} onClick={handleCopyEmail}>
                Copy
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <AlertBox isAlert={isAlert} message={"Copied!"} />
    </div>
  );
};

export default EmailMenu;

const AlertBox = ({message, isAlert}: {message: string; isAlert: boolean}) => {
  return (
    <div
      className={`absolute left-full top-1/2 z-10 ml-2.5 w-max -translate-y-1/2 cursor-default select-none rounded-sm border-solid bg-zinc-200/70 px-2.5 py-1 text-sm text-zinc-900 transition-opacity duration-300 after:absolute after:right-full after:top-1/2 after:mt-[-5px] after:border-[5px] after:border-transparent after:border-r-zinc-200/70 ${isAlert ? "opacity-100" : "pointer-events-none opacity-0"} dark:bg-zinc-800/70 dark:text-zinc-100 dark:after:border-r-zinc-800/70`}
      role="alert"
    >
      {message}
    </div>
  );
};
