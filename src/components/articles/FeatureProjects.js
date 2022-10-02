import styled from "styled-components";
import projectImg1 from "../../assets/mockup_project-landing-page.png";
import projectImg2 from "../../assets/screenshot-random-quote.png";
import projectImg3 from "../../assets/suite-landing-page.png";
import Grid3Column from "../containers/Grid3Column";
import ProjectGridCard from "../containers/ProjectGridCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Wrapper = styled.section`
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
    border: 1px solid var(--neutral-mdlt);
  }
  .project-card img {
    border-radius: 4px 4px 0px 0px;
  }
  .arrow-right {
    font-size: 1.4rem;
  }
`;

const FeatureProjects = () => {
  return (
    <Wrapper className="content-area">
      <h2>Featured Projects</h2>
      <div className="heading-accent"></div>
      <Grid3Column>
        <ProjectGridCard
          imgUrl={projectImg3}
          imgAlt="Suite Landing Page"
          projectName="Suite Landing Page"
          repoUrl="https://github.com/christadejesus/frontend-mentor-repo/tree/main/suite-landing-page"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/suite-landing-page/index.html"
        />
        <ProjectGridCard
          imgUrl={projectImg2}
          imgAlt="Random Quotes Generator on laptop"
          projectName="Random Quotes"
          repoUrl="https://github.com/christadejesus/freecodecamp-random-quotes-machine/tree/main"
          demoUrl="https://christadejesus.github.io/freecodecamp-random-quotes-machine/"
        />
        <ProjectGridCard
          imgUrl={projectImg1}
          imgAlt="Product Landing Page on laptop"
          projectName="Landing Page"
          repoUrl="https://github.com/christadejesus/freecodecamp-projects/tree/main/ResponsiveWebDesign/ProductLandingPage"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/ProductLandingPage/index.html"
        />
      </Grid3Column>
      <Link to="/projects">
        See more development projects <FaArrowRight className="arrow-right" />
      </Link>
    </Wrapper>
  );
};

export default FeatureProjects;
