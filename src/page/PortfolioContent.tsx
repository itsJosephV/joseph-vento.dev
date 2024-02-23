import Projects from "../sections/Projects";
import CurrentStack from "../sections/CurrentStack";
import Experience from "../sections/Experience";
import AboutMe from "../sections/AboutMe";
import Summary from "../sections/Summary";
import OtherLinks from "../sections/OtherLinks";

const PortfolioContent = () => {
  return (
    <>
      <section className="col-start-2 mb-14 w-full max-w-screen-sm md:mb-16">
        <Summary />
      </section>
      <section className="col-start-2 w-full max-w-screen-sm py-5">
        <CurrentStack />
      </section>
      <hr className="col-start-2 mx-auto my-8 w-[50px] border-zinc-100/20" />
      <section
        className="col-start-2 mb-14 w-full max-w-screen-sm scroll-m-20 py-5 md:mb-16"
        data-section="experience"
        id="experience"
      >
        <Experience />
      </section>
      <section
        className="col-start-2 mb-14 w-full max-w-screen-sm scroll-m-20 py-5 md:mb-16"
        data-section="projects"
        id="projects"
      >
        <Projects />
      </section>
      <section
        className="col-start-2 w-full max-w-screen-sm scroll-m-20 py-5"
        data-section="about-me"
        id="about-me"
      >
        <AboutMe />
      </section>
      <hr className="col-start-2 mx-auto my-8 w-[50px] border-zinc-100/20" />
      <div className="col-start-2 w-full max-w-screen-sm py-5">
        <OtherLinks />
      </div>
    </>
  );
};

export default PortfolioContent;
