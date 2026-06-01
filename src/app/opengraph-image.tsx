import { ImageResponse } from "next/og";

export const alt = "Pako Jack Motsumi | CS & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const C = {
  base:    "#1e1e2e",
  surface0:"#313244",
  surface1:"#45475a",
  overlay0:"#6c7086",
  subtext0:"#a6adc8",
  text:    "#cdd6f4",
  mauve:   "#cba6f7",
  green:   "#a6e3a1",
  blue:    "#89b4fa",
  lavender:"#b4befe",
};

const tags = ["Backend Dev", "Web Dev", "Mobile Dev", "AI / ML"];

export default function Image() {
  return new ImageResponse(
    (
      // Root
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", backgroundColor: C.base, fontFamily: "monospace", position: "relative" }}>

        {/* Top gradient bar */}
        <div style={{ display: "flex", position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg, ${C.mauve}, ${C.blue}, ${C.lavender})` }} />

        {/* Main content area */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", padding: "72px 80px 64px" }}>

          {/* Status badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: C.surface0, border: `1px solid ${C.surface1}`, borderRadius: "999px", padding: "8px 20px", alignSelf: "flex-start" }}>
            <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: C.green, flexShrink: 0 }} />
            <div style={{ display: "flex", color: C.subtext0, fontSize: "20px" }}>Interning @ BITRI Botswana</div>
          </div>

          {/* Name block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", color: C.overlay0, fontSize: "24px" }}>Hey, I&apos;m</div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "18px" }}>
              <div style={{ display: "flex", fontSize: "84px", fontWeight: 700, color: C.text, letterSpacing: "-2px", lineHeight: 1 }}>Pako Jack</div>
              <div style={{ display: "flex", fontSize: "84px", fontWeight: 700, color: C.mauve, letterSpacing: "-2px", lineHeight: 1 }}>Motsumi</div>
            </div>
            <div style={{ display: "flex", fontSize: "28px", color: C.subtext0, marginTop: "4px" }}>CS &amp; Software Engineering · Botswana</div>
          </div>

          {/* Tags row */}
          <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
            {tags.map((tag) => (
              <div key={tag} style={{ display: "flex", backgroundColor: C.surface0, border: `1px solid ${C.surface1}`, borderRadius: "999px", padding: "8px 20px", color: C.subtext0, fontSize: "20px" }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-right watermark */}
        <div style={{ display: "flex", position: "absolute", bottom: "40px", right: "80px", color: C.overlay0, fontSize: "20px" }}>
          github.com/enchantrezzz
        </div>
      </div>
    ),
    { ...size }
  );
}
