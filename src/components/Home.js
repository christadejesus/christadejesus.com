import MainContentWrapper from "./containers/MainContentWrapper";
import About from "./articles/About";
import Contact from "./articles/Contact";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <FeatureProjects />
        <About />
        <Contact />
      </MainContentWrapper>
    </>
  );
};

export default Home;
