import { LuGift } from 'react-icons/lu'
import { defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: LuGift,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required(),
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageSimple',
            validation: Rule => Rule.required(),
        },
    ],
})
