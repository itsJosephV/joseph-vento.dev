// import {useState} from "react";

import TheNav from "./components/TheNav";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import PortfolioContent from "./page/PortfolioContent";
// import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <header className="sticky top-3 z-10 flex w-full justify-center">
        <TheNav />
        <ScrollUpButton />
      </header>
      <main className="mx-auto max-w-[1072px] pb-20 pt-24">
        <article className="grid-layout slide-enter-content">
          <PortfolioContent />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
