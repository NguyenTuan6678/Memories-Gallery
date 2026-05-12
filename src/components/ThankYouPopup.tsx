import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ThankYouPopupProps = {
  threshold?: number;
  characterSrc?: string;
  characterAlt?: string;
  url?: string;
};

export default function ThankYouPopup({
  threshold = 120,
  characterSrc,
  characterAlt = "Character",
  url = "https://github.com/NguyenTuan6678",
}: ThankYouPopupProps) {
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();

  const isVI = i18n.language === "vi";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isNearBottom =
        scrollTop + windowHeight >= documentHeight - threshold;

      setVisible(isNearBottom);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.85,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.9,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
    fixed
    bottom-6
    left-6
    z-50
    flex
    items-end
    gap-3
    bg-transparent
    p-0
    text-left
    cursor-pointer
    no-underline
  "
          aria-label={isVI ? "Mở GitHub của tác giả" : "Open author's GitHub"}
        >
          {/* Character */}
          <motion.div
            initial={{ rotate: -8 }}
            animate={{
              rotate: [-8, 6, -4, 4, -8],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    flex
    h-20
    w-20
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-white
    shadow-[0_12px_40px_rgba(0,0,0,0.12)]
    backdrop-blur-md
    md:h-24
    md:w-24
  "
          >
            {characterSrc ? (
              <img
                src={characterSrc}
                alt={characterAlt}
                className="h-full w-full object-contain p-1"
                draggable={false}
              />
            ) : (
              <span className="text-4xl md:text-5xl">🌸</span>
            )}
          </motion.div>

          {/* Speech bubble */}
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.35,
            }}
            className="
    relative
    mb-3
    max-w-55
    rounded-2xl
    bg-white/90
    px-4
    py-3
    text-sm
    leading-relaxed
    text-neutral-700
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    backdrop-blur-md
    md:max-w-65
  "
          >
            {/* Triangle - đưa ra sau text */}
            <span
              className="
      absolute
      left-1.5
      bottom-5
      z-0
      h-3
      w-3
      rotate-45
      bg-white/90
    "
            />

            {/* Content - đưa lên trên triangle */}
            <div className="relative z-10">
              <p className="font-medium">
                {isVI
                  ? "Cảm ơn bạn đã đi cùng mình đến cuối hành trình. Nếu bạn thích nó, hãy cho mình 1 star repository và follow mình trên Github nhé ♥️."
                  : "Thank you for staying with me until the end. If you like it, please star my repository and follow me on GitHub ♥️."}
              </p>

              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {isVI ? "Chạm để tiếp tục" : "Tap to continue"}
              </p>
            </div>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
