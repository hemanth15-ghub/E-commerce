/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ringke.co.in',
        port: '',
        pathname: '/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'www.jiomart.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yntra.in',
        port: '',
        pathname: '/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'kitchenmart.co.in',
        port: '',
        pathname: '/cdn/**',
      },
    ],
  },
};

module.exports = nextConfig;
