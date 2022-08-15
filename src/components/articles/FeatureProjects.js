import styled from "styled-components";
import projectImg1 from "../../assets/mockup_project-landing-page.png";
import projectImg2 from "../../assets/screenshot-random-quote.png";
import projectImg3 from "../../assets/screenshot-tribute-page.png";
import projectImg4 from "../../assets/screenshot-survey-form.png";
import ProjectGrid from "../containers/ProjectGrid";
import Button from "../buttons/Button";
import StandardArticle from "../containers/StandardArticle";

const Wrapper = styled.div`
  h3 {
    margin-bottom: 5px;
  }
  .project-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }
  .project-card {
    border-radius: 5px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-neutral-mdlt);
  }
  .project-card img {
    border-radius: 4px 4px 0px 0px;
  }
  .project-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 0px 10px;
  }
`;

const FeatureProjects = () => {
  return (
    <Wrapper>
      <StandardArticle id="feature-projects">
        <h2>Featured Projects</h2>
        <ProjectGrid>
          <div className="project-card">
            <img src={projectImg1} alt="Product Landing Page on laptop" />
            <div className="project-info">
              <h3>Landing Page</h3>
              <div className="h3-accent"></div>
              <div className="project-btns">
                <Button
                  primary
                  as="a"
                  href="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/ProductLandingPage/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the demo
                </Button>
                <Button
                  as="a"
                  href="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/ProductLandingPage"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the code
                </Button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImg2} alt="Random Quotes Generator on laptop" />
            <div className="project-info">
              <h3>Random Quotes</h3>
              <div className="h3-accent"></div>
              <div className="project-btns">
                <Button
                  primary
                  as="a"
                  href="https://indychrista.github.io/freecodecamp-random-quotes-machine/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the demo
                </Button>
                <Button
                  as="a"
                  href="https://github.com/indychrista/freecodecamp-random-quotes-machine"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the code
                </Button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImg3} alt="Tribute Page on tablet" />
            <div className="project-info">
              <h3>Tribute Page</h3>
              <div className="h3-accent"></div>
              <div className="project-btns">
                <Button
                  primary
                  as="a"
                  href="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/TributePage/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the demo
                </Button>
                <Button
                  as="a"
                  href="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/TributePage"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the code
                </Button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImg4} alt="Survey Form on mobile" />
            <div className="project-info">
              <h3>Survey Form</h3>
              <div className="h3-accent"></div>
              <div className="project-btns">
                <Button
                  primary
                  as="a"
                  href="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/SurveyForm/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the demo
                </Button>
                <Button
                  as="a"
                  href="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/SurveyForm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the code
                </Button>
              </div>
            </div>
          </div>
        </ProjectGrid>
      </StandardArticle>
    </Wrapper>
  );
};

export default FeatureProjects;
