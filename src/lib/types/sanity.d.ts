/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Image, PortableTextBlock, Slug } from 'sanity'
// Rename image type so it doesn;t confolict with next/image
export type SanityImageType = Image

interface SanityBaseDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

type SEO = {
  title: string
  description: string
  image: Image
  noIndex: boolean
}

type AddressType = {
  _type: 'address'
  street: string
  suburb: string
  state: string
  postcode: number
}

type ReferenceType = {
  _type: 'reference'
  _ref: string
  _key: string
}

type LinkType = {
  _type: 'link'
  _key: string
  reference?: ReferenceType
  text?: string
  url?: string
}

export type SimpleImageType = {
  _type: 'imageSimple'
  asset: ReferenceType
  alt: string
}

type VideoType = {
  _type: 'video'
  url: string
  caption?: string
}
export interface HomePagePayload {
  title: string
  seo: SEO
  pageBuilder: any[]
}

export interface SettingsPayload extends SanityBaseDocument {
  googlePlacesId: string
  twitterCompanyProfile: string
  contactEmail: string
  googleApiKey: string
  instagramBusinessProfile: string
  googleSiteVerificationId: string
  siteUrl: string
  githubCompanyProfile: string
  googleTagManagerId: string
  contactPhone: string
  facebookPage: string
  facebookAppId: string
  pinterestBusinessProfile: string
  youTubeChannel: string
  linkedinBusinessPage: string
  postalAddress: AddressType
  googleAnalyticsId: string
  mainNavigation: LinkType[]
  title: string
}

export interface PagePayload {
  title: string
  slug: string
  seo: SEO
}

export interface PostPayload {
  title: string
  slug: string
  seo: SEO
}

export interface Hero {
  _type: 'hero'
  _key: string
  media: {
    _type: 'media'
    image: SimpleImageType
    video: VideoType
  }
  title: PortableTextBlock[]
  subtitle: PortableTextBlock[]
  ctas: LinkType[]
}

export interface ProductPayload extends SanityBaseDocument {
  title: string
  slug: Slug
  price: number
  shortDescription: string
  description?: PortableTextBlock[]
  image: SimpleImageType
}
