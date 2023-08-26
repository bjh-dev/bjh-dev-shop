import BodyPortableText from '@/components/ui/BodyPortableText'
import { ProductPayload } from '@/lib/types/sanity'

export interface ProductPageProps {
  data: ProductPayload
}

function ProductPage({ data }: ProductPageProps) {
  return (
    <div className="pt-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-12">
        <div className="col-span-1">
          <h1 className="font-ext-bold text-2xl mb-4">{data.title}</h1>
          <BodyPortableText text={data.description} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 bg-gray-200">
          <h2 className="font-ext-bold text-xl">Order Yours Now</h2>
          <hr className="border-rose-600 my-4" />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
