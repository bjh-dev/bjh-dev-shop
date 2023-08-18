import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { defineField, defineType } from 'sanity'

import { CharacterCounterField } from '@/sanity/components/CustomFields'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fieldsets: [
    {
      name: 'image',
      title: 'OG Image',
      description: 'This image will be used for social media previews.',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This is the title that will appear in search results and the first line on social media preview cards (ideally 10-40 characters).',
      validation: (Rule) => Rule.max(60),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'This is the description that will appear in search results and the second line on social media preview cards (max 200 characters).',
      rows: 4,
      validation: (Rule) => Rule.max(200),
      components: { input: CharacterCounterField },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldset: 'image',
      description: 'Minimum size 1200 x 630 px in JPEG or PNG format.',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rule.custom((value: any) => {
          if (!value?.image?.asset?._ref) {
            return true
          }

          const filetype = getExtension(value.image.asset._ref)

          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }

          const { width, height } = getImageDimensions(value.image.asset._ref)

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }

          return true
        }),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      fieldset: 'image',
    }),
  ],
})
