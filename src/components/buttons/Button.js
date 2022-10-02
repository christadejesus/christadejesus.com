import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 10px;
  text-transform: uppercase;
  padding: 6px 12px;
  border: ${(props) =>
    props.primary || props.secondary
      ? "1px solid transparent"
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
      : "transparent"};
  color: ${(props) =>
    props.primary || props.secondary
      ? "var(--neutral-white)"
      : "var(--neutral-black)"};

  &:hover {
    background: var(--neutral-black);
    color: var(--neutral-lt);
    cursor: pointer;
    border: 1px solid transparent;
  }
`;

export default Button;
