import Nav from "components/nav/Nav";
import Page from "components/page/Page";
import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
