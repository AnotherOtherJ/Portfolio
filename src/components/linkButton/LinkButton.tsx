import StyledLinkButton, { LinkWrapper } from "./LinkButton.style";

type Props = {
  github: string;
  demo?: string;
};

function LinkButton({ github, demo }: Props) {
  return (
    <LinkWrapper>
      <StyledLinkButton href={github} target="_blank" rel="noreferrer noopener">
        Github
      </StyledLinkButton>
      <StyledLinkButton href={demo} target="_blank" rel="noreferrer noopener">
        Demo
      </StyledLinkButton>
    </LinkWrapper>
  );
}
export default LinkButton;
