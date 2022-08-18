import styled from "styled-components";

const Grid3Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  width: 100%;

  /* MEDIA QUERIES */
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Grid3Column;
