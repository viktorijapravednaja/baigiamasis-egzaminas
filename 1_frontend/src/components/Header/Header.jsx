import { Link } from "react-router-dom";

// Styles
import {
  StyledHeader,
  StyledNav,
  StyledList,
  StyledIcon,
} from "./Header.style";

// Assets
import { RiScissorsLine } from "react-icons/ri";

const Header = () => {
  return (
    <StyledHeader>
      <StyledIcon>
        <RiScissorsLine />
      </StyledIcon>
      <StyledNav>
        <StyledList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
