import classNames from "classnames";

const TechPill = ({techItem}: {techItem: string}) => {
  const techClass = classNames({
    "bg-yellow-500": techItem === "JavaScript",
    "bg-gray-500": techItem === "Next.js",
    "bg-cyan-500": techItem === "Tailwind CSS",
    "bg-green-500": techItem === "MongoDB",
    "bg-sky-500": techItem === "React",
    "bg-blue-500": techItem === "TypeScript",
    "bg-violet-500": techItem === "Radix UI",
    "bg-rose-500": techItem === "Zustand",
  });

  return (
    <li className="flex items-center gap-1 rounded-md bg-zinc-200 px-1.5 py-0.5 dark:bg-zinc-800/70">
      <div className={`h-[4px] w-[4px] rounded-full p-1 ${techClass}`} />
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{techItem}</p>
    </li>
  );
};

export default TechPill;
