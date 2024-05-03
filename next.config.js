/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'd1mgh288ipfiad.cloudfront.net',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
