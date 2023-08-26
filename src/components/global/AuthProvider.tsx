'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
