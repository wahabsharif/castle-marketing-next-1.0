/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      // Add more export paths as needed
    };
  },
};

module.exports = nextConfig;
