import styled from "styled-components";
import heroBackground from "../../assets/wave1.png";
import heroGraphic from "../../assets/desk.png";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  width: 100%;
  height: 400px;
  background: url(${heroBackground});
  background-size: cover;
  background-position: bottom;

  .hero-img {
    max-height: 60%;
  }
  h1 {
    font-family: var(--font-cursive);
    font-size: 3rem;
    font-weight: 600;
  }
  @media screen and (min-width: 750px) {
    height: 500px;

    h1 {
      font-size: 4rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <img src={heroGraphic} alt="computer desk graphic" className="hero-img" />
      <h1>Fueled by code + coffee</h1>
    </HeroWrapper>
  );
};

export default Hero;
