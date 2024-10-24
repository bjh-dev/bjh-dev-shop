import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

import CustomPortableText from '@/components/ui/CustomPortableText'
import { SimpleImageType } from '@/lib/types/sanity'
import { urlForImage } from '@/sanity/lib/image'

import CTAButton from '../ui/CTAButton'

interface Metric {
    _key: string
    title: string
    metric: string
    description: string
}

type GuideProps = {
    title: string
    subtitle: string
    image: SimpleImageType
    description: PortableTextBlock[]
    metrics: Metric[]
}

const Guide = (props: GuideProps) => {
    const { title, subtitle, image, description, metrics } = props
    return (
        <div className="relative bg-gray-200 py-12 dark:bg-gray-800 md:py-24">
            <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="relative h-full xl:col-start-2">
                        <Image
                            className="h-full w-full object-cover opacity-25 saturate-0 xl:absolute xl:inset-0"
                            src={urlForImage(image).url()}
                            alt="People working on laptops"
                            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px"
                            fill
                            priority
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-200 dark:from-gray-800 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
            <div className="container xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pb-64 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h4 className="font-ext-bold uppercase text-rose-600">
                                {title}
                            </h4>
                            <h2 className="font-plantin text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-6xl">
                                {subtitle}
                            </h2>
                        </div>
                        <div>
                            <CustomPortableText value={description} />
                        </div>
                    </div>
                    <div className="my-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                        {metrics.map(metric => (
                            <div key={metric._key}>
                                {metric.metric && (
                                    <span className="block font-exp-bold text-2xl">
                                        {metric.metric}
                                    </span>
                                )}
                                <span className="block text-sm">
                                    <span className="font-ext-bold underline decoration-rose-600 decoration-2 underline-offset-4">
                                        {metric.title}
                                    </span>{' '}
                                    {metric.description}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="my-6 border-t border-gray-700 py-6 text-xs">
                        Some of our work remains confidential. Not all victories
                        are celebrated in public. We&apos;re happy to talk with
                        you about our process and work over a call.
                    </p>
                    <CTAButton
                        url="https://calendar.app.google/zhTWfyn9ebyruuMk7"
                        text="Schedule a call"
                    />
                </div>
            </div>
        </div>
    )
}

export default Guide
