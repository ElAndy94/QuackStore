/** @type {import('next').NextConfig} */
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
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
