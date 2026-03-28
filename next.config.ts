// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: false,
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
