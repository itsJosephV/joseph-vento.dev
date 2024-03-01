import {ExperienceProps} from "../types";

const EXPERIENCE: ExperienceProps[] = [
  {
    title: "Focused on Front-end Development",
    description:
      "While currently seeking new opportunities, I am specializing in Front-end development.",
    current: true,
  },
  {
    title: "Web Developer Trainee at FULP",
    description:
      "I was part of the Programmers School project, I worked for four months on executing 'simulated projects.' This initiative allowed us to apply the knowledge gained during the Reboot Bootcamp, developing a meaninful project of our choice.",
    dateStart: "2023-01-01",
    dateEnd: "2023-05-01",
  },
  {
    title: "Designer & Illustrator freelancer",
    description:
      "I spent a season designing logos, flyers, business cards and mockups with Adobe CC for multiple clients, and was part of a 'LANCÔME' campaign to promote a perfume as an illustrator.",
    dateStart: "2019-02-01",
    dateEnd: "2022-11-01",
  },
];

const Experience = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
    };

    return new Intl.DateTimeFormat("en-US", options as Intl.DateTimeFormatOptions).format(date);
  };

  return (
    <>
      <h2 className="mb-10 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Experience</h2>
      <ol className="relative space-y-10 border-s border-zinc-300 dark:border-zinc-700 md:space-y-12">
        {EXPERIENCE.map((expItem) => {
          return (
            <li key={expItem.title} className="ms-4">
              <div className="absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border border-zinc-50 bg-zinc-300 dark:border-zinc-950 dark:bg-zinc-700" />
              <time className="mb-1 font-mono text-sm leading-none text-zinc-400 dark:text-zinc-500">
                {expItem.current
                  ? "Currently"
                  : `${formatDate(expItem.dateStart as string)} - ${formatDate(expItem.dateEnd as string)}`}
              </time>
              <h3 className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{expItem.title}</h3>
              <p>{expItem.description}</p>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Experience;
