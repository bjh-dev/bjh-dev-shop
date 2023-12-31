import { LuHome } from 'react-icons/lu'
import { defineArrayMember, defineField, defineType } from 'sanity'

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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'steps' }),
        defineArrayMember({ type: 'plan' }),
        defineArrayMember({ type: 'guide' }),
        defineArrayMember({ type: 'features' }),
      ],
    }),
  ],
})
