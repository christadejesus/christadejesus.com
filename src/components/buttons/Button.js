import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  padding: 6px 12px;
  border: ${(props) =>
    props.primary
      ? "1px solid var(--primary-1)"
      : props.secondary
      ? "1px solid var(--neutral-dk)"
      : "1px solid var(--neutral-black)"};
  border-radius: 2px;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-family: inherit;
  font-size: 1.2rem;
  background: ${(props) =>
    props.primary
      ? "var(--primary-1)"
      : props.secondary
      ? "var(--neutral-black)"
      : "var(--neutral-white"};
  color: ${(props) =>
    props.primary
      ? "var(--neutral-white)"
      : props.secondary
      ? "var(--neutral-white)"
      : "var(--neutral-black)"};

  &:hover {
    background: var(--neutral-black);
    color: var(--neutral-black);
    border: 1px solid var(--neutral-black);
    cursor: pointer;
  }
`;

export default Button;
