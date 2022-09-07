import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: var(--font-size3);
  line-height: 29px;
  padding: ${(props) => props.padding};
  text-align: center;
  width: 100%;
`;
