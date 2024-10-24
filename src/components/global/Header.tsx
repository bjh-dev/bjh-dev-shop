'use client'

import Link from 'next/link'

import CTAButton from '../ui/CTAButton'
import Logo from '../ui/Logo'

const Header = () => {
    return (
        <div className="fixed top-0 z-50 w-full bg-gray-100 shadow-md dark:bg-gray-700">
            <div className="container py-4">
                <div className="flex w-full items-center justify-between">
                    <div className="dark:hidden">
                        <Link
                            href="/"
                            className="block h-auto w-16 outline-blue-600"
                        >
                            <Logo color />
                        </Link>
                    </div>
                    <div className="hidden dark:block">
                        <Link
                            href="/"
                            className="block h-auto w-16 outline-blue-600"
                        >
                            <Logo white />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div>
                            <CTAButton
                                url="https://calendar.app.google/zhTWfyn9ebyruuMk7"
                                text="Schedule a call"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
