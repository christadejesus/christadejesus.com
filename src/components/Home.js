import MainContentWrapper from "./containers/MainContentWrapper";
import styled from "styled-components";
import About from "./articles/About";
import Contact from "./articles/Contact";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";

const HomeWrapper = styled.main`
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <HomeWrapper>
          <FeatureProjects />
          <About />
          <Contact />
        </HomeWrapper>
      </MainContentWrapper>
    </>
  );
};

export default Home;
