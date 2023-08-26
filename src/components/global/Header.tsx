import Link from 'next/link'

import CTAButton from '../ui/CTAButton'
import Logo from '../ui/Logo'

function Header() {
  return (
    <div className="fixed w-full top-0 z-50 bg-gray-100 shadow-md">
      <div className="container py-4">
        <div className="flex w-full items-center justify-between">
          <div>
            <Link href="/" className="w-16 h-auto block outline-blue-600">
              <Logo color />
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            {/* <Link href="/church-websites/">Church&nbsp;Websites</Link>
            <Link href="/services/">Services</Link>
            <Link href="/posts/">Posts</Link> */}
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
