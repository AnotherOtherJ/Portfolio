import { Link } from "react-router-dom";

import Button from "./Button.style";

const Nav = () => {
  return (
    <nav>
      <Link to="/about">
        <Button>O mnie</Button>
      </Link>
      <Link to="/projects">
        <Button>Projekty</Button>
      </Link>

      <Link to="/skills">
        <Button>Umiejętności</Button>
      </Link>
    </nav>
  );
};

export default Nav;
