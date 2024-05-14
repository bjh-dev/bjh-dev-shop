import BodyPortableText from '@/components/ui/BodyPortableText'
import { ProductPayload } from '@/lib/types/sanity'

export interface ProductPageProps {
    data: ProductPayload
}

const ProductPage = ({ data }: ProductPageProps) => {
    return (
        <div className="pb-12 pt-6">
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-2">
                <div className="col-span-1">
                    <h1 className="mb-4 font-ext-bold text-2xl">
                        {data.title}
                    </h1>
                    <BodyPortableText text={data.description} />
                </div>
                <div className="col-span-1 bg-gray-200 p-6 md:col-span-2 lg:col-span-1">
                    <h2 className="font-ext-bold text-xl">Order Yours Now</h2>
                    <hr className="my-4 border-rose-600" />
                </div>
            </div>
        </div>
    )
}

export default ProductPage
