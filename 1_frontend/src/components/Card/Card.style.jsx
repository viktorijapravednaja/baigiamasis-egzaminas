import styled from "styled-components";

export const StyledCard = styled.div`
  background: white;
  width: 90%;
  text-align: center;
  padding: 45px;
  margin: 2rem auto;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  border-radius: 8px;
  @media screen and (min-width: 468px) {
    width: 70%;
  }
  @media screen and (min-width: 769px) {
    width: 45%;
    margin: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const StyledH2 = styled.h2`
  margin: 25px 0px;
  font-weight: 400;
`;

export const StyledIcon = styled.i`
  background-color: var(--blue);
  color: #fff;
  padding: 8px 10px;
  border-radius: 200px;
`;

export const StyledP = styled.p`
  margin-bottom: 25px;
  font-weight: 200;
`;
