import { css, Global } from "@emotion/react";

const Theme = () => {
  return (
    <Global
      styles={css`
        body {
          font-family: "Montserrat", sans-serif;
          font-weight: 200;
          background-color: #1e5e76;
          color: #fff;
          user-select: none;
        }
        nav {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
      `}
    />
  );
};

export default Theme;
