import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageSimple',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'video',
    }),
  ],
})
