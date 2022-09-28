import styled from "styled-components";
import projectImg1 from "../../assets/suite-landing-page.png";
import projectImg2 from "../../assets/nft-preview-component.png";
import projectImg3 from "../../assets/3-column-card.png";
import projectImg4 from "../../assets/qr-code-component.png";
import ProjectGalleryCard from "../containers/ProjectGalleryCard";
import Grid4Column from "../containers/Grid4Column";

const Wrapper = styled.div`
  h3 {
    font-family: var(--font-cursive);
    font-size: 2.6rem;
    margin: 40px 0px 20px 0px;
    text-transform: none;
    letter-spacing: 0.2rem;
  }
`;

const FrontendMentor = (props) => {
  return (
    <Wrapper>
      <h3>Frontend Mentor</h3>
      <Grid4Column>
        <ProjectGalleryCard
          imgUrl={projectImg1}
          imgAlt="Suite Landing Page"
          projectName="Landing Page"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/suite-landing-page/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg2}
          imgAlt="NFT Preview Component"
          projectName="Preview Component"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/nft-preview-card-component-main/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg3}
          imgAlt="3-Column Preview Card Component"
          projectName="3-Column Card Component"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/3-column-preview-card-component-main/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg4}
          imgAlt="QR Code Component"
          projectName="QR Code Component"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/qr-code-component-main/index.html"
        />
      </Grid4Column>
    </Wrapper>
  );
};

export default FrontendMentor;
