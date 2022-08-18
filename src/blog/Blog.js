import MainContentWrapper from "../components/containers/MainContentWrapper";
import Contact from "../components/articles/Contact";
import StandardArticle from "../components/containers/StandardArticle";
import PageBanner from "../components/banners/PageBanner";

const Blog = () => {
  return (
    <>
      <MainContentWrapper>
        <PageBanner title="The Blog" />
        <StandardArticle>
          <h2>Coming soon!</h2>
        </StandardArticle>
        <Contact />
      </MainContentWrapper>
    </>
  );
};
export default Blog;
