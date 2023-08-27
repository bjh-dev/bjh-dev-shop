'use client'

import Link from 'next/link'

import AuthButton from '../ui/auth/AuthButton'
import CTAButton from '../ui/CTAButton'
import Logo from '../ui/Logo'

function Header() {
  return (
    <div className="fixed w-full top-0 z-50 bg-gray-100 dark:bg-gray-700 shadow-md">
      <div className="container py-4">
        <div className="flex w-full items-center justify-between">
          <div className="dark:hidden">
            <Link href="/" className="w-16 h-auto block outline-blue-600">
              <Logo color />
            </Link>
          </div>
          <div className="hidden dark:block">
            <Link href="/" className="w-16 h-auto block outline-blue-600">
              <Logo white />
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            {/* <Link href="/church-websites/">Church&nbsp;Websites</Link>
            <Link href="/services/">Services</Link>
            <Link href="/posts/">Posts</Link> */}
            <div>
              <AuthButton />
            </div>
            <div>
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
