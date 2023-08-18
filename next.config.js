/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
  transpilePackages: ['@/square/web-sdk', 'react-square-web-payments-sdk'],
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
