import LinkButton from "@components/linkButton/LinkButton";
import { StyledPage, variants } from "@components/styled/StyledPage";

const Projects = () => {
  return (
    <StyledPage initial="initial" animate="animate" exit="exit" variants={variants}>
      <h1>Projekty</h1>
      <div>
        <h2>QuizzApp</h2>
        Prosta gra quizowa korzystająca z publicznego API opentdb. Konfigurowalna ze strony
        użytkownika
        <LinkButton
          github="https://github.com/AnotherOtherJ/QuizzApp"
          demo="https://yourquizz.netlify.app/"
        />
      </div>
    </StyledPage>
  );
};

export default Projects;
