import { motion } from "motion/react";

type Props = {
  isVI: boolean;
  headingFont: string;
  bodyFont: string;
};

export default function SeasonHero({ isVI, headingFont, bodyFont }: Props) {
  return (
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
  );
}
