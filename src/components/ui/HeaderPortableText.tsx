/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { ImQuotesLeft } from 'react-icons/im'

import { urlForImage } from '@/sanity/lib/image'

export const HeaderTextComponent = {
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
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-10 list-disc space-y-2 py-5">{children}</ul>
    },
    number: ({ children }: any) => {
      return <ol className="ml-lg list-decimal">{children}</ol>
    },
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1 className="font-plantin text-5xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-6xl tracking-tight">
          {children}
        </h1>
      )
    },
    h2: ({ children }: any) => {
      return <h2 className="pt-10 pb-4 text-4xl font-bold">{children}</h2>
    },
    h3: ({ children }: any) => {
      return <h3 className="pt-10 pb-4 text-3xl font-bold">{children}</h3>
    },
    h4: ({ children }: any) => {
      return <h4 className="pt-10 pb-4 text-2xl font-bold">{children}</h4>
    },
    normal: ({ children }: any) => {
      return <p className="pb-2">{children}</p>
    },
    blockquote: ({ children }: any) => {
      return (
        <figure className="relative my-10 rounded-r-lg border-l-4 border-l-primary shadow-lg ">
          <blockquote className="bg-gray-100 py-10 px-10 text-lg italic leading-relaxed text-gray-600">
            {children}
          </blockquote>
          <figcaption className="my-2 px-10 py-4 font-sans text-sm text-gray-500">
            —Aldous Huxley, <cite>Brave New World</cite>
          </figcaption>
          <ImQuotesLeft className="absolute top-4 left-4 text-5xl text-primary opacity-10" />
        </figure>
      )
    },
  },
  marks: {
    link: ({ value, children }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary decoration-2 hover:text-primary-600 hover:decoration-gray-500"
        >
          {children}
        </Link>
      )
    },
    blueText: ({ children }: any) => {
      return <span className="text-blue-600">{children}</span>
    },
    redText: ({ children }: any) => {
      return <span className="text-rose-600">{children}</span>
    },
    redUnderline: ({ children }: any) => {
      return (
        <span className="underline underline-offset-8 decoration-rose-600 decoration-4">
          {children}
        </span>
      )
    },
    blueUnderline: ({ children }: any) => {
      return (
        <span className="underline underline-offset-8 decoration-blue-600 decoration-4">
          {children}
        </span>
      )
    },
    fancyAmpersand: () => {
      return (
        <span
          style={{
            fontFamily:
              "Baskerville, 'Goudy Old Style', 'Palatino', 'Book Antiqua', serif",
            fontWeight: 'normal',
            fontSize: '110%',
            fontStyle: 'italic',
          }}
        >
          &amp;
        </span>
      )
    },
  },
}

function HeaderPortableText(props: any) {
  const { text } = props

  return (
    <div>
      <PortableText value={text} components={HeaderTextComponent} />
    </div>
  )
}

export default HeaderPortableText
