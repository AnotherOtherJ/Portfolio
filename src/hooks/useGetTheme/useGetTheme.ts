import type { Theme } from "@emotion/react";
import type { Action } from "providers/ThemeProvider/reducers";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import theme from "shared/theme";

type ContextType = {
  state: Theme;
  dispatch: React.Dispatch<Action>;
};

const useGetTheme = ({ state, dispatch }: ContextType) => {
  const darkMode = window.localStorage.getItem("theme");
  const match = window.matchMedia("(prefers-color-scheme: dark)");
  // useMemo(() => {
  //   if (darkMode) {
  //     console.log("lol");
  //     dispatch({ type: "theme", theme: darkMode === "dark" ? theme.dark : theme.light });
  //   }
  // }, [darkMode]);

  const checkScheme = (e: MediaQueryListEvent) => {
    dispatch({ type: "theme", theme: e.matches ? theme.dark : theme.light });
  };

  useEffect(() => {
    if (darkMode) {
      console.log("lol");
      dispatch({ type: "theme", theme: darkMode === "dark" ? theme.dark : theme.light });
    } else {
      match.addEventListener("change", checkScheme);
    }

    return () => match.removeEventListener("change", checkScheme);
  }, [darkMode, match.matches]);
  return;
};

export default useGetTheme;
