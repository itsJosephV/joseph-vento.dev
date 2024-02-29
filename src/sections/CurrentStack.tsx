import {NextIcon} from "../icons/NextIcon";
import {ReactIcon} from "../icons/ReactIcon";
import {TypeScriptIcon} from "../icons/TypeScriptIcon";
import {TailwindIcon} from "../icons/TailwindIcon";
import {NodeIcon} from "../icons/NodeIcon";
import {MongoDBIcon} from "../icons/MongoDBIcon";

const CurrentStack = () => {
  const iconStyle =
    "text-3xl dark:text-emerald-300 text-zinc-700 duration-200 dark:hover:text-inherit hover:text-zinc-700/70";

  return (
    <div className="rounded-md bg-zinc-200/70 p-4 pb-6 dark:bg-zinc-900/70">
      <h2 className="mb-2 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        My Current Stack
      </h2>
      <p className="mb-6 text-center dark:text-zinc-300">
        Mainly using React and TypeScript, complemented with the most popular frameworks like
        Next.js and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <ReactIcon
          className={iconStyle}
          data-tooltip-content="React"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
        <TypeScriptIcon
          className={iconStyle}
          data-tooltip-content="TypeScript"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
        <TailwindIcon
          className={iconStyle}
          data-tooltip-content="Tailwind CSS"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
        <NextIcon
          className={iconStyle}
          data-tooltip-content="Next.js"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
        <NodeIcon
          className={iconStyle}
          data-tooltip-content="Node.js"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
        <MongoDBIcon
          className={iconStyle}
          data-tooltip-content="MongoDB"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
        />
      </div>
    </div>
  );
};

export default CurrentStack;

// style={{gridColumnEnd: "-1", gridColumnStart: "1"}}
