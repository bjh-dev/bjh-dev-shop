import Image from 'next/image'

import { Hero } from '@/lib/types/sanity'
import { urlForImage } from '@/sanity/lib/image'

import Animation from '../ui/Animation'
import BodyPortableText from '../ui/BodyPortableText'
import CTAButton from '../ui/CTAButton'
import HeaderPortableText from '../ui/HeaderPortableText'

function HeroFullImage(props: Hero) {
  const { title, subtitle, media, ctas = [] } = props
  return (
    <div className="hero-full-image">
      <div className="relative h-[80vh] lg:h-[70vh] isolate overflow-hidden py-14 2xl:container">
        <div className="absolute -z-10 bg-blue-900 bg-blend-overlay top-0 bottom-0 left-0 right-0 opacity-60" />
        <Image
          src={urlForImage(media?.image)
            .width(1920)
            .height(1080)
            .url()}
          alt={media?.image?.alt || 'hero image'}
          sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-x-0 top-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <svg
            className="relative left-[calc(50%-4rem)] -z-10 h-[10rem] max-w-none -translate-x-1/2 rotate-[90deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".8"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="left-0 right-0 top-0 bottom-0 w-full h-full">
          <div className="px-4 flex flex-col h-full justify-center content-center my-auto max-w-3xl mx-auto text-center text-white space-y-6">
            <Animation fade duration={0.3} slideInTop>
              <HeaderPortableText text={title} />
            </Animation>
            <Animation fade duration={0.8}>
              <div className="font-ext-reg">
                <BodyPortableText text={subtitle} />
              </div>
            </Animation>
            <Animation fade delay={0.2} duration={0.3} slideInBottom>
              <div className="mx-auto">
                <div className="flex flex-row justify-center space-x-6">
                  {ctas.map((c) => (
                    <CTAButton
                      variant="default"
                      size="lg"
                      key={c._key}
                      {...c}
                    />
                  ))}
                </div>
                <p className="text-xs mt-6">
                  All calls are{' '}
                  <span className="underline underline-offset-2">
                    confidential
                  </span>{' '}
                  and{' '}
                  <span className="underline underline-offset-2">
                    obligation free
                  </span>
                  .
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroFullImage
