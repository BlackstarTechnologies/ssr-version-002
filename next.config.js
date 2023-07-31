/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 3,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};
module.exports = nextConfig;
