import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iag-church",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
