import styled from "@emotion/styled";
import { m } from "framer-motion";

type StyledPageProps = {
  direction?: string;
  alignItems?: boolean;
};

type LinkProps = {
  github?: boolean;
};

// Variants
export const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { staggerChildren: 0.3 } },
  exit: { opacity: 0, x: 500, transition: { ease: "linear", duration: 0.2 } },
};

// StyledPage is used in every Page component. It is a wrapper for the whole page.
export const StyledPage = styled(m.div)`
  padding: 3px;
  width: 40%;
  display: flex;
  flex-direction: ${({ direction }: StyledPageProps) => direction || "column"};
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
    ${({ alignItems }: StyledPageProps) => (alignItems ? "align-items: center" : "")};
  }
`;

// Used only in AboutMe component
export const StyledDiv = styled(m.div)`
  display: flex;
  padding-bottom: 10px;
  img {
    border-radius: 10px;
    margin-left: auto;
    width: 100px;
    aspect-ratio: 1;
  }
`;

export const Links = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.div`
  background-color: ${({ github }: LinkProps) => (github ? "#2d333b" : "#0a66c2")};
  padding: 2px 5px;
  border-radius: 5px;
`;

//End

// Used only in Skills component
export const StyledSkills = styled(StyledPage)`
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  div {
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    padding: 10px;
  }
`;
