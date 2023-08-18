import '@/app/globals.css'

import React from 'react'

import Favicon from '@/components/global/Favicon'
import {
  AmerExpBold,
  AmerExpLght,
  AmerExpReg,
  AmerExtBold,
  AmerExtReg,
  AmerExtRLght,
} from '@/lib/fonts'

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console, func-names, @typescript-eslint/no-empty-function
  console.log = function () {}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${AmerExpLght.variable} ${AmerExpBold.variable} ${AmerExpReg.variable} ${AmerExtRLght.variable} ${AmerExtBold.variable} ${AmerExtReg.variable} font-ext-light`}
      suppressHydrationWarning
    >
      <head>
        <Favicon />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
