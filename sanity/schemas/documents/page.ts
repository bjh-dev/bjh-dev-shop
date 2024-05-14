import { LuFilter } from 'react-icons/lu'
import { defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: LuFilter,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
        {
            name: 'seo',
            title: 'SEO',
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
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
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
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            group: 'content',
            of: [{ type: 'hero' }],
        },
    ],
})
