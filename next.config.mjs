/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return []; // Remove rewrites since we're handling in middleware
  },
};

export default nextConfig;
