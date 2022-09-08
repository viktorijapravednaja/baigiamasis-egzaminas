import { Link } from "react-router-dom";

// Styles
import { StyledCard, StyledH2, StyledIcon, StyledP } from "./Card.style";

// Components
import { Button } from "../Button/Button";

// Assets
import { RiScissorsLine } from "react-icons/ri";

const Card = ({ title, body, text, link }) => {
  return (
    <StyledCard>
      <StyledIcon>
        <RiScissorsLine />
      </StyledIcon>
      <StyledH2>{title}</StyledH2>
      <StyledP>{body}</StyledP>
      <Link to={link}>
        <Button color={"var(--blue)"} padding={"6px 0px"} text={text} />
      </Link>
    </StyledCard>
  );
};

export default Card;
