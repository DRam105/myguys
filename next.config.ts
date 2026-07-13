import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats for better Core Web Vitals.
    formats: ["image/avif", "image/webp"],
    // Allow the SVG logo placeholder to be served via next/image.
    // (Safe here: the logo is a first-party asset you control.)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
