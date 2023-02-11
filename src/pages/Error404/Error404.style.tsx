import styled from "@emotion/styled";

export const Error404Styled = styled.main`
  display: grid;
  place-items: center;
  flex: 1;

  .errorContainer {
    background-color: ${({ theme: { colors } }) => colors.error};
    border-radius: 5px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;

export const Link = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  cursor: pointer;
  transition: color 200ms;
  font-weight: 500;
  :hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;
