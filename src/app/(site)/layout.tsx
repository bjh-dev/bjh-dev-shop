import { Analytics } from '@vercel/analytics/react'
import type { Viewport } from 'next'
import { Metadata } from 'next'
import React from 'react'

import Footer from '@/components/global/Footer'
import Header from '@/components/global/Header'
import DevlayoutHelper from '@/components/ui/DevLayoutHelper'

export const metadata: Metadata = {
    generator: 'Next.js',
    metadataBase: new URL(
        process.env.NODE_ENV === 'production'
            ? 'https://www.example.com'
            : 'http://localhost:3000'
    ),
    applicationName: 'Sanctuary CMS',
    keywords: ['foo', 'bar'],
    authors: [{ name: 'Bryan Hickey', url: 'https://www.bryanjhickey.com/' }],
    creator: 'Bryan J. Hickey',
    publisher: 'Bryan J. Hickey',
    manifest: '/site.webmanifest.json',
    icons: {
        icon: '/favicon-32x32.png',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1F2937' },
    ],
    initialScale: 1,
    maximumScale: 1.5,
    userScalable: true,
    colorScheme: 'dark',
}

const PagesLayout = async ({
    children,
}: {
    readonly children: React.ReactNode
}) => {
    return (
        <div className="relative" suppressHydrationWarning>
            <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                <Header />
                <main className="mb-auto mt-16">{children}</main>
                <Footer />
            </div>

            <Analytics />
            {process.env.NODE_ENV === 'development' && <DevlayoutHelper />}
        </div>
    )
}

export default PagesLayout
