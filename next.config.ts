/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
    output: "export",              // BẮT BUỘC cho GitHub Pages

  basePath: isProd ? "/TuananhDo_Portfolio" : "",
  assetPrefix: isProd ? "/TuananhDo_Portfolio/" : "",
   images: {
    unoptimized: true,           // cần cho static export
  },
};

module.exports = nextConfig;
