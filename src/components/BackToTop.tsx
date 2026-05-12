import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// ── Back To Top ───────────────────────────────────────────────
export default function BackToTop() {
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
