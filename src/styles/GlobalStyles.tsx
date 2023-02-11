import { css, Global, useTheme } from "@emotion/react";

// css reset from https://www.joshwcomeau.com/css/custom-css-reset/

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        * {
          margin: 0;
        }

        html,
        body {
          height: 100%;
        }

        body {
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
        }

        #root {
          isolation: isolate;
          height: 100vh;
          height: 100dvh;
          display: flex;
          flex-direction: column;
        }

        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.font};
          font-family: "Inter", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
