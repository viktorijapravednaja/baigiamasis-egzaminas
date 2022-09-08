import styled from "styled-components";

export const StyledTd = styled.td`
  padding: 1rem 0rem;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 10px;
  color: var(--black);
  padding: 1.5rem 1rem;

  border: none;
  background: ${(props) => props.color};
  opacity: 90%;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
  @media screen and (min-width: 481px) {
    padding: 1.8rem 0rem;
    font-size: 12px;
  }
  @media screen and (min-width: 769px) {
    font-size: var(--font-size3);
  }
`;
