import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "sas-redesign" ? "/<YourRepoName>" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
