import { motion } from "framer-motion";
import type { MousePosition } from "../utils/types";
import type { HanoiSceneEntry } from "../utils/data";

type ImagePreviewProps = {
  altText: string;
  item: HanoiSceneEntry;
  index: number;
  mousePosition: MousePosition;
};

const PARALLAX = [
  { x: 0.7, y: 0.9 }, // ảnh trái: chậm theo chiều X, đầy theo Y
  { x: 0.35, y: 0.5 }, // ảnh giữa: chậm nhất → cảm giác xa nhất
  { x: 1.1, y: 0.8 }, // ảnh phải: nhanh nhất → cảm giác gần nhất
];

export const ImagePreview = ({
  altText,
  item,
  index,
  mousePosition,
}: ImagePreviewProps) => {
  const p = PARALLAX[index] ?? PARALLAX[0];

  return (
    <motion.div
      className="absolute flex aspect-3/2 w-24 items-center justify-center overflow-hidden rounded-3xl shadow-2xl"
      initial={{
        scale: 0.6,
        opacity: 0,
        x: item.offsetX,
        y: item.offsetY + 40,
        rotate: item.rotate,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        x: item.offsetX + mousePosition.x * p.x,
        y: item.offsetY + mousePosition.y * p.y,
        rotate: item.rotate,
      }}
      exit={{
        scale: 0.6,
        opacity: 0,
        y: item.offsetY + 40,
        transition: { duration: 0.25, ease: "easeIn" },
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 28,
        mass: 1.2,
        delay: index * 0.04, // stagger nhẹ: 0ms, 40ms, 80ms
      }}
    >
      <img
        src={item.src}
        alt={`Scene from ${altText}`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
