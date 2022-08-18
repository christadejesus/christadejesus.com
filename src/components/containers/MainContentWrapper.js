import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  padding: 20px;
  font-family: var(--font-standard);
  font-size: 1.8rem;

  p,
  h2,
  h3,
  h4 {
    margin-bottom: 20px;
  }
  h1,
  h2,
  h3 {
    font-family: var(--font-accent);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.02rem;
  }
  h1 {
    font-size: 3.2rem;
    text-align: center;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.7rem;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    padding: 40px 10%;
  }
  @media screen and (min-width: 1000px) {
    padding: 40px 15%;
    gap: 60px;
  }
`;
export default MainContentWrapper;
