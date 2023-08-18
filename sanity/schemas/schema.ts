import { SchemaTypeDefinition } from 'sanity'

import home from '@/sanity/schemas/documents/home'
import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import settings from '@/sanity/schemas/documents/settings'
import seo from '@/sanity/schemas/objects/seo'

import product from './documents/product'
import address from './objects/address'
import cta from './objects/cta'
import imageSimple from './objects/imageSimple'
import link from './objects/link'
import media from './objects/media'
import portableTextSimple from './objects/portableTextSimple'
import video from './objects/video'
import hero from './sections/hero'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  post.name,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    home,
    page,
    post,
    product,
    settings,
    // objects
    address,
    cta,
    imageSimple,
    link,
    media,
    portableTextSimple,
    seo,
    video,
    // sections
    hero,
  ],
}
