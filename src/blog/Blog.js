import MainContentWrapper from "../components/containers/MainContentWrapper";
import Contact from "../components/articles/Contact";
import PageBanner from "../components/banners/PageBanner";

const Blog = () => {
  return (
    <>
      <PageBanner title="The Blog"></PageBanner>
      <MainContentWrapper>
        <p>Coming soon!</p>
        <Contact />
      </MainContentWrapper>
    </>
  );
};
export default Blog;
