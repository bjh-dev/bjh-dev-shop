'use client'

import { useLiveQuery } from 'next-sanity/preview'

import Page from '@/components/pages/page/Page'
import { pageBySlugQuery } from '@/lib/queries'
import { PagePayload } from '@/lib/types/sanity'

type PageProps = {
    data: PagePayload
}

const HomePagePreview = ({ data: initialData }: PageProps) => {
    const [data] = useLiveQuery<PagePayload | null>(
        initialData,
        pageBySlugQuery
    )

    if (!data) {
        return (
            <div>
                Please start editing your Home document to see the preview!
            </div>
        )
    }

    return <Page data={data} />
}

export default HomePagePreview
