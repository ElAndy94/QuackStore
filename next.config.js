/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 3600,
    domains: ['images.ctfassets.net', 'lh3.googleusercontent.com', 'graph.facebook.com'],
  },
  i18n,
};

module.exports = nextConfig;
