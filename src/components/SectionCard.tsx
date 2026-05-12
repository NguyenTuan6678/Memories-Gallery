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
      style={{
        display: "grid",
        gridTemplateColumns: section.image ? "1fr 1fr" : "1fr",
        gap: "2.5rem",
        alignItems: "stretch",
        marginBottom: i < total - 1 ? "3rem" : "0",
      }}
    >
      {/* ── Text card — order đảo theo index ── */}
      <div
        style={{
          order: imageOnRight ? 0 : 1, // chẵn: text trước | lẻ: text sau
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          paddingTop: "4rem",
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
          style={{
            zIndex: 1,
            position: "relative",
            width: "100%",
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow:
              "0 0 1px hsl(0deg 0% 0% / 0.06), 0 4px 12px hsl(0deg 0% 0% / 0.08), 0 16px 40px hsl(0deg 0% 0% / 0.06)",
            padding: "2.5rem 2.75rem",
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
            }}
          >
            <span style={{ fontSize: "1.6rem" }}>{section.icon}</span>
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#7a9468",
                fontFamily: bodyFont,
              }}
            >
              {section.tag}
            </span>
            <div style={{ flex: 1, height: "1px", background: "#ece8e2" }} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: headingFont,
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: "0.75rem",
            }}
          >
            {section.title}
          </h2>

          {/* Intro */}
          <p
            style={{
              fontFamily: headingFont,
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#888",
              lineHeight: 1.75,
              marginBottom: "1.75rem",
            }}
          >
            {section.intro}
          </p>

          {/* Items */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {section.items.map((item, ii) => (
              <div
                key={ii}
                style={{
                  paddingLeft: "1.1rem",
                  borderLeft: "2px solid",
                  borderColor: section.splashA,
                }}
              >
                <p
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#7a9468",
                    marginBottom: "0.3rem",
                    fontFamily: bodyFont,
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: "0.96rem",
                    lineHeight: 1.8,
                    color: "#444",
                    fontWeight: 300,
                    fontFamily: bodyFont,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ảnh — chỉ render khi có, order ngược với text ── */}
      {section.image && (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, once: true }}
          variants={imageOnRight ? imageFromRight : imageFromLeft}
          style={{
            order: imageOnRight ? 1 : 0,
            paddingTop: "4rem", // ← khớp với text wrapper
            alignSelf: "stretch", // ← đáng tin hơn height: "100%"
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%", // ← fill phần còn lại sau paddingTop
              boxShadow: "0 8px 40px hsl(0deg 0% 0% / 0.10)",
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: "100%",
                height: "100%", // ← fill toàn bộ container
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
