import { toPlainText } from '@portabletext/react'
import { defineType } from 'sanity'

export default defineType({
    name: 'plan',
    title: 'Plan',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'planSteps',
            title: 'Plan Steps',
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
                            name: 'description',
                            title: 'Description',
                            type: 'array',
                            of: [{ type: 'block' }],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                        },
                        prepare({ title, subtitle }) {
                            return {
                                title,
                                subtitle: toPlainText(subtitle),
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
            subtitle: 'description',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: toPlainText(subtitle),
            }
        },
    },
})
