import type { NextConfig } from "next";
const repo = "TuananhDo_Portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Tạm thời tắt để test
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
