import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "../index.css";
import { imageIds } from "../utils/types";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen gap-4 text-nowrap text-6xl font-black uppercase text-zinc-300 *:cursor-default md:text-8xl lg:text-9xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <h1>
        <Link className="spring" to="/Spring">
          Spring
        </Link>
      </h1>
      <h1>
        <Link className="summer" to="/Summer">
          Summer
        </Link>
      </h1>
      <h1>
        <Link className="autumn" to="/Autumn">
          Autumn
        </Link>
      </h1>
      <h1>
        <Link className="winter" to="/Winter">
          Winter
        </Link>
      </h1> */}
      {imageIds.map((season) => (
        <h1 key={season}>
          <Link className={season.toLowerCase()} to={`/${season}`}>
            {season}
          </Link>
        </h1>
      ))}
    </motion.div>
  );
}
