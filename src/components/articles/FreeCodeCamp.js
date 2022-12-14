import styled from "styled-components";
import projectImg1 from "../../assets/mockup_project-landing-page.png";
import projectImg2 from "../../assets/screenshot-random-quote.png";
import projectImg3 from "../../assets/screenshot-tribute-page.png";
import projectImg4 from "../../assets/screenshot-survey-form.png";
import projectImg5 from "../../assets/mockup_techdocs.png";
import projectImg6 from "../../assets/mockup_personal_portfolio_page.png";
import projectImg7 from "../../assets/mockup-palindrome-checker.png";
import ProjectGalleryCard from "../containers/ProjectGalleryCard";
import Grid3Column from "../containers/Grid3Column";

const Wrapper = styled.section``;

const FreeCodeCamp = (props) => {
  return (
    <Wrapper className="content-area">
      <div className="heading-group">
        <h3>freeCodeCamp</h3>
        <div className="heading-accent"></div>
      </div>
      <Grid3Column>
        <ProjectGalleryCard
          imgUrl={projectImg6}
          imgAlt="Personal Portfolio Page demo on mobile screen"
          projectName="Portfolio Page"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/PersonalPortfolioPage/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg2}
          imgAlt="Random Quotes Generator on laptop"
          projectName="Random Quotes"
          demoUrl="https://christadejesus.github.io/freecodecamp-random-quotes-machine/"
        />
        <ProjectGalleryCard
          imgUrl={projectImg7}
          imgAlt="Palindrome Checker on tablet"
          projectName="Palindrome Check"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/JavaScriptDSAlgorithms/PalindromeChecker/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg1}
          imgAlt="Product Landing Page on laptop"
          projectName="Landing Page"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/ProductLandingPage/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg3}
          imgAlt="Tribute Page on tablet"
          projectName="Tribute Page"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/TributePage/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg4}
          imgAlt="Survey Form on mobile"
          projectName="Survey Form"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/SurveyForm/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg5}
          imgAlt="Technical Documentation on laptop screen"
          projectName="Tech Docs"
          demoUrl="https://christadejesus.github.io/freecodecamp-projects/ResponsiveWebDesign/TechnicalDocumentation/index.html"
        />
      </Grid3Column>
    </Wrapper>
  );
};

export default FreeCodeCamp;
