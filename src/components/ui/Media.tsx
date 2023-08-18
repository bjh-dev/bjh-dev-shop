import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'

import Video from './Video'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Media(props: any) {
  const { image, video } = props
  // console.log('MediaProps: ', props)
  if (!image?.asset) {
    return <Video {...video} />
  }
  return (
    <div>
      <Image
        src={urlForImage(image).url()}
        alt={image?.alt || 'hero image'}
        width={1000}
        height={1000}
        priority
      />
    </div>
  )
}

export default Media
