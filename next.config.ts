// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Apply basePath only for production builds, using the correct repo name
  basePath: process.env.NODE_ENV === 'production' ? "/sas-redesign" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
