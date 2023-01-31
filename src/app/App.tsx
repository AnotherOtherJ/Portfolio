import { ThemeProvider } from "@emotion/react";
import Navbar from "components/Navbar";
import useGetTheme from "hooks";
import { ThemeContext } from "providers";
import { Suspense, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={state}>
      <GlobalStyles />
      <Navbar />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
