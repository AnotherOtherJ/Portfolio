import { createContext, useContext } from "react";

const Provider = ({ children }: { children: JSX.Element }) => {
  const theme = {
    colors: {
      background: "#FFF",
      backgroundAcc: "#ddd",
      font: "#FFF",
      primary: "#5B8266",
      accent: "#C8E9A0",
      error: "#BB342F",
    },
  };
  const SomeContext = createContext(theme);
  return <SomeContext.Provider value={theme}>{children}</SomeContext.Provider>;
};
