import MainContentWrapper from "./containers/MainContentWrapper";
import AboutPreview from "./articles/AboutPreview";
import Contact from "./articles/Contact";
import FeatureProjects from "./articles/FeatureProjects";
import Hero from "./banners/Hero";
import RecentArticles from "./articles/RecentArticles";

const Home = () => {
  return (
    <>
      <Hero />
      <MainContentWrapper>
        <FeatureProjects />
        <AboutPreview />
        <RecentArticles />
        <Contact />
      </MainContentWrapper>
    </>
  );
};

export default Home;
