import { Link } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { springEN } from "../contents/spring/en";
import { springVI } from "../contents/spring/vi";

import { SEASON_COLORS, type Section } from "../utils/season";

// ── Google Fonts ──────────────────────────────────────────────
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";
if (!document.head.querySelector("[href*='Playfair']")) {
  document.head.appendChild(fontLink);
}

// ── Motion ────────────────────────────────────────────────────
const cardVariants: Variants = {
  offscreen: { y: 180, opacity: 0 },

  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.32,
      duration: 0.9,
    },
  },
};

const languageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },

  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

// ── Card ──────────────────────────────────────────────────────
function SectionCard({
  section,
  i,
  total,
  headingFont,
  bodyFont,
}: {
  section: Section;
  i: number;
  total: number;
  headingFont: string;
  bodyFont: string;
}) {
  const background = `linear-gradient(136deg, ${section.splashA}, ${section.splashB})`;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.15 }}
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
        paddingTop: "6rem",
        marginBottom: i < total - 1 ? "-1rem" : "0",
      }}
    >
      {/* Splash */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background,
          borderRadius: "0 0 20px 20px",
          zIndex: 0,
        }}
      />

      {/* Card */}
      <motion.div
        layout
        variants={cardVariants}
        style={{
          zIndex: 1,
          position: "relative",
          width: "100%",
          maxWidth: "680px",
          background: "#ffffff",
          borderRadius: "20px",

          boxShadow:
            "0 0 1px hsl(0deg 0% 0% / 0.06), 0 4px 12px hsl(0deg 0% 0% / 0.08), 0 16px 40px hsl(0deg 0% 0% / 0.06)",

          padding: "2.5rem 2.75rem",
          marginBottom: "1rem",
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ fontSize: "1.6rem" }}>{section.icon}</span>

          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#7a9468",
              fontFamily: bodyFont,
            }}
          >
            {section.tag}
          </span>

          <div style={{ flex: 1, height: "1px", background: "#ece8e2" }} />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: headingFont,
            fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#1a1a1a",
            marginBottom: "0.75rem",
          }}
        >
          {section.title}
        </h2>

        {/* Intro */}
        <p
          style={{
            fontFamily: headingFont,
            fontStyle: "italic",
            fontSize: "1rem",
            color: "#888",
            lineHeight: 1.75,
            marginBottom: "1.75rem",
          }}
        >
          {section.intro}
        </p>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {section.items.map((item, ii) => (
            <div
              key={ii}
              style={{
                paddingLeft: "1.1rem",
                borderLeft: "2px solid",
                borderColor: section.splashA,
              }}
            >
              <p
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#7a9468",
                  marginBottom: "0.3rem",
                  fontFamily: bodyFont,
                }}
              >
                {item.heading}
              </p>

              <p
                style={{
                  fontSize: "0.96rem",
                  lineHeight: 1.8,
                  color: "#444",
                  fontWeight: 300,
                  fontFamily: bodyFont,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(window.scrollY > 200);
    }, 150);
    return () => clearInterval(id);
  }, []);

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 9999,
            background: "#7a9468",
            color: "#fff",
            fontSize: "1.1rem",
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "none",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>,
    document.body,
  );
}

