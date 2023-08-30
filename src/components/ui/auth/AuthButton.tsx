'use client'

import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { LuCreditCard, LuLogOut, LuUser } from 'react-icons/lu'

import { parseName } from '@/lib/helpers'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../dropdown-menu'

function AuthButton() {
  const session = useSession()
  if (session?.status === 'authenticated') {
    const nameObject = parseName(session?.data.user.name)
    console.log('session in header: ', session)
    return (
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-blue">
              <Image
                src={session?.data.user.image ?? '/images/profile.jpeg'}
                alt={session?.data.user.name ?? 'Unknown'}
                width={80}
                height={80}
                className="h-10 w-10 rounded-full border-2 border-gray-400 hover:border-blue-600"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel>Hello, {nameObject.name}.</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <LuUser className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuCreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button
                  type="button"
                  className="w-full"
                  onClick={() => signOut()}
                >
                  <LuLogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }
  return null
}

export default AuthButton
