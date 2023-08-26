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
      <hgroup className="flex flex-col space-y-6 max-w-3xl">
        <h1 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
          A Little Shop of Goodness.
        </h1>
        <p>
          Discover a world of excellence at our small shop of goodness. Get
          authentic certificates celebrating milestones in the Brazilian
          Jiu-Jitsu journey.
        </p>
        <p className="mt-5">
          Want your a custom certificate designed for your academy?{' '}
          <a
            href="mailto:bjh@bjh.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="font-ext-reg text-rose-600 underline decoration-rose-600 underline-offset-2 decoration-2 hover:text-blue-600 transition-all duration-300 ease-linear"
          >
            Contact us
          </a>{' '}
          today!
        </p>
      </hgroup>

      <h4 className="font-ext-bold uppercase text-blue-600 mt-12 mb-6">
        PRODUCTS
      </h4>
      <hr className="border-rose-600 my-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-3 sm:gap-12 mt-12">
        {products.map((product, i) => (
          <Animation
            className="col-span-1"
            key={product._id}
            fade
            duration={0.8}
            delay={i + 0.2}
          >
            <div className="flex flex-col bg-gray-200 rounded-md">
              <div className="relative aspect-video">
                <h2 className="absolute -top-4 -right-4 text-white z-20 w-16 h-16 flex justify-center items-center font-exp-bold bg-rose-600 rounded-full">
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
                <h2 className="font-ext-bold mt-0">{product.title}</h2>
                <div className="text-sm">
                  <BodyPortableText text={product.shortDescription} />
                </div>
                <Button asChild>
                  <Link href={`/shop/${product.slug.current}`}>Order Now</Link>
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
