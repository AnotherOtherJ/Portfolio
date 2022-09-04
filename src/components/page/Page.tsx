import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AboutMe = lazy(() => import(`@pages/AboutMe`));
const Projects = lazy(() => import(`@pages/Projects`));
const Skills = lazy(() => import(`@pages/Skills`));

const Page = () => {
  const location = useLocation();
  return (
    <Suspense>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </Suspense>
  );
};

export default Page;
