import MainContentWrapper from "./containers/MainContentWrapper";
import FeatureProjects from "./articles/FeatureProjects";
import Contact from "./articles/Contact";
import PageBanner from "./banners/PageBanner";

const Projects = () => {
  return (
    <>
      <PageBanner title="Projects"></PageBanner>
      <MainContentWrapper>
        <FeatureProjects />

        <article className="main-article accent-article">
          <div>
            <h2>Development Projects</h2>
            <p>Coming soon!</p>
          </div>
          <div>
            <h2>Design Projects</h2>
            <p>Coming soon!</p>
          </div>
          <div>
            <h2>Other Projects</h2>
            <p>Coming soon!</p>
          </div>
        </article>
        <Contact />
      </MainContentWrapper>
    </>
  );
};

export default Projects;
