/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you want to allow external images later, add domains below.
  images: {
    remotePatterns: []
  }
}

module.exports = nextConfig
