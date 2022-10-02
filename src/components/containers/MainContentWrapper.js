import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    padding: 20px 40px;
  }
  @media screen and (min-width: 1000px) {
    padding: 20px 10%;
    max-width: 1100px;
  }
`;
export default MainContentWrapper;
