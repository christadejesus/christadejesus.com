import MainContentWrapper from "./containers/MainContentWrapper";
import StandardArticle from "./containers/StandardArticle";
import AccentSolid from "./containers/AccentSolid";
import PageBanner from "./banners/PageBanner";
import FreeCodeCamp from "./articles/FreeCodeCamp";
import { SiFreecodecamp, SiFrontendmentor } from "react-icons/si";
import styled from "styled-components";
import Button from "./buttons/Button";
import FrontendMentor from "./articles/FrontendMentor";

const Wrapper = styled.div`
  .btn-icon {
    font-size: 2rem;
    line-height: 0rem;
  }
  .btns-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
  }
`;
const Projects = () => {
  return (
    <Wrapper>
      <PageBanner title="Projects" />
      <MainContentWrapper>
        <StandardArticle>
          <AccentSolid>
            <h2>Challenge Inspired Projects</h2>
            <p>
              I love a good challenge! These are projects I've submitted for
              certifications, courses, and challenges, as well as variations of
              my original submissions. Click any image to see the live demo or
              connect with my profiles on the platforms:
            </p>
            <div className="btns-container">
              <Button
                primary
                as="a"
                href="https://www.frontendmentor.io/profile/indychrista"
                target="_blank"
                rel="noreferrer"
              >
                <SiFrontendmentor className="btn-icon" />
                Frontend Mentor
              </Button>
              <Button
                primary
                as="a"
                href="https://www.freecodecamp.org/christadejesus"
                target="_blank"
                rel="noreferrer"
              >
                <SiFreecodecamp className="btn-icon" />
                freeCodeCamp
              </Button>
            </div>
          </AccentSolid>
          <FrontendMentor />
          <FreeCodeCamp />
          <AccentSolid>
            <div>
              <h2>Landing Pages</h2>
              <p>Coming soon!</p>
            </div>
          </AccentSolid>
          <AccentSolid>
            <div>
              <h2>Components</h2>
              <p>Coming soon!</p>
            </div>
          </AccentSolid>
          <AccentSolid>
            <div>
              <h2>No-Code/Low-Code</h2>
            </div>
          </AccentSolid>
        </StandardArticle>
      </MainContentWrapper>
    </Wrapper>
  );
};

export default Projects;
