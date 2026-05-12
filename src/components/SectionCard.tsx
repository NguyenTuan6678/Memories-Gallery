import { type Section } from "../utils/season";
import { motion, type Variants } from "motion/react";

const imageFromRight: Variants = {
  offscreen: { x: 60, opacity: 0, scale: 0.97 },
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageFromLeft: Variants = {
  offscreen: { x: -60, opacity: 0, scale: 0.97 },
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function SectionCard({
  section,
  i,
  total,
  headingFont,
  bodyFont,
}: {
  section: Section;
  i: number;
  total: number;
  headingFont: string;
  bodyFont: string;
}) {
  const background = `linear-gradient(136deg, ${section.splashA}, ${section.splashB})`;
  const imageOnRight = i % 2 === 0; // chẵn: text trái ảnh phải, lẻ: ngược lại

  return (
    <div
      className="
      grid
      w-full
      min-w-0
      grid-cols-1
      gap-8
      md:grid-cols-2
      md:gap-10
    "
      style={{
        alignItems: "stretch",
        marginBottom: i < total - 1 ? "3rem" : "0",
      }}
    >
      {/* TEXT CARD */}
      <div
        className={`
        w-full
        min-w-0
        ${imageOnRight ? "md:order-1" : "md:order-2"}
        ${!section.image ? "md:col-span-2" : ""}
      `}
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          paddingTop: "clamp(2.5rem, 8vw, 4rem)",
          height: "100%",
        }}
      >
        {/* Splash */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background,
            borderRadius: "0 0 20px 20px",
            zIndex: 0,
          }}
        />

        {/* Card */}
        <div
          className="w-full min-w-0"
          style={{
            zIndex: 1,
            position: "relative",
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow:
              "0 0 1px hsl(0deg 0% 0% / 0.06), 0 4px 12px hsl(0deg 0% 0% / 0.08), 0 16px 40px hsl(0deg 0% 0% / 0.06)",
            padding: "clamp(1.15rem, 5vw, 2.75rem)",
            marginBottom: "1rem",
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
              minWidth: 0,
            }}
          >
            <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>
              {section.icon}
            </span>

            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#7a9468",
                fontFamily: bodyFont,
                whiteSpace: "normal",
                overflowWrap: "break-word",
              }}
            >
              {section.tag}
            </span>

            <div
              className="hidden sm:block"
              style={{
                flex: 1,
                height: "1px",
                background: "#ece8e2",
              }}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: headingFont,
              fontSize: "clamp(1.6rem, 8vw, 2.1rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#1a1a1a",
              marginBottom: "0.75rem",
              overflowWrap: "break-word",
              wordBreak: "normal",
            }}
          >
            {section.title}
          </h2>

          {/* Intro */}
          <p
            style={{
              fontFamily: bodyFont,
              fontStyle: "normal",
              fontSize: "clamp(0.95rem, 4vw, 1rem)",
              color: "#888",
              lineHeight: 1.75,
              marginBottom: "1.75rem",
              overflowWrap: "break-word",
              wordBreak: "normal",
            }}
          >
            {section.intro}
          </p>

          {/* Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {section.items.map((item, ii) => (
              <div
                key={ii}
                style={{
                  paddingLeft: "0.9rem",
                  borderLeft: "2px solid",
                  borderColor: section.splashA,
                  minWidth: 0,
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#7a9468",
                    marginBottom: "0.3rem",
                    fontFamily: bodyFont,
                    overflowWrap: "break-word",
                  }}
                >
                  {item.heading}
                </p>

                <p
                  style={{
                    fontSize: "clamp(0.92rem, 4vw, 0.98rem)",
                    lineHeight: 1.75,
                    color: "#444",
                    fontWeight: 300,
                    fontFamily: bodyFont,
                    overflowWrap: "break-word",
                    wordBreak: "normal",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE - desktop only */}
      {section.image && (
        <motion.div
          className={`
          hidden
          min-w-0
          md:block
          ${imageOnRight ? "md:order-2" : "md:order-1"}
        `}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, once: true }}
          variants={imageOnRight ? imageFromRight : imageFromLeft}
          style={{
            paddingTop: "4rem",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 8px 40px hsl(0deg 0% 0% / 0.10)",
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
