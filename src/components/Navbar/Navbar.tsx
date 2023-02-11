import { Nav, StyledLink as NavLink } from "./Navbar.style";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { ReactComponent as Palette } from "assets/img/palette.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { withTheme } from "@emotion/react";
import { ThemeContext } from "providers";

const Navbar = () => {
  const { dispatch } = useContext(ThemeContext);
  const handleThemeChange = () => {
    dispatch({ type: "change_theme" });
  };

  return (
    <Nav>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <NavLink to="/">O mnie</NavLink>
      <NavLink to="/skills">Umiejętności</NavLink>
      <NavLink to="/projects">Projekty</NavLink>
      <NavLink to="/experience">Doświadczenie</NavLink>
      <Palette className="palette" onClick={handleThemeChange} />
    </Nav>
  );
};

export default withTheme(Navbar);
