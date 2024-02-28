import {useEffect, useState} from "react";

import {StarBurst} from "../icons/StarBurst";
import quotes from "../quotes.json";

const Footer = () => {
  const [onQuote, setOnQuote] = useState<boolean>(false);
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.inspirational_phrases.length);

    setQuote(quotes.inspirational_phrases[randomIndex]);
  }, []);

  return (
    <footer className="whitespace-nowrap text-sm leading-[2.5rem]">
      <div className="flex items-center justify-between border-t border-t-zinc-900/10 dark:border-t-zinc-100/10 md:mx-auto md:max-w-[640px]">
        <p className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
          <StarBurst
            className={`size-5 cursor-pointer duration-200 ${onQuote ? "text-orange-400 hover:text-orange-500" : "text-purple-400 hover:text-purple-500"}`}
            onClick={() => setOnQuote(!onQuote)}
          />

          {onQuote ? (
            <em className="font-serif">"{quote}"</em>
          ) : (
            <span>{new Date().getFullYear()}-PRESENT | JosephV</span>
          )}
        </p>
        <a
          className="cursor-pointer tracking-wide text-zinc-500 underline decoration-zinc-300 underline-offset-4 duration-200 hover:decoration-inherit dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:decoration-inherit"
          href=""
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </a>
      </div>
    </footer>
  );
};

export default Footer;
