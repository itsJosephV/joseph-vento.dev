import EmailMenu from "../components/EmailMenu";

const Summary = () => {
  return (
    <>
      <div className="mb-7 flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">Joseph Vento</h1>
        <div className="flex items-center gap-2">
          <span className="hidden text-zinc-400 dark:text-zinc-600 md:block">—</span>
          <a
            className="animate-background-wave cursor-pointer whitespace-nowrap bg-[linear-gradient(90deg,#10b981,#8b5cf6,#3b82f6,#10b981)] bg-[length:200%] bg-clip-text text-sm font-medium text-transparent [animation-duration:_3s] dark:bg-[linear-gradient(90deg,#34d399,#a78bfa,#60a5fa,#34d399)]"
            href="https://www.linkedin.com/in/josephvp/"
            rel="noopener noreferrer"
            target="_blank"
          >
            #OPEN TO WORK
          </a>
        </div>
      </div>
      <p className="mb-7 max-w-xs text-wrap text-xl text-zinc-900 dark:text-zinc-100">
        Front-end Developer <span className="play-fair">&</span> Designer currently based in Spain
      </p>
      <p className="mb-5 text-pretty">
        My path is about becoming best version of myself. Currently focused on improving my skills
        in Frontend development which involves designing and crafting appealing, remarkable and
        user-friendly digital interfaces.
      </p>
      <div className="flex flex-row flex-wrap gap-2">
        <a
          className="cursor-pointer rounded-md border border-zinc-900/10 bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 duration-200 hover:bg-zinc-200 dark:border-zinc-100/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          download="josephcv.pdf"
          href="/josephcv.pdf"
        >
          Download CV
        </a>
        <EmailMenu />
      </div>
    </>
  );
};

export default Summary;

// <a href="path_to_file" download="proposed_file_name">Download</a>
