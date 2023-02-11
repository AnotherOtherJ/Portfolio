import type { Theme } from "@emotion/react";
import theme from "shared/theme";

export type Action = {
  type: "change_theme" | "theme";
  theme?: Theme;
};

type State = {
  theme: Theme;
};

export function reducer(state: State, action: Action) {
  if (action.type === "change_theme") {
    localStorage.setItem("theme", `${state.theme === theme.dark ? `light` : `dark`}`);
    return {
      theme: state.theme === theme.dark ? theme.light : theme.dark,
    };
  } else if (action.type === "theme") {
    return {
      theme: action.theme ?? state.theme,
    };
  }
  throw Error("Unknown action.");
}
