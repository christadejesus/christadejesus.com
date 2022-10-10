import styled from "styled-components";
import projectImg1 from "../../assets/suite-landing-page.png";
import projectImg2 from "../../assets/nft-preview-component.png";
import projectImg3 from "../../assets/3-column-card.png";
import projectImg4 from "../../assets/qr-code-component.png";
import projectImg5 from "../../assets/chatAppCSSIllustration.png";
import ProjectGalleryCard from "../containers/ProjectGalleryCard";
import Grid3Column from "../containers/Grid3Column";

const Wrapper = styled.section``;

const FrontendMentor = (props) => {
  return (
    <Wrapper className="content-area">
      <div className="heading-group">
        <h3>Frontend Mentor</h3>
        <div className="heading-accent"></div>
      </div>
      <Grid3Column>
        <ProjectGalleryCard
          imgUrl={projectImg5}
          imgAlt="Chat App CSS Animation"
          projectName="Chat App CSS Animation"
          demoUrl="https://christadejesus.github.io/freecodecamp-random-quotes-machine/"
        />
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
          imgAlt="3-Column Preview Card"
          projectName="3-Column Card"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/3-column-preview-card-component-main/index.html"
        />
        <ProjectGalleryCard
          imgUrl={projectImg4}
          imgAlt="QR Code Component"
          projectName="QR Code Component"
          demoUrl="https://christadejesus.github.io/frontend-mentor-repo/qr-code-component-main/index.html"
        />
      </Grid3Column>
    </Wrapper>
  );
};

export default FrontendMentor;
