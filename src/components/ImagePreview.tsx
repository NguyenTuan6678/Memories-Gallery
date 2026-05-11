import { motion } from "framer-motion";
import type { MousePosition } from "../utils/types";
import type { HanoiSceneEntry } from "../utils/data";

type ImagePreviewProps = {
  altText: string;
  item: HanoiSceneEntry;
  index: number;
  mousePosition: MousePosition;
};

// Mỗi ảnh có hệ số parallax riêng → tạo cảm giác depth, không chồng nhau
const PARALLAX = [
  { x: 0.7, y: 0.9 }, // ảnh trái
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
      style={{ willChange: "transform", borderRadius: "1.5rem" }}
      className="absolute flex aspect-3/2 z-40 w-64 md:w-80 lg:w-96 items-center justify-center overflow-hidden rounded-3xl shadow-2xl"
      initial={{
        scale: 0,
        opacity: 0,
        x: item.offsetX,
        y: item.offsetY + 40,
        rotate: item.rotate,
      }}
      animate={{
        scale: 0.82,
        opacity: 1,
        x: item.offsetX + mousePosition.x * p.x,
        y: item.offsetY + mousePosition.y * p.y,
        rotate: item.rotate,
      }}
      exit={{
        scale: 0,
        opacity: 0,
        y: item.offsetY + 40,
        transition: { duration: 0.25, ease: "easeIn" },
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 28,
        mass: 1.2,
        delay: index * 0.04,
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
