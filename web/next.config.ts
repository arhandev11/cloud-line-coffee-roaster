import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit id/index.html so any static host serves /id/ without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
