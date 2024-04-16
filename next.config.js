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
  output: "export", // Add this line
};

module.exports = nextConfig;
