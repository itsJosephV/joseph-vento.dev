import Projects from "../sections/Projects";
import CurrentStack from "../sections/CurrentStack";
import Experience from "../sections/Experience";
import AboutMe from "../sections/AboutMe";
import Summary from "../sections/Summary";
import OtherLinks from "../sections/OtherLinks";
// import EmailMenu from "../components/EmailMenu";

const PortfolioContent = () => {
  return (
    <>
      <section className="col-start-2 mb-14 w-full max-w-screen-sm md:mb-16">
        <Summary />
        {/* <div className="flex flex-row flex-wrap gap-2">
          <a className="flex cursor-pointer items-center gap-0.5 rounded-md border border-zinc-100/10 bg-zinc-900 px-3 py-2 text-xs font-medium tracking-wide text-zinc-100 duration-200 hover:bg-zinc-800">
            DOWNLOAD CV
          </a>
          <EmailMenu />
        </div> */}
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
