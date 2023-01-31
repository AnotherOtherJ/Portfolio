import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 15px 0 15px;
  gap: 15px;

  > :last-child {
    margin-left: auto;
  }

  svg {
    height: 40px;
    aspect-ratio: 1;
    transition: all 0.5s ease;

    &.logo {
      stroke: ${({ theme: { colors } }) => colors.font};
      :hover {
        stroke: ${({ theme: { colors } }) => colors.accent};
      }
    }

    &.palette {
      user-select: none;
      fill: ${({ theme: { colors } }) => colors.font};
      :hover {
        fill: ${({ theme: { colors } }) => colors.accent};
      }
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.font};
  text-decoration: none;
  user-select: none;

  :hover {
    color: ${({ theme: { colors } }) => colors.accent};
    transition: color 0.5s ease;
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.accent};
    font-weight: 500;
  }
`;
