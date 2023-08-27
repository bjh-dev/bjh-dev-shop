import { toPlainText } from '@portabletext/react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'direction',
              title: 'Direction',
              type: 'string',
              options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                  { title: 'postive', value: 'positive' },
                  { title: 'negative', value: 'negative' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
              direction: 'direction',
            },
            prepare({ title, description, direction }) {
              const directionIcon =
                direction === 'positive' ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <FaTimes classname="text-rose-600" />
                )
              return {
                title,
                subtitle: toPlainText(description),
                media: directionIcon,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title,
        subtitle: description ? toPlainText(description) : '',
      }
    },
  },
})
