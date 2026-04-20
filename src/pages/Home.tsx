import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "../index.css";

export default function Home() {
  return (
    <motion.div
      className="homeTitle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>
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
      </h1>
    </motion.div>
  );
}
