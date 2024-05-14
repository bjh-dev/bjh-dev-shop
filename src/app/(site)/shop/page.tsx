import Image from 'next/image'
import Link from 'next/link'

import Animation from '@/components/ui/Animation'
import BodyPortableText from '@/components/ui/BodyPortableText'
import { Button } from '@/components/ui/button'
import { productsQuery } from '@/lib/queries'
import { ProductPayload } from '@/lib/types/sanity'
import { getClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

export const revalidate = 0

const ShopPageRoute = async () => {
    const client = getClient()
    const [products] = await Promise.all([
        client.fetch<ProductPayload[]>(productsQuery),
    ])
    return (
        <>
            <hgroup className="flex max-w-3xl flex-col space-y-6">
                <h1 className="font-plantin text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl">
                    A Little Shop of Goodness.
                </h1>
                <p>
                    Discover a world of excellence at our small shop of
                    goodness. Get authentic certificates celebrating milestones
                    in the Brazilian Jiu-Jitsu journey.
                </p>
                <p className="mt-5">
                    Want your a custom certificate designed for your academy?{' '}
                    <a
                        href="mailto:bjh@bjh.dev"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-ext-reg text-rose-600 underline decoration-rose-600 decoration-2 underline-offset-2 transition-all duration-300 ease-linear hover:text-blue-600"
                    >
                        Contact us
                    </a>{' '}
                    today!
                </p>
            </hgroup>

            <h4 className="mb-6 mt-12 font-ext-bold uppercase text-blue-600">
                PRODUCTS
            </h4>
            <hr className="my-6 border-rose-600" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-12 md:grid-cols-4 lg:grid-cols-3">
                {products.map((product, i) => (
                    <Animation
                        className="col-span-1"
                        key={product._id}
                        fade
                        duration={0.8}
                        delay={i + 0.2}
                    >
                        <div className="flex flex-col rounded-md bg-gray-200">
                            <div className="relative aspect-video">
                                <h2 className="absolute -right-4 -top-4 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-rose-600 font-exp-bold text-white">
                                    ${product.price}
                                </h2>
                                <Image
                                    src={urlForImage(product.image).url()}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-tl-md rounded-tr-md"
                                />
                            </div>
                            <div className="flex flex-col space-y-4 p-6">
                                <h2 className="mt-0 font-ext-bold">
                                    {product.title}
                                </h2>
                                <div className="text-sm">
                                    <BodyPortableText
                                        text={product.shortDescription}
                                    />
                                </div>
                                <Button asChild>
                                    <Link
                                        href={`/shop/${product.slug.current}`}
                                    >
                                        Order Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Animation>
                ))}
            </div>
        </>
    )
}

export default ShopPageRoute
