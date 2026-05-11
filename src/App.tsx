import { useCallback, useState, type ReactNode } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";

import { ImagePreview } from "./components/ImagePreview";
import { useMousePosition } from "./hooks/useMousePosition";
import { hanoiScenes } from "./utils/data";
import { imageIds } from "./utils/types";
import type { ImageId } from "./utils/types";

import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import { useIsMobile } from "./hooks/useIsMobile";
import { SEASON_COLORS } from "./utils/season";

// ─────────────────────────────────────────────────────────────
// Motion variants
// ─────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 4, filter: "blur(6px)" },

  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 24,
      mass: 1,
    },
  },

  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(4px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Homepage
// ─────────────────────────────────────────────────────────────

function HomePage() {
  const [hoveredText, setHoveredText] = useState<ImageId | null>(null);

  const mousePosition = useMousePosition();

  const isMobile = useIsMobile();

  const clearHover = useCallback(() => setHoveredText(null), []);

  const scenes = hoveredText ? hanoiScenes[hoveredText] : null;

  const { i18n } = useTranslation();
  const isVI = i18n.language === "vi";

  const customFont = isVI
    ? "'Playfair Display', serif"
    : "'Be Vietnam Pro', sans-serif";

  const SEASON_TITLES = {
    en: {
      Spring: "Spring",
      Summer: "Summer",
      Autumn: "Autumn",
      Winter: "Winter",
    },

    vi: {
      Spring: "Mùa Xuân",
      Summer: "Mùa Hạ",
      Autumn: "Mùa Thu",
      Winter: "Mùa Đông",
    },
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#faf9f6] pt-44">
      {/* Header */}
      <motion.div
        key={i18n.language}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
      >
        {/* Language Switcher */}
        <div className="mb-5 flex items-center gap-4">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`text-base font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
              i18n.language === "en"
                ? "text-[#7FA9C9]"
                : "text-[#7FA9C980] hover:text-[#7FA9C9]"
            }`}
          >
            EN
          </button>

          <span className="text-neutral-300">|</span>

          <button
            onClick={() => i18n.changeLanguage("vi")}
            className={`text-base font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
              i18n.language === "vi"
                ? "text-[#D8A6B8]"
                : "text-[#D8A6B880] hover:text-[#D8A6B8]"
            }`}
          >
            VI
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <p
            className="mb-2 text-[0.72rem] uppercase tracking-[0.35em] text-[#7a9468]"
            style={{ fontFamily: customFont }}
          >
            {i18n.language === "vi" ? "Một Góc Hà Nội" : "A Glimpse of Hanoi"}
          </p>

          {/* Title */}
          <h2
            className="font-serif text-xl text-neutral-800 md:text-2xl"
            style={{ fontFamily: customFont }}
          >
            {i18n.language === "vi"
              ? "Bốn Mùa Hà Nội"
              : "The Four Seasons of Hanoi"}
          </h2>
        </div>
      </motion.div>

      {/* Season Titles */}
      <motion.div
        className="mt-16 flex flex-col items-center justify-center gap-2 text-nowrap font-black uppercase"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {imageIds.map((season) => {
          const colors = SEASON_COLORS[season];

          const isHovered = hoveredText === season;

          const isOtherHovered = hoveredText !== null && hoveredText !== season;

          return (
            <motion.div
              key={season}
              variants={itemVariants}
              onMouseEnter={
                !isMobile ? () => setHoveredText(season) : undefined
              }
              onMouseLeave={!isMobile ? clearHover : undefined}
              animate={{
                scale: isMobile
                  ? 1
                  : isHovered
                    ? 1.1
                    : isOtherHovered
                      ? 0.97
                      : 1,

                y: !isMobile && isHovered ? -4 : 0,

                opacity: isOtherHovered ? 0.35 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                mass: 0.9,
              }}
            >
              <Link to={`/${season}`}>
                <motion.h2
                  key={`${season}-${i18n.language}`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: isHovered ? colors.hover : colors.default,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="leading-none tracking-[-0.04em] text-[3.5rem] sm:text-[4.8rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem]"
                  style={{
                    color: colors.default,
                    willChange: "transform, opacity",
                    fontFamily: customFont,
                  }}
                >
                  {SEASON_TITLES[i18n.language as "en" | "vi"][
                    season
                  ].toUpperCase()}
                </motion.h2>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      {/* Screen reader */}
      <span className="sr-only" aria-live="polite">
        {hoveredText
          ? i18n.language === "vi"
            ? `Đang hiển thị cảnh ${hoveredText}`
            : `Showing scenes from ${hoveredText}`
          : ""}
      </span>
      {/* Floating image previews */}
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
      {/* Footer */}
      <motion.div
        key={`footer-${i18n.language}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-8 text-center"
      >
        <p
          className="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-400"
          style={{ fontFamily: customFont }}
        >
          {i18n.language === "vi"
            ? "Du Hành · Văn Hoá · Ký Ức"
            : "Travel · Culture · Memory"}
        </p>
      </motion.div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
// Page transition
// ─────────────────────────────────────────────────────────────

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      }}
    >
      {children}
    </motion.main>
  );
}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────

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
