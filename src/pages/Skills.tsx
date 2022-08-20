import { StyledPage, StyledSkills, variants } from "@components/styled/StyledPage";

const Skills = () => {
  return (
    <StyledPage initial="initial" animate="animate" exit="exit" variants={variants} alignitems>
      <h1>Umiejętności</h1>
      <StyledSkills direction="row">
        <div>
          <p>Typescript</p>
          <p>JavaScript</p>
        </div>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>SCSS</p>
        </div>
        <div>
          <p>React</p>
          <p>React Native</p>
          <p>emotion</p>
          <p>react-router-dom</p>
          <p>framer-motion</p>
        </div>
        <div>
          <p>Node.js</p>
          <p>Git</p>
          <p>Vite</p>
          <p>pnpm</p>
        </div>
        <div>
          <p>MySQL</p>
          <p>JSON</p>
        </div>
        <div>
          <p>Polski</p>
          <p>Angielski</p>
        </div>
      </StyledSkills>
    </StyledPage>
  );
};

export default Skills;
