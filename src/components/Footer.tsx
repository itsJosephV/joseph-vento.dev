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
      <div className="flex items-center justify-between border-t border-zinc-100/10 md:mx-auto md:max-w-[640px]">
        <p className="flex items-center gap-1 text-zinc-500">
          <StarBurst
            className={`h-4 w-4 cursor-pointer duration-200 ${onQuote ? "text-orange-300 hover:text-orange-300/70" : "text-teal-300 hover:text-teal-300/70"}`}
            onClick={() => setOnQuote(!onQuote)}
          />

          {onQuote ? (
            <q>
              <em className="font-serif">{quote}</em>
            </q>
          ) : (
            <span>{new Date().getFullYear()}-PRESENT | JosephV</span>
          )}
        </p>
        <a
          className="font-mono text-zinc-500 underline decoration-zinc-700 underline-offset-2 duration-200 hover:decoration-zinc-500"
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
