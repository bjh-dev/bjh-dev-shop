'use client'

import { useLiveQuery } from 'next-sanity/preview'

import { productBySlugQuery } from '@/lib/queries'
import { ProductPayload } from '@/lib/types'

import ProductPage, { ProductPageProps } from './ProductPage'

function ProductPagePreview({ data: initialData }: ProductPageProps) {
  const [data] = useLiveQuery<ProductPayload | null>(
    initialData,
    productBySlugQuery
  )

  if (!data) {
    return (
      <div>Please start editing your Home document to see the preview!</div>
    )
  }

  return <ProductPage data={data} />
}

export default ProductPagePreview
