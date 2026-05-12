import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

type Props = {
  color: string;
  onLanguageChange?: () => void;
};

export default function SeasonNavbar({ color, onLanguageChange }: Props) {
  const { i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        key={i18n.language}
        initial={{
          opacity: 0,
          y: -18,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -12,
          filter: "blur(8px)",
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex flex-col items-center gap-3 border-b border-[#e8e4de] bg-white/90 px-5 py-4 backdrop-blur-sm md:flex-row md:justify-between md:px-16"
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08 }}
          className="flex w-full items-center justify-between md:w-auto"
        >
          <Link
            to="/"
            style={{ color }}
            className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
          >
            ← {i18n.language === "vi" ? "Quay lại" : "Back"}
          </Link>

          {/* MOBILE LANG */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => {
                onLanguageChange?.();
                i18n.changeLanguage("en");
              }}
              className={`text-sm font-semibold transition-all duration-300 ${
                i18n.language === "en" ? "text-[#7FA9C9]" : "text-[#7FA9C980]"
              }`}
            >
              EN
            </button>

            <span className="text-neutral-300">|</span>

            <button
              onClick={() => {
                onLanguageChange?.();
                i18n.changeLanguage("vi");
              }}
              className={`text-sm font-semibold transition-all duration-300 ${
                i18n.language === "vi" ? "text-[#D8A6B8]" : "text-[#D8A6B880]"
              }`}
            >
              VI
            </button>
          </div>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.14,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
        >
          <p
            className="text-[0.62rem] uppercase tracking-[0.28em]"
            style={{ color }}
          >
            {i18n.language === "vi" ? "Du lịch · Văn hóa" : "Travel · Culture"}
          </p>

          <h2 className="font-serif text-xl text-[#1f1f1f]">Hanoi Seasons</h2>
        </motion.div>

        {/* DESKTOP LANG */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 }}
          className="hidden items-center gap-3 md:flex"
        >
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`text-sm font-semibold transition-all duration-300 ${
              i18n.language === "en" ? "text-[#7FA9C9]" : "text-[#7FA9C980]"
            }`}
          >
            EN
          </button>

          <span className="text-neutral-300">|</span>

          <button
            onClick={() => i18n.changeLanguage("vi")}
            className={`text-sm font-semibold transition-all duration-300 ${
              i18n.language === "vi" ? "text-[#D8A6B8]" : "text-[#D8A6B880]"
            }`}
          >
            VI
          </button>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
}
