import MainContentWrapper from "../components/containers/MainContentWrapper";
import Contact from "../components/articles/Contact";
import StandardArticle from "../components/containers/StandardArticle";
import AccentSolid from "../components/containers/AccentSolid";

const Blog = () => {
  return (
    <>
      <MainContentWrapper>
        <StandardArticle>
          <AccentSolid>
            <h1>Coming soon!</h1>
          </AccentSolid>
        </StandardArticle>
        <Contact />
      </MainContentWrapper>
    </>
  );
};
export default Blog;
