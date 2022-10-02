import styled from "styled-components";

const Grid3Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  width: 100%;
  margin: 0px 0px 40px 0px;

  /* MEDIA QUERIES */
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Grid3Column;
