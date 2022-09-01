import styled from "styled-components";
import bannerBackground from "../../assets/wave1.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  background: url(${bannerBackground});
  background-size: cover;
  background-position: bottom;

  h1 {
    font-family: var(--font-cursive);
    text-transform: none;
    font-size: 5rem;
    font-weight: 500;
    color: var(--neutral-black);
    margin-top: -40px;
  }
`;

const PageBanner = (props) => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
    </Wrapper>
  );
};

export default PageBanner;
