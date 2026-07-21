import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces a plain HTML/CSS/JS site in `out/` that runs on
  // any web host (including Hostinger shared hosting) — no Node.js server.
  output: "export",
  images: {
    // Static export can't use the server image optimizer.
    unoptimized: true,
  },
  // Clean URLs as folders (e.g. /services/ants/index.html) for shared hosting.
  trailingSlash: true,
};

export default nextConfig;
