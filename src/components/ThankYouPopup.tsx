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
          className=" fixed bottom-4 left-4 z-50 flex items-end gap-2 bg-transparent p-0 text-left cursor-pointer no-underline md:bottom-6 md:left-6 md:gap-3 "
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
            className=" flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white 
            shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md md:h-24 md:w-24 md:shadow-[0_12px_40px_rgba(0,0,0,0.12) "
          >
            {characterSrc ? (
              <img
                src={characterSrc}
                alt={characterAlt}
                className="h-full w-full object-contain p-1"
                draggable={false}
              />
            ) : (
              <span className="text-2xl md:text-5xl">🌸</span>
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
            className=" relative mb-2 max-w-55 rounded-xl bg-white/90 px-3 py-2 text-xs leading-snug 
            text-neutral-700 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md md:mb-3 
            md:max-w-65 md:rounded-2xl md:px-4 md:py-3 md:text-sm md:leading-relaxed md:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            {/* Triangle - đưa ra sau text */}
            <span className=" absolute left-1 bottom-4 z-0 h-2.5 w-2.5 rotate-45 bg-white/90 md:left-1.5 md:bottom-5 md:h-3 md:w-3 " />

            {/* Content - đưa lên trên triangle */}
            <div className="relative z-10">
              <p className="font-medium">
                {isVI
                  ? "Cảm ơn bạn đã đi cùng mình đến cuối hành trình. Nếu bạn thích nó, hãy cho mình 1 star repository và follow mình trên Github nhé ♥️."
                  : "Thank you for staying with me until the end. If you like it, please star my repository and follow me on GitHub ♥️."}
              </p>

              <p className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-neutral-500 md:mt-2 md:text-[0.7rem] md:tracking-[0.16em]">
                {isVI ? "Chạm để tiếp tục" : "Tap to continue"}
              </p>
            </div>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
