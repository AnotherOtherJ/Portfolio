import type { Theme } from "@emotion/react";
import { createContext } from "react";
import theme from "shared/theme";
import type { Action } from "./reducers";

type ContextType = {
  state: Theme;
  dispatch: React.Dispatch<Action>;
};

export const ThemeContext = createContext<ContextType>({ state: theme.dark, dispatch: () => {} });
