import { Link } from "react-router-dom";

import Button from "./Button";

type Props = {
  setSelectedPage: (page: string) => void;
};

const Nav = ({ setSelectedPage }: Props) => {
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
