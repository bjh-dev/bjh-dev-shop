import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/links'

import { Button } from './button'

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
      <Button asChild>
        <Link href={CtaProp.url}>{CtaProp.text}</Link>
      </Button>
    )
  }
  if (!reference) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )
  }
  const href = resolveHref(reference?._type, reference?.slug) || ''
  return <Link href={href}>{text || reference.title}</Link>
}

export default CTAButton
