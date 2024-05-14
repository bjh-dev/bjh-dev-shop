/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: [
            'cdn.sanity.io',
            'images.unsplash.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
        ],
    },
}

module.exports = nextConfig
