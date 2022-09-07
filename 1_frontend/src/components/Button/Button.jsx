import React from "react";

// Style
import { StyledButton } from "./Button.style";

export const Button = ({ text, color, padding }) => {
  return (
    <StyledButton color={color} padding={padding}>
      {text}
    </StyledButton>
  );
};
