import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import HeroBand from "./KeyFrame";
import BackToTop from "./BackToTop";
import SectionCard from "./SectionCard";

import { SEASON_COLORS, type Section } from "../utils/season";
import { languageFade } from "../utils/animation";
import SeasonNavbar from "./SeasonNavbar";

type SeasonConfig = {
  titleEN: string;
  titleVI: string;

  subtitleEN: string;
  subtitleVI: string;

  heroDescriptionEN: string;
  heroDescriptionVI: string;

  leftIcon: string;
  rightIcon: string;

  gradient: string;

  en: Section[];
  vi: Section[];
};

type Props = {
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  config: SeasonConfig;
};

export default function SeasonPage({ season, config }: Props) {
  const [completedLanguage, setCompletedLanguage] = useState<string | null>(
    null,
  );

  const { i18n } = useTranslation();

  const isVI = i18n.language === "vi";

  const sections = isVI ? config.vi : config.en;

  const heroComplete = completedLanguage === `${season}-${i18n.language}`;

  const color = SEASON_COLORS[season].hover;

  const headingFont = isVI
    ? "'Playfair Display', serif"
    : "'Be Vietnam Pro', sans-serif";

  const bodyFont = isVI
    ? "'Nunito Sans', sans-serif"
    : "'Be Vietnam Pro', sans-serif";

  return (
    <motion.div
      style={{
        background: "#faf9f6",
        color: "#2c2c2c",
        fontFamily: bodyFont,
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <SeasonNavbar
        color={color}
        onLanguageChange={() => {
          setCompletedLanguage(null);
        }}
      />

      {/* HERO */}
      <AnimatePresence mode="wait">
        <motion.header
          key={i18n.language}
          variants={languageFade}
          initial="initial"
          animate="animate"
          exit="exit"
          className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color,
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            {isVI ? config.subtitleVI : config.subtitleEN}
          </motion.p>

          <motion.h1
            layout
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            style={{
              fontFamily: headingFont,
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {isVI ? config.titleVI : config.titleEN}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            {isVI ? config.heroDescriptionVI : config.heroDescriptionEN}
          </motion.p>
        </motion.header>
      </AnimatePresence>

      {/* HERO BAND */}
      <HeroBand
        key={`${season}-${i18n.language}`}
        titleEN={config.titleEN}
        titleVI={config.titleVI}
        subtitleEN={config.subtitleEN}
        subtitleVI={config.subtitleVI}
        leftIcon={config.leftIcon}
        rightIcon={config.rightIcon}
        gradient={config.gradient}
        delay={0.2}
        onComplete={() => setCompletedLanguage(`${season}-${i18n.language}`)}
      />

      {/* CONTENT */}
      <AnimatePresence>
        {heroComplete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div
              style={{
                maxWidth: "1040px",
                margin: "3rem auto 0",
                padding: "0 3rem 4rem",
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
          </motion.div>
        )}
      </AnimatePresence>
      <BackToTop />
    </motion.div>
  );
}
