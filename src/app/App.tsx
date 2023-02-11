import { ThemeProvider } from "@emotion/react";
import Navbar from "components/Navbar";
import { ThemeContext } from "providers";
import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

const App = (): JSX.Element => {
  const { state } = useContext(ThemeContext);

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
