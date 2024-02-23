import {useState} from "react";

import TheNav from "./components/TheNav";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import PortfolioContent from "./page/PortfolioContent";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );

  //   const onWindowMatch = () => {
  //     if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
  //       element.classList.add("dark");
  //     } else {
  //       element.classList.remove("dark");
  //     }
  //   };

  //   switch (theme) {
  //     case "dark":
  //       element.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //       break;
  //     case "light":
  //       element.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //       break;
  //     default:
  //       localStorage.removeItem("theme");
  //       onWindowMatch();
  //       break;
  //   }
  // }, [theme, darkQuery.matches, element.classList]);

  // useEffect(() => {
  //   const listener = (e: any) => {
  //     if (!("theme" in localStorage)) {
  //       if (e.matches) {
  //         element.classList.add("dark");
  //       } else {
  //         element.classList.remove("dark");
  //       }
  //     }
  //   };

  //   darkQuery.addEventListener("change", listener);

  //   return () => {
  //     darkQuery.removeEventListener("change", listener);
  //   };
  // }, [darkQuery, element.classList]);

  return (
    <>
      <header className="sticky top-3 z-10 flex w-full justify-center">
        <TheNav />
        <ScrollUpButton />
      </header>
      <main className="mx-auto max-w-[1072px] pb-20 pt-24">
        <ThemeToggle setTheme={setTheme} theme={theme} />
        <article className="grid-layout slide-enter-content">
          <PortfolioContent />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
