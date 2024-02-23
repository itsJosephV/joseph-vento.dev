import {NextIcon} from "../icons/NextIcon";
import {ReactIcon} from "../icons/ReactIcon";
import {TypeScriptIcon} from "../icons/TypeScriptIcon";
import {TailwindIcon} from "../icons/TailwindIcon";
import {NodeIcon} from "../icons/NodeIcon";
import {MongoDBIcon} from "../icons/MongoDBIcon";

const CurrentStack = () => {
  const iconStyle = "text-2xl text-teal-300 duration-200 hover:text-inherit";

  return (
    <div className="rounded-md bg-zinc-900 p-4 pb-6">
      <h2 className="mb-2 text-center text-xl font-semibold text-zinc-100">My current stack</h2>
      <p className="mb-6 text-center text-zinc-300">
        Mainly using React and TypeScript, complemented with the most popular frameworks like
        Next.js and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
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
