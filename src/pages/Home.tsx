import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { imageTitles } from "../utils/types";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen gap-4 text-nowrap text-6xl font-black uppercase text-zinc-300 *:cursor-default md:text-8xl lg:text-9xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {imageTitles.map((season) => (
        <h1 key={season.id}>
          <Link className={season.id.toLowerCase()} to={`/${season.id}`}>
            {i18n.language === "vi" ? season.vi : season.en}
          </Link>
        </h1>
      ))}
    </motion.div>
  );
}
