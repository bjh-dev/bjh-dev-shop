import { defineType } from 'sanity'

export default defineType({
    name: 'media',
    title: 'Media',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'imageSimple',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'video',
        },
    ],
})
