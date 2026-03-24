/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ii2.pepperfry.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ii3.pepperfry.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.taggbox.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ii1.pepperfry.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/products/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
