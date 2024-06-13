/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
    ],
    domains: ['cdn.prod.website-files.com'],
  },
};

module.exports = nextConfig;
