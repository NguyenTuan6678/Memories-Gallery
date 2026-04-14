import { motion } from "framer-motion";
import type { MousePosition } from "../utils/types";
import type { HanoiSceneEntry } from "../utils/data";

type ImagePreviewProps = {
  altText: string;
  item: HanoiSceneEntry;
  index: number;
  mousePosition: MousePosition;
};

export const ImagePreview = ({
  altText,
  item,
  index,
  mousePosition,
}: ImagePreviewProps) => (
  <motion.div
    className="absolute flex aspect-3/2 w-64 items-center justify-center overflow-hidden rounded-xl shadow-xl"
    initial={{
      scale: 0,
      opacity: 0,
      x: item.offsetX,
      y: item.offsetY,
      rotate: item.rotate,
    }}
    animate={{
      scale: 1,
      opacity: 1,
      x: item.offsetX + (index === 1 ? mousePosition.x / 2 : mousePosition.x),
      y: item.offsetY + mousePosition.y,
      rotate: item.rotate,
    }}
    exit={{ scale: 0, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 10,
      mass: 0.6,
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
