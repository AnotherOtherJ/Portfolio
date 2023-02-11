import type { Theme } from "@emotion/react";
export type Themes = Record<string, Theme>;

const dark: Theme = {
  colors: {
    background: "#262626",
    backgroundAcc: "#1F1F1F",
    font: "#FFF",
    primary: "#60d394",
    accent: "#C8E9A0",
    error: "#9a031e",
  },
};

const light: Theme = {
  colors: {
    background: "#FFF",
    backgroundAcc: "#ddd",
    font: "#FFF",
    primary: "#5B8266",
    accent: "#C8E9A0",
    error: "#9a031e",
  },
};

const theme: Themes = {
  dark,
  light,
};

export default theme;
