/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: production ? "https://kkimsuhyeon.github.io/" : "",
};

module.exports = nextConfig;
