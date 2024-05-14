import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React from 'react'

import ProductPage from '@/components/pages/product/ProductPage'
import ProductPagePreview from '@/components/pages/product/ProductPagePreview'
import { productBySlugQuery } from '@/lib/queries'
import { ProductPayload } from '@/lib/types/sanity'
import { readToken } from '@/sanity/lib/api'
import { getClient } from '@/sanity/lib/client'

export const revalidate = 0

const ProductPageRoute = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const preview = draftMode().isEnabled
        ? { token: readToken as string }
        : undefined
    const client = getClient(preview)
    const [data] = await Promise.all([
        client.fetch<ProductPayload>(productBySlugQuery, { slug }),
    ])

    if (!data && !preview) {
        notFound()
    }

    return preview ? (
        <ProductPagePreview data={data} />
    ) : (
        <ProductPage data={data} />
    )
}

export default ProductPageRoute
