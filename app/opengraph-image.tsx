import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Fast, Guaranteed Local Pest Control`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph / social share image in the brand colors.
 * Rendered on the fly by Next — no static asset needed.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1a1a1a",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 18,
              background: "linear-gradient(135deg,#d81e22,#9e1418)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 40,
              fontWeight: 900,
            }}
          >
            MG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fff", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
              MY GUYS
            </span>
            <span style={{ color: "#d81e22", fontSize: 18, fontWeight: 700, letterSpacing: 6 }}>
              PEST CONTROL
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#fff", fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>
            Pests Don&apos;t Stand
          </span>
          <span style={{ color: "#d81e22", fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>
            a Chance.
          </span>
        </div>

        <div style={{ display: "flex", gap: 30, color: "rgba(255,255,255,0.75)", fontSize: 26 }}>
          <span>Locally Owned</span>
          <span>Licensed &amp; Insured</span>
          <span>Same-Day Service</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
