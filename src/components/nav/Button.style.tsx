import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Button = styled(motion.div)`
  position: relative;
  padding: 15px;
  font-size: 1.4rem;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  transition: all 600ms cubic-bezier(0.73, 0.08, 0.67, 1.32);
  cursor: pointer;
  user-select: none;
  &::before {
    content: "";
    position: absolute;
    transition: inherit;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
    width: 100%;
  }
  &::before {
    top: 0;
    left: 50%;
    height: 100%;
    width: 0;
    border: 1px solid #e6e6e6;
    border-left: 0;
    border-right: 0;
  }
`;

export default Button;
