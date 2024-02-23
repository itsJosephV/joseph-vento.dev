const OtherLinks = () => {
  return (
    <div className="space-y-8">
      <p className=" text-zinc-400">
        Designs at{" "}
        <span>
          <a
            className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-inherit"
            href="https://www.instagram.com/skepticalcreator/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @skepticalcreator
          </a>
        </span>
      </p>
      <div>
        <p className="mb-3 text-zinc-400">Check out other projects</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-1 whitespace-nowrap">
            <a
              className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-inherit"
              href="https://passgenerator-seven.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Password Generator
            </a>
            <span className="font-sans text-zinc-500">{" ↗"}</span>
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap">
            <a
              className=" text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-inherit"
              href="https://bookmark-dnd.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              DnD Bookmark
            </a>
            <span className="font-sans text-zinc-500">{" ↗"}</span>
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap">
            <a
              className=" text-zinc-100 underline decoration-zinc-700 underline-offset-4 duration-200 hover:decoration-inherit"
              href="https://my-movies-app-ecru.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Films Explorer
            </a>
            <span className="font-sans text-zinc-500">{" ↗"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherLinks;
