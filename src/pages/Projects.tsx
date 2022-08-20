import { StyledPage, variants } from "@components/styled/StyledPage";

const Projects = () => {
  return (
    <StyledPage initial="initial" animate="animate" exit="exit" variants={variants}>
      <h1>Projekty</h1>
      <div>To właśnie portfolio. Wiele nowych projektów nadchodzi ^_^</div>
    </StyledPage>
  );
};

export default Projects;
