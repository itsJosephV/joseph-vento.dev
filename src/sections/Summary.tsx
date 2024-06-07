import EmailMenu from "../components/EmailMenu";
import "../SlideEnter.css";

const Summary = () => {
  return (
    <>
      <div className="mb-7 flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">Joseph Vento</h1>
        <div className="flex items-center gap-2">
          <span className="hidden text-zinc-900/30 dark:text-zinc-100/30 md:block">—</span>
          <a
            className="animate-background-wave cursor-pointer whitespace-nowrap bg-[linear-gradient(90deg,#34d399,#a78bfa,#fb923c,#34d399)] bg-[length:200%] 
            bg-clip-text
            text-sm font-medium text-transparent [animation-duration:_3s] dark:bg-[linear-gradient(90deg,#6ee7b7,#c4b5fd,#fdba74,#6ee7b7)]"
            href="https://www.linkedin.com/in/josephvp/"
            rel="noopener noreferrer"
            target="_blank"
          >
            #OPEN TO WORK
          </a>
        </div>
      </div>
      <h2 className="mb-7 max-w-xs text-xl text-zinc-900 dark:text-zinc-100">
        Front-end Developer <span className="play-fair">&</span> Designer currently based in Spain
      </h2>
      <p className="mb-5">
        My path is about becoming the best version of myself. Currently focused on improving my
        skills in web development which involves designing and crafting appealing, remarkable and
        user-friendly digital interfaces.
      </p>
      <div className="flex flex-row flex-wrap gap-2">
        <a
          className="rounded-md border border-zinc-900/10 bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 duration-200 hover:bg-zinc-200 dark:border-zinc-100/10 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          download="CV_Joseph.pdf"
          href="/CV_Joseph.pdf"
        >
          Download CV
        </a>
        <EmailMenu />
      </div>
    </>
  );
};

export default Summary;
