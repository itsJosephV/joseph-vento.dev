// import EmailMenu from "../components/EmailMenu";

const Summary = () => {
  return (
    <>
      <div className="mb-5 flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-2xl font-semibold text-zinc-100">Joseph Vento</h1>
        <div className="flex items-center gap-2">
          <span className="hidden text-zinc-500 md:block">—</span>
          <a
            className="animate-background-wave cursor-pointer whitespace-nowrap bg-[linear-gradient(90deg,#99f6e4,#ddd6fe,#fed7aa,#99f6e4)] bg-[length:200%] bg-clip-text text-xs font-medium text-transparent [animation-duration:_3s]"
            href="https://www.linkedin.com/in/josephvp/"
            rel="noopener noreferrer"
            target="_blank"
          >
            #OPEN TO WORK
          </a>
        </div>
      </div>
      <p className="mb-5 max-w-xs text-wrap text-xl text-zinc-100">
        Front-end Developer <span className="play-fair">&</span> Designer currently based in Spain
      </p>
      <p className="mb-5 text-balance leading-7">
        My path is about becoming best version of myself. Currently focused on improving my skills
        in Frontend development which involves designing and crafting appealing, remarkable and
        user-friendly digital interfaces.
      </p>
      {/* <div className="flex flex-row flex-wrap gap-2">
        <a className="flex cursor-pointer items-center gap-0.5 rounded-md border border-zinc-100/10 bg-zinc-900 px-3 py-2 text-xs font-medium tracking-wide text-zinc-100 duration-200 hover:bg-zinc-800">
          DOWNLOAD CV
        </a>
        <EmailMenu />
      </div> */}
    </>
  );
};

export default Summary;
