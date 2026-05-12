import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type HeroBandProps = {
  titleEN: string;
  titleVI: string;

  subtitleEN: string;
  subtitleVI: string;

  leftIcon?: string;
  rightIcon?: string;

  gradient?: string;

  delay?: number;
  onComplete?: () => void;
};

export default function HeroBand({
  titleEN,
  titleVI,

  subtitleEN,
  subtitleVI,

  leftIcon = "🌸",
  rightIcon = "☁️",

  gradient = "linear-gradient(135deg, #e8f0e5 0%, #f5ede3 50%, #e9eff5 100%)",

  delay = 0,
  onComplete,
}: HeroBandProps) {
  const [expand, setExpand] = useState(false);
  const [showText, setShowText] = useState(false);

  const { i18n } = useTranslation();

  const isVI = i18n.language === "vi";

  const previousLanguage = useRef(i18n.language);

  useEffect(() => {
    if (previousLanguage.current !== i18n.language) {
      setExpand(false);
      setShowText(false);

      const restart = setTimeout(() => {
        setExpand(true);
      }, 80);

      previousLanguage.current = i18n.language;

      return () => clearTimeout(restart);
    }
  }, [i18n.language]);

  const headingFont = isVI
    ? "'Playfair Display', serif"
    : "'Be Vietnam Pro', sans-serif";

  useEffect(() => {
    const t1 = setTimeout(
      () => {
        setExpand(true);
      },
      2200 + delay * 1000,
    );

    const t2 = setTimeout(
      () => {
        setShowText(true);
        onComplete?.();
      },
      3200 + delay * 1000,
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [delay, onComplete]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "240px",
        marginBottom: "1rem",
      }}
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: expand ? 1 : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
        }}
      />

      {/* CENTER BLOCK */}
      <motion.div
        initial={{
          rotate: 0,
          scale: 0,
          borderRadius: "12px",
        }}
        animate={{
          rotate: expand ? 45 : 405,
          scale: expand ? 0.9 : 1,
          width: expand ? "160vw" : "84px",
          height: expand ? "26px" : "84px",
          borderRadius: expand ? "999px" : "12px",
        }}
        transition={{
          duration: expand ? 0.9 : 2.2,
          ease: expand ? [0.22, 1, 0.36, 1] : [0.68, -0.6, 0.32, 1.6],
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          background: "#ffffff",
          border: "1px solid #e8e4de",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          zIndex: 10,
        }}
      />

      {/* TEXT + ICONS */}
      <AnimatePresence>
        {showText && (
          <>
            {/* LEFT ICON */}
            <motion.div
              initial={{
                x: -300,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                left: "30%",
                top: "50%",
                translateX: "-120%",
                translateY: "-50%",
                fontSize: "3rem",
              }}
            >
              {leftIcon}
            </motion.div>

            {/* CENTER */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
                padding: "0 clamp(1rem, 6vw, 2rem)",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.58rem, 2.8vw, 0.75rem)",
                  letterSpacing: "clamp(0.12em, 2vw, 0.35em)",
                  textTransform: "uppercase",
                  color: "#7a9468",
                  marginBottom: "0.5rem",
                  maxWidth: "min(88vw, 620px)",
                  lineHeight: 1.5,
                  overflowWrap: "break-word",
                  wordBreak: "normal",
                }}
              >
                {isVI ? subtitleVI : subtitleEN}
              </p>

              <h2
                style={{
                  fontFamily: headingFont,
                  fontSize: "2.8rem",
                  color: "#1a1a1a",
                }}
              >
                {isVI ? titleVI : titleEN}
              </h2>
            </motion.div>

            {/* RIGHT ICON */}
            <motion.div
              initial={{
                x: 300,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                right: "30%",
                top: "50%",
                translateX: "120%",
                translateY: "-50%",
                fontSize: "3rem",
              }}
            >
              {rightIcon}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
