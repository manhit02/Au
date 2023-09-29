/** @type {import('next').NextConfig} */
const path = require("path");
const { parsed: appEnv } = require("dotenv").config({
  path: path.resolve(__dirname, "configs/.env"),
});
const nextConfig = {
  output: "standalone",
  // output: "export",
  // env: appEnv,
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
