import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  background: var(--color-neutral-lt);

  h1 {
    font-family: var(--font-cursive);
    text-transform: none;
    font-size: 7rem;
    font-weight: 500;
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
