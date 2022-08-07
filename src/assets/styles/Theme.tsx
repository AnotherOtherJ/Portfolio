import { css, Global } from "@emotion/react";

const Theme = () => {
  return (
    <Global
      styles={css`
        body {
          font-family: "Montserrat", sans-serif;
          font-weight: 200;
          width: 100vw;
          height: 100vh;
          background-color: #1e5e76;
          color: #fff;
          user-select: none;
        }
        #root {
          width: 100%;
          height: 100%;
        }
        nav {
          width: 100%;
          min-height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          padding: 3px;
          @media (max-width: 1024px) {
            gap: 10px;
          }
        }
      `}
    />
  );
};

export default Theme;
