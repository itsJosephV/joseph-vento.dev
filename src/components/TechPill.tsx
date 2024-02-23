import classNames from "classnames";

const TechPill = ({techItem}: {techItem: string}) => {
  const techClass = classNames({
    "bg-yellow-500": techItem === "JavaScript",
    "bg-gray-500": techItem === "Next.js",
    "bg-cyan-500": techItem === "Tailwind CSS",
    "bg-green-500": techItem === "MongoDB",
    "bg-sky-500": techItem === "React",
    "bg-blue-500": techItem === "TypeScript",
    "bg-violet-500": techItem === "RadixUI",
  });

  return (
    <li className="flex items-center gap-1 rounded-md bg-zinc-800/70 px-1.5 py-0.5">
      <div className={`h-[4px] w-[4px] rounded-full p-1 ${techClass}`} />
      <p className="text-xs text-zinc-300">{techItem}</p>
    </li>
  );
};

export default TechPill;
