import React from 'react'

import Logo from '@/components/ui/Logo'

const socialLinks = [
    { href: 'https://instagram.com/bryanjhickey', label: 'Instagram' },
    { href: 'https://twitter.com/bryanjhickey', label: 'X (Twitter)' },
    { href: 'https://www.linkedin.com/in/bryanjhickey/', label: 'LinkedIn' },
]

const Closing = () => (
    <section className="flex min-h-svh flex-col justify-center bg-slate-50 py-20 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <div className="container mx-auto max-w-3xl space-y-6 px-6 text-center">
            <div className="mx-auto w-32 py-6">
                <Logo />
            </div>
            <h1 className="font-semibold text-4xl tracking-tight sm:text-5xl">
                With Gratitude.
            </h1>
            <p className="text-lg leading-relaxed">
                After an incredible run, bjh.dev is winding down. We&apos;re
                thankful to you for every project, conversation, and
                collaboration. A select few clients will continue to be served
                with their website needs but no new projects will be taken on.
            </p>
            <p>
                Your trust and encouragement meant the world, and we are deeply
                grateful for the chance to build alongside you. I will keep
                sharing new work and ideas at{' '}
                <a
                    className="font-semibold underline decoration-2 underline-offset-4 hover:text-rose-600"
                    href="https://www.bryanhickey.com"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    bryanjhickey.com
                </a>
                , and I would love to stay in touch.
            </p>
            <div className="space-y-10 pt-6">
                <p className="font-semibold text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Stay connected
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {socialLinks.map(link => (
                        <a
                            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition-colors hover:border-rose-500 hover:bg-rose-500 hover:text-white dark:border-slate-700 dark:hover:border-rose-500 dark:hover:bg-rose-500"
                            href={link.href}
                            key={link.href}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                Thank you for being part of this chapter. Please reach out any
                time—we would love to hear from you.
            </p>
        </div>
    </section>
)

export default Closing
