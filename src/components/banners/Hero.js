import styled from "styled-components";
import heroBackground from "../../assets/wave1.png";
import heroGraphic from "../../assets/desk.png";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 90vh;
  background: url(${heroBackground});
  background-size: cover;
  background-position: bottom;

  .hero-img {
    max-height: 40%;
    margin-top: -40px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    line-height: 1;
  }
  h1 span {
    display: block;
  }
  .plus {
    padding-top: 4px;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <img src={heroGraphic} alt="computer desk graphic" className="hero-img" />
      <h1>
        <span>development</span>
        <span className="plus">+</span>
        <span>design</span>
      </h1>
    </HeroWrapper>
  );
};

export default Hero;
