import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon; matches the navbar brand mark and src/app/icon.svg.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
          color: "#fff",
          fontSize: 80,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    size,
  );
}
