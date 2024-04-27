/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LINKEDIN_CLIENT_ID: string,
    LINKEDIN_CLIENT_SECRET: string,
    NEXTAUTH_SECRET: string,
    NEXTAUTH_URL: string,
  },
};

module.exports = nextConfig;
