import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// The preview image shown when the site link is shared on LinkedIn, Slack, email, etc.
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0d0e12",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#2f55ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AA
          </div>
          <div style={{ fontSize: 30, opacity: 0.8 }}>{profile.location}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 44, marginTop: 20, color: "#9fb0ff" }}>{profile.role}</div>
          <div style={{ fontSize: 28, marginTop: 28, opacity: 0.65 }}>
            WordPress · Figma · Elementor · Iterable · NetSuite · GA4
          </div>
        </div>
      </div>
    ),
    size,
  );
}
