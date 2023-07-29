/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental:{
    appDir:true,
  },
  redirects: async () => {
    return [
      {
        source: "/(a|A)bout",
        destination: "/#About",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
