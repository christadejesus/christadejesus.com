import styled from "styled-components";
import MainContentWrapper from "./containers/MainContentWrapper";
import Contact from "./articles/Contact";
import StandardArticle from "./containers/StandardArticle";
import PageBanner from "./banners/PageBanner";

const Wrapper = styled.div`
  .heading-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  }
  h2 {
    margin: 0;
  }
  .heading-accent {
    width: 40px;
    height: 6px;
    background: var(--color-accent-2);
    margin-bottom: 20px;
    margin-top: 5px;
  }
`;

const About = () => {
  return (
    <MainContentWrapper>
      <PageBanner title="About" />
      <Wrapper>
        <StandardArticle>
          <h2>Meet Christa</h2>
          <div className="heading-accent"></div>
          <p>Updating soon! </p>
        </StandardArticle>
        <Contact />
      </Wrapper>
    </MainContentWrapper>
  );
};

export default About;
