import { LuHome } from 'react-icons/lu'
import { defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    icon: LuHome,
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
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            group: 'content',
            of: [
                { type: 'hero' },
                { type: 'steps' },
                { type: 'plan' },
                { type: 'guide' },
                { type: 'features' },
            ],
        },
    ],
})
