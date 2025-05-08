/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"], // Allow images from GitHub
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
};

export default nextConfig;
