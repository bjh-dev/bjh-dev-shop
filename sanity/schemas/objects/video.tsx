import React from 'react'
import ReactPlayer from 'react-player'
import { defineType } from 'sanity'

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Describe the video for accessibility purposes.',
        },
    ],
    preview: {
        select: {
            url: 'url',
            caption: 'caption',
        },
        prepare({ url, caption }) {
            return {
                title: `Video: ${caption}`,
                media: <ReactPlayer url={url} width={200} height={200} />,
            }
        },
    },
})
