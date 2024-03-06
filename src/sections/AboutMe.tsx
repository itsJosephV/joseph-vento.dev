import {GCIcon} from "../icons/GCIcon";
import {GithubIcon} from "../icons/GithubIcon";
import {LinkedInIcon} from "../icons/LinkedInIcon";

const AboutMe = () => {
  const linkStyle =
    "cursor-pointer font-medium underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100 text-zinc-900 hover:decoration-inherit";

  const socialLinksStyle =
    "text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100";

  return (
    <>
      <h2 className="mb-10 text-xl font-semibold text-zinc-900 dark:text-zinc-100">About me</h2>
      <div className="flex flex-col items-center gap-7 md:flex-row md:items-start md:gap-4">
        <div className="flex w-full md:flex-col">
          <img
            alt="Joseph Vento"
            className="size-36 rounded-md object-cover md:mt-1.5"
            src="me.webp"
          />
          <div className="ml-3 flex flex-col items-start justify-end gap-2 md:ml-0 md:mt-3">
            <p className="order-2 flex flex-row-reverse items-center gap-1 whitespace-nowrap">
              <a
                className={`${socialLinksStyle}`}
                href="https://www.github.com/itsJosephV"
                rel="noopener noreferrer"
                target="_blank"
              >
                itsJosephV
              </a>
              <span className="text-violet-400">
                <GithubIcon className="size-[18px]" />
              </span>
            </p>
            <p className="flex flex-row-reverse items-center gap-1 whitespace-nowrap">
              <a
                className={socialLinksStyle}
                href="https://www.linkedin.com/in/josephvp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                josephvp
              </a>
              <span className="text-blue-400">
                <LinkedInIcon className="size-[18px]" />
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <p>
            My name is Joseph Vento, an enthusiastic Front-end Developer with an artistic background
            in Illustration and Graphic Design.
          </p>
          <p>
            I started programming in 2022, the year I was part of the "Full-Stack Web Development"
            program{" ("}
            <span className="inline-flex flex-wrap gap-1">
              <span>in Gran Canaria</span>
              <a
                className="flex items-center text-yellow-400 duration-200 hover:text-yellow-500"
                href="https://www.google.com/search?q=Gran%20Canaria"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GCIcon />
              </a>
            </span>
            {") "}
            initiated by the <a className={linkStyle}>FULP</a> together with{" "}
            <a className={linkStyle}>Reboot Academy</a> where I learned a set of skills — teamwork,
            problem-solving, collaboration and the most demanded techs.
          </p>
          <p>
            Since then I've been polishing my skills through doing and exploring the dynamic world
            of web development.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
