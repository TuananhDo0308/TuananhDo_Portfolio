/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  basePath: isProd ? "/TuananhDo_Portfolio" : "",
  assetPrefix: isProd ? "/TuananhDo_Portfolio/" : "",
};

module.exports = nextConfig;
