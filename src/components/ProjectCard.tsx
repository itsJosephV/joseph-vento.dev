import {DesktopIcon} from "../icons/DesktopIcon";
import {MobileIcon} from "../icons/MobileIcon";
import {ProjectProps} from "../types";

import TechPill from "./TechPill";

const ProjectCard = ({projectItem}: {projectItem: ProjectProps}) => {
  return (
    <div className="overflow-hidden rounded-md border border-zinc-900/10 bg-zinc-100 dark:border-zinc-100/10 dark:bg-zinc-950">
      <img alt="image" className="h-full w-full object-contain" src={projectItem.image} />
      <div className="h-auto border-t border-t-zinc-900/10 p-3 px-4 dark:border-t-zinc-100/10">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{projectItem.title}</p>
          <div className="flex gap-1.5 text-zinc-400 dark:text-zinc-500">
            {projectItem.desktop && (
              <DesktopIcon
                data-tooltip-content="Desktop"
                data-tooltip-id="my-tooltip"
                data-tooltip-place="top"
              />
            )}
            {projectItem.mobile && (
              <MobileIcon
                data-tooltip-content="Mobile"
                data-tooltip-id="my-tooltip"
                data-tooltip-place="top"
              />
            )}
          </div>
        </div>
        <p className="mb-4">{projectItem.description}</p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {projectItem.techs.map((techItem) => {
            return <TechPill key={techItem} techItem={techItem} />;
          })}
        </ul>
        <div className="flex items-center justify-between">
          <time className="font-mono text-[0.8rem] text-zinc-400 dark:text-zinc-500">
            {projectItem.date}
          </time>
          <div className="flex items-center gap-3.5">
            <a
              className="whitespace-nowrap font-mono text-[0.8rem] text-zinc-900 duration-200 after:font-sans after:content-['_↗'] hover:text-zinc-900/70 dark:text-emerald-400 dark:hover:text-emerald-400/70"
              href={projectItem.repoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              CODE
            </a>
            <a
              className="whitespace-nowrap font-mono text-[0.8rem] text-zinc-900 duration-200 after:font-sans after:content-['_↗'] hover:text-zinc-900/70 dark:text-emerald-400 dark:hover:text-emerald-500/70"
              href={projectItem.demoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              PREVIEW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
