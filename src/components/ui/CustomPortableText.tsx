/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import { PortableText, PortableTextComponents } from '@portabletext/react'
import clsx from 'clsx'
import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

import { urlForImage } from '@/sanity/lib/image'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h3: ({ children }) => {
        return <h3 className="my-2 text-2xl font-bold">{children}</h3>
      },
      small: ({ children }) => {
        return <p className="mt-2 text-xs">{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        // console.log('link value: ', value)
        return (
          <a
            title={`Link to ${children}`}
            className={clsx(
              'underline transition-all duration-300 ease-in-out hover:text-white text-primary',
              {
                "after:content-['_↗']": value?.blank,
              }
            )}
            href={value?.href}
            rel="noreferrer noopener"
            {...(value?.blank && { target: '_blank' })}
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({ value }: any) => {
        if (!value.caption) {
          return (
            <div className="relative m-10 mx-auto h-96 w-full">
              <Image
                className="rounded-lg object-cover"
                src={urlForImage(value).url()}
                alt={value.alt}
                fill
              />
            </div>
          )
        }
        return (
          <figure className="m-10 mx-auto rounded-lg bg-gray-100 shadow-lg">
            <div className="relative h-96 w-full">
              <Image
                className="rounded-t-lg object-cover"
                src={urlForImage(value).url()}
                alt={value.alt}
                fill
              />
            </div>
            <figcaption className="border-t-4 border-t-primary p-4 font-sans text-sm text-gray-600">
              {value.caption}
            </figcaption>
          </figure>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
