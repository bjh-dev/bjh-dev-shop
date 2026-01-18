/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        remotePatterns: [
            { hostname: 'cdn.sanity.io', protocol: 'https' },
            { hostname: 'images.unsplash.com', protocol: 'https' },
            { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
            { hostname: 'lh3.googleusercontent.com', protocol: 'https' },
        ],
    },
}

module.exports = nextConfig
