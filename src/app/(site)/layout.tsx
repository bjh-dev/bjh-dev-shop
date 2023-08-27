import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import React from 'react'

import AuthProvider from '@/components/global/AuthProvider'
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
    <div className="relative" suppressHydrationWarning>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:text-gray-50 dark:bg-gray-800">
          <Header />
          <main className="mt-16 mb-auto">{children}</main>
          <Footer />
        </div>
      </AuthProvider>
      <Analytics />
      {process.env.NODE_ENV === 'development' && <DevlayoutHelper />}
    </div>
  )
}
