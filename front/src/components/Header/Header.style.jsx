import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media screen and (min-width: 769px) {
    padding: 1rem 8rem 1rem 5rem;
  }
`;

export const StyledNav = styled.nav`
  width: 80%;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  list-style: none;

  li > a {
    color: var(--black);
    text-decoration: none;
    padding-bottom: 0.5rem;
    font-size: var(--font-size3);
  }

  a:hover {
    border-bottom: 1px solid var(--black);
  }

  @media screen and (min-width: 481px) {
    gap: 2rem;
  }
  @media screen and (min-width: 769px) {
    gap: 4rem;
  }
`;

export const StyledIcon = styled.h1`
  font-size: var(--font-size1);
`;
