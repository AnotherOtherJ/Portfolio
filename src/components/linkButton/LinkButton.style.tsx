import styled from "@emotion/styled";

const StyledLinkButton = styled.a`
  margin-top: 10px;
  flex: 1 1 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  transition: all 200ms;
  :hover {
    background-color: #e6e6e6;
    color: #000;
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
`;

export default StyledLinkButton;
