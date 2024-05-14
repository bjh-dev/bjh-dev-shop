import { defineType } from 'sanity'

export default defineType({
    name: 'imageSimple',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            title: 'Alternative text',
            type: 'string',
            description: 'Important for SEO and accessibility.',
        },
    ],
})
