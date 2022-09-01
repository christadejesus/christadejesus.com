import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  padding: 6px 12px;
  border: ${(props) =>
    props.secondary
      ? "1px solid var(--neutral-black)"
      : "1px solid transparent"};
  border-radius: 1px;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-family: inherit;
  font-size: 1.2rem;
  background: ${(props) =>
    props.primary
      ? "var(--neutral-black)"
      : props.secondary
      ? "var(--neutral-lt)"
      : "var(--primary-2)"};
  color: ${(props) =>
    props.secondary ? "var(--neutral-black)" : "var(--neutral-lt)"};

  &:hover {
    background: var(--neutral-white);
    color: initial;
    border: 1px solid var(--neutral-dk);
    cursor: pointer;
  }
`;

export default Button;
