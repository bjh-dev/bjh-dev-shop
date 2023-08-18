import Image from 'next/image'
import Link from 'next/link'

import CTAButton from '../ui/CTAButton'

function Header() {
  return (
    <div className="fixed w-full top-0 z-50 bg-gray-100 shadow-md">
      <div className="container py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="w-14">
                <Image
                  src="/images/Logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="hidden gap-x-6 text-sm md:flex md:items-center md:justify-between">
            {/* <Link href="/church-websites/">Church&nbsp;Websites</Link>
            <Link href="/services/">Services</Link>
            <Link href="/posts/">Posts</Link> */}
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
