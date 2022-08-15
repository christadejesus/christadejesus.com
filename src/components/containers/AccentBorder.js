import styled from "styled-components";

const AccentBorder = styled.div`
  border: 3px solid var(--color-neutral-mdlt);
  padding: 40px 20px;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 750px) {
    padding: 40px;
  }
`;

export default AccentBorder;
