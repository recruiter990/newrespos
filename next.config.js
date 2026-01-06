/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/fiber', '@react-three/drei'],
  },
};

module.exports = nextConfig;

