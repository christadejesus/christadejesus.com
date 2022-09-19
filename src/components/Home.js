import MainContentWrapper from "./containers/MainContentWrapper";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <FeatureProjects />
      </MainContentWrapper>
    </>
  );
};

export default Home;
