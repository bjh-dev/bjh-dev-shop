import Image from 'next/image'
import Link from 'next/link'
import { LuMail } from 'react-icons/lu'

import BodyPortableText from '@/components/ui/BodyPortableText'
import { Button } from '@/components/ui/button'
import { productsQuery } from '@/lib/queries'
import { ProductPayload } from '@/lib/types'
import { getClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

export const revalidate = 0

const ShopPageRoute = async () => {
  const client = getClient()
  const [products] = await Promise.all([
    client.fetch<ProductPayload[]>(productsQuery),
  ])
  return (
    <div className="pt-16">
      <div className="container">
        <hgroup className="flex flex-col space-y-6 max-w-3xl">
          <h1 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl tracking-tight">
            The Small Shop of Goodness.
          </h1>
          <p>
            Discover a world of excellence at our small shop of goodness. Get
            authentic certificates celebrating milestones in the Brazilian
            Jiu-Jitsu journey.
          </p>
          <p className="mt-5">
            <a
              href="mailto:bjh@bjh.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="font-ext-reg text-rose-600 underline decoration-rose-600 underline-offset-2 decoration-2 hover:text-blue-600 transition-all duration-300 ease-linear"
            >
              <LuMail className="h-4 w-4 mr-2 inline-block" />
              Contact us
            </a>{' '}
            to find out about getting a custom certificate for your academy
            today!
          </p>
        </hgroup>
        <hr className="border-rose-600 my-12" />
        <h4 className="font-ext-bold uppercase text-rose-600 mb-12">
          PRODUCTS
        </h4>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col space-y-6 bg-gray-200 rounded-md"
            >
              <div className="relative aspect-video">
                <Image
                  src={urlForImage(product.image).url()}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex flex-col space-y-4 p-6">
                <h2 className="font-ext-bold">{product.title}</h2>
                <BodyPortableText text={product.shortDescription} />
                <Button asChild>
                  <Link href={`/shop/${product.slug.current}`}>Order Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPageRoute
