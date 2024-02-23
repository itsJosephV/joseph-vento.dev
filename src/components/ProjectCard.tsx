import {DesktopIcon} from "../icons/DesktopIcon";
import {MobileIcon} from "../icons/MobileIcon";
import {ProjectProps} from "../types";

import TechPill from "./TechPill";

const ProjectCard = ({projectItem}: {projectItem: ProjectProps}) => {
  return (
    <div className="custom-shadow overflow-hidden rounded-md border border-zinc-100/10 bg-zinc-950">
      <img alt="image" className="h-full w-full object-contain" src={projectItem.image} />
      <div className="h-auto border-t border-zinc-100/10 p-3 px-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-medium text-zinc-100">{projectItem.title}</p>
          <div className="flex gap-1 text-zinc-400">
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
          <time className="font-mono text-[0.8rem] text-zinc-400">{projectItem.date}</time>
          <div className="flex items-center gap-3">
            <a
              className="whitespace-nowrap font-mono text-[0.8rem] text-teal-400 duration-200 after:font-sans after:content-['_↗'] hover:text-teal-400/80"
              href={projectItem.repoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Code
            </a>
            <a
              className="whitespace-nowrap font-mono text-[0.8rem] text-teal-400 duration-200 after:font-sans after:content-['_↗'] hover:text-teal-400/80"
              href={projectItem.demoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
