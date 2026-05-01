import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hotel_",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
