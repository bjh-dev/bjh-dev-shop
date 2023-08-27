import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/links'

import { Button } from './button'

interface CTAButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: any
  url?: string
  text?: string
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CTAButton(props: CTAButtonProps) {
  const { reference, url, text, size = 'default', variant = 'default' } = props
  if (!reference) {
    return (
      <Button size={size} variant={variant} asChild>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text || 'Schedule a call'}
        </a>
      </Button>
    )
  }
  const href = resolveHref(reference?._type, reference?.slug) ?? ''
  return (
    <Button size={size} variant={variant} asChild>
      <Link href={href}>{text ?? reference.title}</Link>
    </Button>
  )
}

export default CTAButton
