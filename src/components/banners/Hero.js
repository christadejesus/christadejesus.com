import styled from "styled-components";
import heroBackground from "../../assets/wave1.png";
import heroGraphic from "../../assets/desk.png";
import Button from "../buttons/Button";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 90vh;
  padding: 20px;
  margin-top: 60px;
  background: url(${heroBackground});
  background-size: cover;
  background-position: bottom;

  .hero-img {
    max-height: 40%;
    margin-top: -40px;
  }
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 550px;
    text-align: center;
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 1;
    margin-bottom: 20px;
    color: var(--neutral-black);
  }
  .hero-text p {
    color: var(--neutral-dk);
  }
  .hero-btn {
    width: fit-content;
    background: var(--primary-1);
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    height: 70vh;
    padding: 0px 0px 40px 0px;
    margin-top: 60px;

    .hero-img {
      max-height: 60%;
      margin-top: 20px;
    }
    .hero-text {
      align-items: flex-start;
      text-align: left;
      max-width: 360px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <img src={heroGraphic} alt="computer desk graphic" className="hero-img" />
      <div className="hero-text">
        <h1>Hello, I'm Christa.</h1>
        <p>
          I'm a self-taught Front End Developer and Full Stack Development
          student from Indianapolis, Indiana.
        </p>
        <Button primary className="hero-btn">
          Connect on Github
        </Button>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
