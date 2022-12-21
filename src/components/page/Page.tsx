import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AboutMe = lazy(() => import(`pages/AboutMe`));
const Projects = lazy(() => import(`pages/Projects`));
const Skills = lazy(() => import(`pages/Skills`));

const Page = (): JSX.Element => {
  const location = useLocation();
  return (
    <Suspense>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait"></AnimatePresence>
      </LazyMotion>
    </Suspense>
  );
};

export default Page;
