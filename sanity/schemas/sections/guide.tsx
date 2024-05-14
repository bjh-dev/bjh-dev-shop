import { toPlainText } from '@portabletext/react'
import { defineType } from 'sanity'

export default defineType({
    name: 'guide',
    title: 'Guide',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageSimple',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'metrics',
            title: 'Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'metric',
                            title: 'Metric',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                            metric: 'metric',
                        },
                        prepare({ title, subtitle, metric }) {
                            return {
                                title: `${metric}`,
                                subtitle: `${title} ${toPlainText(subtitle)}`,
                                metric,
                            }
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
        },
    },
})
