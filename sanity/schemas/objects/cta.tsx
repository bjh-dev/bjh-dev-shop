import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [{ type: 'home' }, { type: 'page' }],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      description:
        'The text to display for the URL link or use it to override the default text for the reference link.',
    }),
  ],
  preview: {
    select: {
      refTitle: 'reference.title',
      refLink: 'reference.slug.current',
      text: 'text',
      url: 'url',
    },
    prepare({ refTitle, refLink, text, url }) {
      const plainText = text || refTitle
      const plainUrl = url || `/${refLink}`
      return {
        title: `CTA: ${plainText}`,
        subtitle: plainUrl,
      }
    },
  },
})
