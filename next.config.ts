import type { NextConfig } from "next";

const repo = "PORTFOLIO"; // <-- GENAU dein GitHub Repo-Name (Groß/Klein beachten!)

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;