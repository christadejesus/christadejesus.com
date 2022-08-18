import MainContentWrapper from "./containers/MainContentWrapper";
import DevProjects from "./articles/DevProjects";
import Contact from "./articles/Contact";
import StandardArticle from "./containers/StandardArticle";
import AccentSolid from "./containers/AccentSolid";
import PageBanner from "./banners/PageBanner";

const Projects = () => {
  return (
    <MainContentWrapper>
      <PageBanner title="Projects" />
      <DevProjects />
      <StandardArticle>
        <AccentSolid>
          <div>
            <h2>Design Projects</h2>
            <p>Coming soon!</p>
          </div>
          <div>
            <h2>Other Projects</h2>
            <p>Coming soon!</p>
          </div>
        </AccentSolid>
      </StandardArticle>
      <Contact />
    </MainContentWrapper>
  );
};

export default Projects;
