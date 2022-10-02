import styled from "styled-components";
import heroBackground from "../../assets/wave1.png";
import heroGraphic from "../../assets/desk.png";
import Button from "../buttons/Button";

const Wrapper = styled.div`
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
  .hero-text h1 {
    margin-bottom: 0;
  }
  .hero-text p {
    color: var(--neutral-dk);
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
    <Wrapper>
      <img src={heroGraphic} alt="computer desk graphic" className="hero-img" />
      <div className="hero-text">
        <div className="heading-group">
          <span className="fancy fancy-large fancy-center">hey there!</span>
          <h1>I'm Christa</h1>
        </div>
        <p>
          I'm a Front End Developer from Indianapolis, Indiana on a Full Stack
          Web Development journey.
        </p>
        <Button primary className="hero-btn">
          Connect on Github
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
