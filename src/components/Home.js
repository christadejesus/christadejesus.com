import MainContentWrapper from "./containers/MainContentWrapper";
import AboutPreview from "./articles/AboutPreview";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <AboutPreview />
        <FeatureProjects />
      </MainContentWrapper>
    </>
  );
};

export default Home;
