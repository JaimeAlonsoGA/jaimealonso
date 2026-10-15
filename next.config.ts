import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/jaime_alonso_resume.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: 'attachment; filename="jaime_alonso_resume.pdf"' },
        ],
      },
    ];
  },
  // Lets an agent build and serve a copy without touching the .next of a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
