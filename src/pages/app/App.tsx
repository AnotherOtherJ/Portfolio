import { useState } from "react";

import Nav from "@/components/nav/Nav";
import Page from "@/components/page/Page";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("AboutMe");

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <>
      <Nav setSelectedPage={handlePageChange} />
      <Page selectedPage={selectedPage} />
    </>
  );
};

export default App;
