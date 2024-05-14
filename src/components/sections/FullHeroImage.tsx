import Image from 'next/image'

import { Hero } from '@/lib/types/sanity'
import { urlForImage } from '@/sanity/lib/image'

import Animation from '../ui/Animation'
import BodyPortableText from '../ui/BodyPortableText'
import CTAButton from '../ui/CTAButton'

const HeroFullImage = (props: Hero) => {
    const { subtitle, media, ctas = [] } = props
    return (
        <div className="hero-full-image">
            <div className="relative isolate h-[100vh] overflow-hidden py-14 sm:h-[80vh] xl:h-[70vh]">
                <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-blue-900 opacity-60 bg-blend-overlay" />
                <Image
                    src={urlForImage(media?.image).url()}
                    alt={media?.image?.alt || 'hero image'}
                    sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px"
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    fill
                    priority
                />
                <div className="absolute inset-x-0 bottom-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <svg
                        className="relative left-[calc(50%-4rem)] -z-10 h-[10rem] max-w-none -translate-x-1/2 rotate-[90deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".8"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="bottom-0 left-0 right-0 top-0 h-full w-full">
                    <div className="mx-auto my-auto flex h-full max-w-3xl flex-col content-center justify-center space-y-6 px-4 text-center text-white">
                        <Animation fade duration={0.3} slideInTop>
                            <h1 className="font-plantin text-6xl tracking-tight md:text-7xl lg:text-8xl">
                                Get a{' '}
                                <span className="underline decoration-rose-600 decoration-4 underline-offset-8">
                                    Better Website
                                </span>{' '}
                                <span
                                    style={{
                                        fontFamily:
                                            'Baskerville, "Goudy Old Style", Palatino, "Book Antiqua", serif',
                                        fontWeight: 'normal',
                                        fontSize: '110%',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    &amp;
                                </span>{' '}
                                <span className="underline decoration-blue-600 decoration-4 underline-offset-8">
                                    Grow Your Business
                                </span>
                            </h1>
                        </Animation>
                        <Animation fade duration={0.8}>
                            <div className="font-ext-reg">
                                <BodyPortableText text={subtitle} />
                            </div>
                        </Animation>
                        <Animation
                            fade
                            delay={0.2}
                            duration={0.3}
                            slideInBottom
                        >
                            <div className="mx-auto">
                                <div className="flex flex-row justify-center space-x-6">
                                    {ctas.map(c => (
                                        <CTAButton
                                            variant="default"
                                            size="lg"
                                            key={c._key}
                                            {...c}
                                        />
                                    ))}
                                </div>
                                <p className="mt-6 text-xs">
                                    All calls are{' '}
                                    <span className="underline underline-offset-2">
                                        confidential
                                    </span>{' '}
                                    and{' '}
                                    <span className="underline underline-offset-2">
                                        obligation free
                                    </span>
                                    .
                                </p>
                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroFullImage
