import Image from 'next/image'
import Link from 'next/link'
import { LuChevronLeft } from 'react-icons/lu'

import GradingCertificateOrderForm from '@/components/sections/GradingCertificateOrderForm'
import BodyPortableText from '@/components/ui/BodyPortableText'
import { Button } from '@/components/ui/button'
import { ProductPayload } from '@/lib/types'
import { urlForImage } from '@/sanity/lib/image'

export interface ProductPageProps {
  data: ProductPayload
}

function ProductPage({ data }: ProductPageProps) {
  return (
    <div className="py-12">
      <div className="container">
        <Button className="my-4" asChild>
          <Link href="/shop">
            <LuChevronLeft className="w-6 h-6" />
            Back to Shop
          </Link>
        </Button>
        <div className="relative h-96">
          <Image
            className="object-cover"
            src={urlForImage(data.image).url()}
            alt={data.title}
            fill
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-12">
          <div className="col-span-1">
            <h1 className="font-ext-bold text-2xl mb-4">{data.title}</h1>
            <BodyPortableText text={data.shortDescription} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 bg-gray-200">
            <GradingCertificateOrderForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
