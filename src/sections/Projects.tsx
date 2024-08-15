import ProjectCard from "../components/ProjectCard";
import {ProjectProps} from "../types";

//TODO: ADD "LAST UPDATE"

const PROJECTS: ProjectProps[] = [
  {
    projectID: 1,
    title: "Tailwind Snippets 🪄",
    description:
      "Collection of snippets for seamless integration into your apps. This is a source code study project, original work by Alexandru Turcanu.",
    image: "../project-1.webp",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    repoURL: "https://github.com/itsJosephV/snippets-tailwind-study",
    demoURL: "https://snippets-tailwind-study.vercel.app",
    date: "11/23",
    desktop: true,
  },
  {
    projectID: 2,
    title: "Dictionary App 📚",
    description:
      "English dictionary app with functionalities similar to those found on macOS and more. Powered by Rapid API.",
    image: "../project-2.webp",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    repoURL: "https://github.com/itsJosephV/dictionary-app/tree/main",
    demoURL: "https://dictionary-app-phi-weld.vercel.app",
    date: "01/24",
    desktop: true,
    mobile: true,
  },
  {
    projectID: 3,
    title: "My own Readme constructor v2 🗒️",
    description:
      "A personal take on the popular markdown editor, Readme.so. While there are still areas to refine, the app is fully functional and ready for use.",
    image: "../project-3-v2.webp",
    techs: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
    repoURL: "https://github.com/itsJosephV/readme-jv",
    demoURL: "https://readmejv.vercel.app",
    date: "06/24",
    // thu 15 aug last update
    desktop: true,
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="mb-10 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Projects</h2>
      <div className="flex flex-col gap-12">
        {PROJECTS.sort((a, b) => b.projectID - a.projectID).map((projectItem) => {
          return <ProjectCard key={projectItem.projectID} projectItem={projectItem} />;
        })}
      </div>
    </>
  );
};

export default Projects;
