import ProjectCard from "../components/ProjectCard";
import {ProjectProps} from "../types";

const PROJECTS: ProjectProps[] = [
  {
    projectID: 1,
    title: "Tailwind Snippets 🪄",
    description:
      "Collection of snippets for seamless integration into your apps. This is a source code study project, original work by Alexandru Turcanu.",
    image: "../project-two.webp",
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
    image: "../project-one.webp",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    repoURL: "https://github.com/itsJosephV/dictionary-app/tree/main",
    demoURL: "https://dictionary-app-phi-weld.vercel.app",
    date: "01/24",
    desktop: true,
    mobile: true,
  },
  {
    projectID: 3,
    title: "My own Readme.so 🗒️",
    description: "My own version of the popular markdown editor readme.so, work in progress...",
    image: "../project-three.webp",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    repoURL: "https://github.com/itsJosephV/readme-jv",
    demoURL: "",
    date: "06/24",
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
