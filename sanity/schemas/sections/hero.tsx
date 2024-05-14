import { toPlainText } from '@portabletext/react'
import { defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'portableTextSimple',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'portableTextSimple',
        },
        {
            name: 'media',
            title: 'Media',
            type: 'media',
        },
        {
            name: 'ctas',
            title: 'Call to Actions',
            type: 'array',
            of: [{ type: 'cta' }],
            validation: Rule => Rule.max(2),
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
        },
        prepare({ title, subtitle }) {
            const plainTitle = toPlainText(title)
            const plainSubtitle = toPlainText(subtitle)
            return {
                title: `Hero: ${plainTitle}`,
                subtitle: plainSubtitle,
            }
        },
    },
})
