import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AboutMe = lazy(() => import(`../../pages/AboutMe`));
const Projects = lazy(() => import(`../../pages/Projects`));
const Skills = lazy(() => import(`../../pages/Skills`));

type Props = {
  selectedPage: string;
};

const Page = ({ selectedPage }: Props) => {
  const location = useLocation();
  // const VisiblePage = useMemo(() => {
  //   return lazy(() => import(`../../pages/${selectedPage}.tsx`));
  // }, [selectedPage]);
  return (
    <>
      <Suspense>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default Page;
