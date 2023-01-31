import { useEffect, useReducer } from "react";
import theme from "shared/theme";
import type { Themes } from "shared/theme";
import { ThemeContext } from "./contexts";
import { reducer } from "./reducers";

const ThemeProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const helperFunction = (theme: Themes) => {
    console.log("test");
    const darkMode = window.localStorage.getItem("theme");
    const match = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkMode) {
      return darkMode === "dark" ? { theme: theme.dark } : { theme: theme.light };
    }

    return match.matches ? { theme: theme.dark } : { theme: theme.light };
  };

  const [state, dispatch] = useReducer(reducer, theme, helperFunction);

  useEffect(() => {
    const match = window.matchMedia("(prefers-color-scheme: dark)");

    const checkScheme = (e: MediaQueryListEvent) => {
      dispatch({ type: "theme", theme: e.matches ? theme.dark : theme.light });
    };

    match.addEventListener("change", checkScheme);

    return () => match.removeEventListener("change", checkScheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ state: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
