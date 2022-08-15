import MainContentWrapper from "./containers/MainContentWrapper";
import FeatureProjects from "./articles/FeatureProjects";
import Contact from "./articles/Contact";
import StandardArticle from "./containers/StandardArticle";
import AccentSolid from "./containers/AccentSolid";

const Projects = () => {
  return (
    <MainContentWrapper>
      <StandardArticle>
        <AccentSolid>
          <h1>Projects</h1>
        </AccentSolid>
      </StandardArticle>
      <FeatureProjects />
      <StandardArticle>
        <AccentSolid>
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
        </AccentSolid>
      </StandardArticle>
      <Contact />
    </MainContentWrapper>
  );
};

export default Projects;
