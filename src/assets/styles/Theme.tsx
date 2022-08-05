import { css, Global } from "@emotion/react";

const Theme = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #287e9e;
        }
      `}
    />
  );
};

export default Theme;
