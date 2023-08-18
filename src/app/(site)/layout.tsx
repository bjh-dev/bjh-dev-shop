import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import React from 'react'

import Footer from '@/components/global/Footer'
import Header from '@/components/global/Header'
import ThemeProvider from '@/components/theme-provider'

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
  themeColor: '#ffffff',
  manifest: '/site.webmanifest.json',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
          <Header />
          <main className="mt-16 mb-auto">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
      <Analytics />
    </div>
  )
}
