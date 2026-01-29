/** @type {import('next').NextConfig} */
const repo = "TuananhDo_Portfolio";

module.exports = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};
