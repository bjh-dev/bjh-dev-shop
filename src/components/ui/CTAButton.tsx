import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/links'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CTAButton(props: any) {
  const { reference, url, text } = props
  // console.log("CTAButtonProps: ", props);
  if (!reference && !url && !text) {
    const CtaProp = {
      url: 'https://calendly.com/bjhdev/intro-call',
      text: 'Schedule a Call',
    }
    return (
      <Link href={CtaProp.url} className="button">
        {CtaProp.text}
      </Link>
    )
  }
  if (!reference) {
    return (
      <a
        className="button"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    )
  }
  const href = resolveHref(reference?._type, reference?.slug) || ''
  return (
    <Link href={href} className="button">
      {text || reference.title}
    </Link>
  )
}

export default CTAButton
