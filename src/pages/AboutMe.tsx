import photo from "@assets/images/photo.webp";
import { Link, Links, StyledDiv, StyledPage, variants } from "@components/styled/StyledPage";
import { m } from "framer-motion";

const AboutMe = () => {
  return (
    <StyledPage initial="initial" animate="animate" exit="exit" variants={variants}>
      <StyledDiv variants={variants}>
        <h1>O mnie </h1>
        <img src={photo} alt="My Face" />
      </StyledDiv>
      <m.p variants={variants}>
        Cześć! Nazywam się Kuba. Mam 20 lat i jestem FrontEnd Developerem. Swoją przygodę z
        programowaniem zacząłem już gdy miałem 12 lat zaczynając w PHP powoli brnąc w C++, Pawn, Lua
        i JavaScript. Zajmuje się pisaniem stron głównie z użyciem React, ale chętnie uczę się
        nowych technologii. Aplikacje natywne używające JavaScript(Electron, Tauri, ReactNative) to
        również moje zainteresowania.
      </m.p>
      <Links>
        <m.a
          variants={variants}
          href="https://www.linkedin.com/in/jakubpawelec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link>LinkedIn</Link>
        </m.a>
        <m.a
          variants={variants}
          href="https://github.com/AnotherOtherJ/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link github>Github</Link>
        </m.a>
      </Links>
    </StyledPage>
  );
};

export default AboutMe;
