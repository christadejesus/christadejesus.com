import MainContentWrapper from "./containers/MainContentWrapper";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";
import AboutPreview from "./articles/AboutPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <FeatureProjects />
        <AboutPreview />
      </MainContentWrapper>
    </>
  );
};

export default Home;
