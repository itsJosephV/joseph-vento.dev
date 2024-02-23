import {GCIcon} from "../icons/GCIcon";
import {GithubIcon} from "../icons/GithubIcon";
import {LinkedInIcon} from "../icons/LinkedInIcon";

const AboutMe = () => {
  const linkStyle =
    "cursor-pointer font-medium underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-inherit";

  return (
    <>
      <h2 className="mb-10 text-xl font-semibold text-zinc-100">About me</h2>
      <div className="flex flex-col items-center gap-7 md:flex-row md:items-start md:gap-4">
        <div className="flex w-full md:flex-col">
          <img
            alt=""
            className="size-36 rounded-md object-cover md:mt-1.5"
            src="https://www.wecb.fm/wp-content/uploads/2023/11/Review-DRAKE-For-All-The-Dogs-Scary-Hours-Edition.jpg"
          />
          <div className="ml-3 flex flex-col items-start justify-end gap-2 md:ml-0 md:mt-3">
            <a
              className="order-2 flex flex-row-reverse items-center gap-1 whitespace-nowrap text-sm text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-zinc-100"
              href="https://www.github.com/itsJosephV"
              rel="noopener noreferrer"
              target="_blank"
            >
              itsJosephV
              <span className="text-[1.1rem] text-violet-300">
                <GithubIcon />
              </span>
            </a>
            <a
              className="flex flex-row-reverse items-center gap-1 whitespace-nowrap text-sm text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-zinc-100"
              href="https://www.linkedin.com/in/josephvp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              josephvp
              <span className="text-[1.1rem] text-blue-300">
                <LinkedInIcon />
              </span>
            </a>
          </div>
        </div>
        <div className="space-y-5 text-pretty">
          <p className="">
            My name is Joseph Vento, an enthusiastic Frontend Developer with an artistic background
            in Illustration and Graphic Design.
          </p>
          <p className="">
            I started programming in 2022, the year I was part of the "Full-Stack Web Development"
            program{" ("}
            <span className="inline-flex flex-wrap gap-1">
              <span>in Gran Canaria</span>
              <a
                className="flex items-center text-amber-300 duration-200 hover:text-amber-200/70"
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
          <p className="">
            Since then I've been polishing my skills through doing and exploring the dynamic world
            of web development.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
