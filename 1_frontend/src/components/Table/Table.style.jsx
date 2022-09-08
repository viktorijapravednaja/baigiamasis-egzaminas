import styled from "styled-components";

export const StyledTable = styled.table`
  width: 95%;
  text-align: center;
  margin: 0 auto;
  font-size: 10px;
  margin-top: 2rem;
  background: #f5f5f6;
  border-radius: 10px;
  border-collapse: collapse;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  @media screen and (min-width: 481px) {
    font-size: var(--font-size3);
    margin-top: 4rem;
  }
`;

export const StyledTh = styled.th`
  font-weight: 400;
  padding: 0.1rem 0.2rem;
  border: none;
  @media screen and (min-width: 481px) {
    padding: 0.6rem;
  }
`;

export const StyledTr = styled.tr`
  border-top: 1px solid var(--black);
  border-collapse: collapse;

  &:first-child {
    border: none;
  }
`;
