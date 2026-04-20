import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ImagePreview } from "./components/ImagePreview";
import { useMousePosition } from "./hooks/useMousePosition";
import { hanoiScenes } from "./utils/data";
import { imageIds } from "./utils/types";
import type { ImageId } from "./utils/types";

function App() {
  const [hoveredText, setHoveredText] = useState<ImageId | null>(null);
  const mousePosition = useMousePosition();

  const clearHover = useCallback(() => setHoveredText(null), []);

  const scenes = hoveredText ? hanoiScenes[hoveredText] : null;

  return (
    <main className="relative flex w-screen flex-col items-center justify-center min-h-screen">
      <h1 className="sr-only">Memories Gallery</h1>
      <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-6xl font-black uppercase text-zinc-300 *:cursor-default md:text-8xl lg:text-9xl">
        {imageIds.map((season) => (
          <motion.div
            key={season}
            onMouseEnter={() => setHoveredText(season)}
            onMouseLeave={clearHover}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1
              className={`${season.toLowerCase()} text-6xl md:text-8xl lg:text-9xl`}
            >
              {season}
            </h1>
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

export default App;
