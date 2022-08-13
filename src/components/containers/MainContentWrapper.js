import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  font-family: var(--font-standard);
  font-size: 1.8rem;

  p,
  h1,
  h2,
  h3 {
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
  .main-article {
    margin-bottom: 40px;
  }
  .accent-article {
    background: var(--color-neutral-lt);
    padding: 20px;
    width: 100%;
  }
  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    padding: 40px 10%;
  }
  @media screen and (min-width: 1000px) {
    padding: 40px 15%;
  }
`;
export default MainContentWrapper;
