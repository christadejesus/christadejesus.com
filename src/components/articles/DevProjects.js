import styled from "styled-components";
import projectImg1 from "../../assets/mockup_project-landing-page.png";
import projectImg2 from "../../assets/screenshot-random-quote.png";
import projectImg3 from "../../assets/screenshot-tribute-page.png";
import projectImg4 from "../../assets/screenshot-survey-form.png";
import projectImg5 from "../../assets/mockup_techdocs.png";
import projectImg6 from "../../assets/mockup_personal_portfolio_page.png";
import projectImg7 from "../../assets/mockup-palindrome-checker.png";
import ProjectGridCardMore from "../containers/ProjectGridCardMore";
import Grid3Column from "../containers/Grid3Column";

const Wrapper = styled.div``;

const DevProjects = (props) => {
  return (
    <Wrapper>
      <h2>Development Projects</h2>
      <Grid3Column>
        <ProjectGridCardMore
          imgUrl={projectImg6}
          imgAlt="Personal Portfolio Page demo on mobile screen"
          projectName="Portfolio Page"
          detail1="HTML/CSS"
          detail2="Accessible hidden text"
          detail4="Fixed navigation"
          detail5="Responsive layout"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/PersonalPortfolioPage"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/PersonalPortfolioPage/index.html"
        />
        <ProjectGridCardMore
          imgUrl={projectImg2}
          imgAlt="Random Quotes Generator on laptop"
          projectName="Random Quotes"
          detail1="React/JSX/JS/CSS"
          detail2="CSS Variables"
          detail3="Flexbox"
          detail4="Stateful component"
          detail5="React Icons"
          detail6="Github Pages"
          repoUrl="https://github.com/indychrista/freecodecamp-random-quotes-machine/tree/main"
          demoUrl="https://indychrista.github.io/freecodecamp-random-quotes-machine/"
        />
        <ProjectGridCardMore
          imgUrl={projectImg7}
          imgAlt="Palindrome Checker on tablet"
          projectName="Palindrome Checker"
          detail1="HTML/CSS/JS"
          detail2="Custom SVGs"
          detail3="Responsive Layout"
          detail4="FA Icons"
          detail5="HTML Form"
          detail6="Custom Banner"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/JavaScriptDSAlgorithms/PalindromeChecker"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/JavaScriptDSAlgorithms/PalindromeChecker/index.html"
        />
        <ProjectGridCardMore
          imgUrl={projectImg1}
          imgAlt="Product Landing Page on laptop"
          projectName="Landing Page"
          detail1="HTML/CSS"
          detail2="CSS Variables"
          detail3="Flexbox"
          detail4="Logo design"
          detail5="Image editing"
          detail6="Copy writing"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/ProductLandingPage"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/ProductLandingPage/index.html"
        />
        <ProjectGridCardMore
          imgUrl={projectImg3}
          imgAlt="Tribute Page on tablet"
          projectName="Tribute Page"
          detail1="HTML/CSS"
          detail2="Flexbox"
          detail4="Github Pages"
          detail5="Remix Icons"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/TributePage"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/TributePage/index.html"
        />
        <ProjectGridCardMore
          imgUrl={projectImg4}
          imgAlt="Survey Form on mobile"
          projectName="Survey Form"
          detail1="HTML/CSS"
          detail2="HTML Form"
          detail4="Flexbox"
          detail5="Fixed background image"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/SurveyForm"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/SurveyForm/index.html"
        />
        <ProjectGridCardMore
          imgUrl={projectImg5}
          imgAlt="Technical Documentation on laptop screen"
          projectName="Technical Documentation"
          detail1="HTML/CSS"
          detail2="Scrolling Navbar"
          detail4="Fixed navigation"
          detail5="Responsive layout"
          repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/TechnicalDocumentation"
          demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/TechnicalDocumentation/index.html"
        />
      </Grid3Column>
    </Wrapper>
  );
};

export default DevProjects;
