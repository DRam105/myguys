import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel optimizes/serves modern formats automatically.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