// ── Main ──────────────────────────────────────────────────────
export default function Spring() {
  const color = SEASON_COLORS.Spring.accent;
  const { i18n } = useTranslation();

  const isVI = i18n.language === "vi";

  // instant content switch
  const sections = isVI ? springVI : springEN;

  // dynamic fonts
  const headingFont = isVI
    ? "'Playfair Display', serif"
    : "'Be Vietnam Pro', sans-serif";

  const bodyFont = isVI
    ? "'Be Vietnam Pro', sans-serif"
    : "'Nunito', sans-serif";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        variants={languageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          background: "#faf9f6",
          color: "#2c2c2c",
          fontFamily: bodyFont,
          minHeight: "100vh",
        }}
      >
        {/* NAV */}
        <nav className="relative flex flex-col items-center gap-3 px-5 py-4 border-b border-[#e8e4de] bg-white/90 backdrop-blur-sm md:flex-row md:justify-between md:px-16">
          {/* TOP ROW MOBILE */}
          <div className="flex w-full items-center justify-between md:w-auto">
            {/* Back */}
            <Link
              to="/"
              style={{ color }}
              className="text-[0.72rem] uppercase tracking-[0.18em] font-boldtext-[#7a9468]"
            >
              ← {i18n.language === "vi" ? "Quay lại" : "Back"}
            </Link>

            {/* Mobile language */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`ext-sm
          font-semibold
          transition-colors
          ${i18n.language === "en" ? "text-[#7FA9C9]" : "text-[#7FA9C980]"}
        `}
              >
                EN
              </button>

              <span className="text-neutral-300">|</span>

              <button
                onClick={() => i18n.changeLanguage("vi")}
                className={`
          text-sm
          font-semibold
          transition-colors
          ${i18n.language === "vi" ? "text-[#D8A6B8]" : "text-[#D8A6B880]"}
        `}
              >
                VI
              </button>
            </div>
          </div>

          {/* CENTER TITLE */}
          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      items-center
      text-center
    "
          >
            <p
              className="
        text-[0.62rem]
        uppercase
        tracking-[0.28em]
        text-[#7a9468]
      "
              style={{ color }}
            >
              {i18n.language === "vi"
                ? "Du lịch · Văn hóa"
                : "Travel · Culture"}
            </p>

            <h2 className="font-serif text-xl text-[#1f1f1f]">Hanoi Seasons</h2>
          </div>
          {/* DESKTOP LANGUAGE */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`
        text-sm
        font-semibold
        transition-colors
        ${i18n.language === "en" ? "text-[#7FA9C9]" : "text-[#7FA9C980]"}
      `}
            >
              EN
            </button>

            <span className="text-neutral-300">|</span>

            <button
              onClick={() => i18n.changeLanguage("vi")}
              className={`
        text-sm
        font-semibold
        transition-colors
        ${i18n.language === "vi" ? "text-[#D8A6B8]" : "text-[#D8A6B880]"}
      `}
            >
              VI
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a9468",
              fontWeight: 700,
              marginBottom: "1.5rem",
              fontFamily: bodyFont,
            }}
          >
            {isVI ? "Hà Nội · Tháng 2 – Tháng 4" : "Hanoi · February – April"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: headingFont,
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1a1a1a",
              marginBottom: "1.25rem",
            }}
          >
            {isVI ? "Hà Nội Mùa Xuân" : "Hanoi in Spring"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: headingFont,
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#888",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            {isVI
              ? "Vừa dịu dàng vừa đầy sức sống — hành trình khám phá vẻ đẹp của thủ đô trong những ngày đầu năm."
              : "Both gentle and serene, yet vibrant with life — a guide to fully experiencing the charm of the capital during the first days of the year."}
          </motion.p>
        </header>

        {/* HERO BAND */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          style={{
            background:
              "linear-gradient(135deg, #e8f0e5 0%, #f5ede3 50%, #e9eff5 100%)",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
            letterSpacing: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          🌸 🌿 ☁️
        </motion.div>

        {/* CONTENT */}
        <div
          style={{
            maxWidth: "760px",
            margin: "2rem auto 0",
            padding: "0 1.5rem 6rem",
          }}
        >
          {sections.map((section, i) => (
            <SectionCard
              key={section.title}
              section={section}
              i={i}
              total={sections.length}
              headingFont={headingFont}
              bodyFont={bodyFont}
            />
          ))}
        </div>

        <footer className="max-w-3xl mx-auto px-6 pt-6 pb-6 text-center text-sm">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: headingFont,
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "#888",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            {isVI ? "Du Hành · Văn Hoá · Ký Ức" : "Travel · Culture · Memory"}
          </motion.p>
        </footer>
        <BackToTop />
      </motion.div>
    </AnimatePresence>
  );
}
