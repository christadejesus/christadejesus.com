import styled from "styled-components";
import projectImg1 from "../../assets/mockup_project-landing-page.png";
import projectImg2 from "../../assets/screenshot-random-quote.png";
import projectImg3 from "../../assets/mockup-palindrome-checker.png";
import projectImg5 from "../../assets/mockup_personal_portfolio_page.png";
import Grid4Column from "../containers/Grid4Column";
import StandardArticle from "../containers/StandardArticle";
import ProjectGridCard from "../containers/ProjectGridCard";

const Wrapper = styled.div`
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
        <div className="heading-accent"></div>
        <Grid4Column>
          <ProjectGridCard
            imgUrl={projectImg2}
            imgAlt="Random Quotes Generator on laptop"
            projectName="Random Quotes"
            repoUrl="https://github.com/indychrista/freecodecamp-random-quotes-machine/tree/main"
            demoUrl="https://indychrista.github.io/freecodecamp-random-quotes-machine/"
          />
          <ProjectGridCard
            imgUrl={projectImg5}
            imgAlt="Personal Portfolio Page on mobile"
            projectName="Portfolio Page"
            repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/PersonalPortfolioPage"
            demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/PersonalPortfolioPage/index.html"
          />
          <ProjectGridCard
            imgUrl={projectImg1}
            imgAlt="Product Landing Page on laptop"
            projectName="Landing Page"
            repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/ResponsiveWebDesign/ProductLandingPage"
            demoUrl="https://indychrista.github.io/freecodecamp-projects/ResponsiveWebDesign/ProductLandingPage/index.html"
          />
          <ProjectGridCard
            imgUrl={projectImg3}
            imgAlt="Palindrome Checker on tablet"
            projectName="Palindrome Check"
            repoUrl="https://github.com/indychrista/freecodecamp-projects/tree/main/JavaScriptDSAlgorithms/PalindromeChecker"
            demoUrl="https://indychrista.github.io/freecodecamp-projects/JavaScriptDSAlgorithms/PalindromeChecker/index.html"
          />
        </Grid4Column>
      </StandardArticle>
    </Wrapper>
  );
};

export default FeatureProjects;
