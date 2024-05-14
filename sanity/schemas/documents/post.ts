import { LuPenTool } from 'react-icons/lu'
import { defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: LuPenTool,
    groups: [
        {
            title: 'Content',
            name: 'content',
            default: true,
        },
        {
            title: 'SEO',
            name: 'seo',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        },
    ],
})
