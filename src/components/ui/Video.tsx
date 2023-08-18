'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const playerConfig = {
  youtube: {},
  vimeo: {
    playerOptions: {
      modestbranding: true,
      autoplay: true,
      loop: true,
      background: true,
      audio: false,
      controls: false,
      byline: false,
      portrait: false,
      title: false,
      color: '#28a0aa',
    },
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Video(props: any) {
  // console.log('VideoProps: ', props)
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  const { url } = props

  return (
    <div className="aspect-w-16 aspect-h-9">
      {hasWindow && (
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
          playing
          config={playerConfig}
        />
      )}
    </div>
  )
}

export default Video
