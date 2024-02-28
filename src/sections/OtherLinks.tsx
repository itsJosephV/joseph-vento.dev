const OtherLinks = () => {
  return (
    <div className="space-y-8">
      <p className="dark:text-inherit">
        Designs at{" "}
        <span>
          <a
            className="cursor-pointer font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-inherit dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
            href="https://www.instagram.com/skepticalcreator/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @skepticalcreator
          </a>
        </span>
      </p>
      <div>
        <p className="mb-3 dark:text-inherit">Check out other projects</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-1 whitespace-nowrap">
            <a
              className="cursor-pointer font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-inherit dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
              href="https://passgenerator-seven.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Password Generator
            </a>
            <span className="font-sans text-zinc-400 dark:text-zinc-500">{" ↗"}</span>
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap">
            <a
              className="cursor-pointer font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-inherit dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
              href="https://bookmark-dnd.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              DnD Bookmark
            </a>
            <span className="font-sans text-zinc-400 dark:text-zinc-500">{" ↗"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherLinks;
