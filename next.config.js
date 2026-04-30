const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/app": path.resolve(__dirname, "app"),
    };
    return config;
  },
};

module.exports = nextConfig;
