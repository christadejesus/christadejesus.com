import MainContentWrapper from "./containers/MainContentWrapper";
import DevProjects from "./articles/DevProjects";
import StandardArticle from "./containers/StandardArticle";
import AccentSolid from "./containers/AccentSolid";
import PageBanner from "./banners/PageBanner";

const Projects = () => {
  return (
    <>
      <PageBanner title="Projects" />
      <MainContentWrapper>
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
      </MainContentWrapper>
    </>
  );
};

export default Projects;
