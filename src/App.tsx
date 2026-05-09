import { useCallback, useState, type ReactNode } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ImagePreview } from "./components/ImagePreview";
import { useMousePosition } from "./hooks/useMousePosition";
import { hanoiScenes } from "./utils/data";
import { imageIds } from "./utils/types";
import type { ImageId } from "./utils/types";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";

function HomePage() {
  const [hoveredText, setHoveredText] = useState<ImageId | null>(null);
  const mousePosition = useMousePosition();

  const clearHover = useCallback(() => setHoveredText(null), []);

  const scenes = hoveredText ? hanoiScenes[hoveredText] : null;

  return (
    <main className="relative flex w-screen flex-col items-center justify-center min-h-screen">
      <h1 className="sr-only">Memories Gallery</h1>
      <div className="flex flex-col items-center justify-center gap-2 text-nowrap font-black uppercase text-zinc-300 *:cursor-default">
        {imageIds.map((season) => (
          <motion.div
            key={season}
            onMouseEnter={() => setHoveredText(season)}
            onMouseLeave={clearHover}
            // Mượt hơn: spring thay vì duration
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              mass: 0.8,
            }}
          >
            <Link to={`/${season}`}>
              {/* To hơn: text-8xl → 9xl → [10rem] theo breakpoint */}
              <h2
                className={`${season.toLowerCase()} text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] leading-none tracking-tighter`}
              >
                {season.toUpperCase()}
              </h2>
            </Link>
          </motion.div>
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {hoveredText ? `Showing scenes from ${hoveredText}` : ""}
      </span>

      <AnimatePresence>
        {scenes?.map((item, index) => (
          <ImagePreview
            key={`${hoveredText}-${index}`}
            altText={hoveredText || ""}
            item={item}
            index={index}
            mousePosition={mousePosition}
          />
        ))}
      </AnimatePresence>
    </main>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1,
      }}
    >
      {children}
    </motion.main>
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
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

export default App;
