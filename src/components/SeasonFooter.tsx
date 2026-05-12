import { motion } from "motion/react";

type Props = {
  isVI: boolean;
  headingFont: string;
};

export default function SeasonFooter({ isVI, headingFont }: Props) {
  return (
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
  );
}
