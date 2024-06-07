import "./SlideEnter.css";
import TheNav from "./components/TheNav";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import PortfolioContent from "./page/PortfolioContent";
// slide-enter-content
function App() {
  return (
    <>
      <header className="sticky top-4 z-10 flex justify-center">
        <TheNav />
        <ScrollUpButton />
      </header>
      <main className="mx-auto max-w-[1072px] py-20">
        <article className="grid-layout slide-enter-content">
          <PortfolioContent />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
