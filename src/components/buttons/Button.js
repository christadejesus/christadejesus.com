import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-family: inherit;
  font-size: 1.2rem;
  background: ${(props) =>
    props.primary ? "var(--color-primary-1)" : "var(--color-primary-2)"};
  color: var(--color-neutral-wht);

  &:hover {
    background: var(--color-neutral-mdlt);
    color: initial;
  }
`;

export default Button;
