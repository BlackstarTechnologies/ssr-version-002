/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ["mdx", "md","mjs", "jsx", "js", "tsx", "ts"],
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};
module.exports = nextConfig;
