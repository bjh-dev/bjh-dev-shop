'use client'

import { signIn } from 'next-auth/react'
import { FaApple, FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '../button'

export function GoogleAuthButton() {
  const handleClick = () => {
    signIn('google')
  }
  return (
    <Button
      variant="outline"
      className="w-full justify-between items-center flex"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-16">
        <FcGoogle className="h-7 w-7 border-r border-gray-300 pr-2 mr-2" />
      </div>
      <div className="text-center w-full text-sm">Continue with Google</div>
    </Button>
  )
}

export function FacebookAuthButton() {
  const handleClick = () => {
    signIn('facebook')
  }
  return (
    <Button
      variant="outline"
      className="w-full justify-start flex"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-16">
        <FaFacebookSquare className="text-[#1877F2] h-7 w-7 border-r border-gray-300 pr-2 mr-2" />
      </div>
      <div className="text-center w-full text-sm">Continue with Facebook</div>
    </Button>
  )
}

export function AppleAuthButton() {
  const handleClick = () => {
    signIn('apple')
  }
  return (
    <Button
      variant="outline"
      className="w-full justify-start flex"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-16">
        <FaApple className="h-7 w-7 border-r border-gray-300 pr-2 mr-2" />
      </div>
      <div className="text-center w-full text-sm">Continue with Apple</div>
    </Button>
  )
}
