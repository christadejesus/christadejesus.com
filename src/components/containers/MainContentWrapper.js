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

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    padding: 40px 10%;
  }
  @media screen and (min-width: 1000px) {
    gap: 60px;
  }
`;
export default MainContentWrapper;
