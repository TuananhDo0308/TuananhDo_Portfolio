import type { NextConfig } from "next";
const repo = "TuananhDo_Portfolio";

const nextConfig: NextConfig = {
  

  reactStrictMode: false, // Tạm thời tắt để test
  //   output: "export",

  //   basePath: `/${repo}`,
  // assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true ,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
