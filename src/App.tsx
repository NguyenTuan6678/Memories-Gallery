import type { ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Home from "./pages/Home";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/Spring"
          element={
            <PageTransition>
              <Spring />
            </PageTransition>
          }
        />
        <Route
          path="/Summer"
          element={
            <PageTransition>
              <Summer />
            </PageTransition>
          }
        />
        <Route
          path="/Autumn"
          element={
            <PageTransition>
              <Autumn />
            </PageTransition>
          }
        />
        <Route
          path="/Winter"
          element={
            <PageTransition>
              <Winter />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}

export default App;
