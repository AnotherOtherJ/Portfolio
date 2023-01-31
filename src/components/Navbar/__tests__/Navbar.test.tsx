import Navbar from "../Navbar";

import { jsx, ThemeProvider } from "@emotion/react";

import { act, render } from "@testing-library/react";
import theme from "../../../shared/theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AllTheProviders({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

describe("render", () => {
  test("should render", () => {
    const { asFragment } = render(<Navbar />, { wrapper: AllTheProviders });
    expect(asFragment());
  });
});
