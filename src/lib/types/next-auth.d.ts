/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: number
      name: string
      email: string
      image: string
      role: Role
      accessToken: string
      createdAt: string
      updatedAt: string
    }
  }
}
