import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
  margin-top: 2rem;

  @media screen and (min-width: 481px) {
    width: 80%;
    font-size: var(--font-size3);
    margin-top: 4rem;
  }
`;

export const StyledTd = styled.td`
  padding: 0.5rem;
`;

export const StyledTh = styled.th`
  font-weight: 400;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;

  background-color: var(--black);
`;
