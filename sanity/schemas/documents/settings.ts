import { LuCog } from 'react-icons/lu'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: LuCog,
  groups: [
    {
      name: 'general',
      title: 'General',
      default: true,
    },
    {
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],
  fieldsets: [
    {
      name: 'meta',
      title: 'Meta',
    },
    {
      name: 'google',
      title: 'Google',
    },
  ],
  fields: [
    // General Tab Fields
    defineField({
      name: 'title',
      title: 'Site Name',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [{ type: 'link' }],
      group: 'general',
    }),
    // Contact Tab Fields
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      group: 'contact',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact phone',
      group: 'contact',
      type: 'string',
    }),
    defineField({
      name: 'postalAddress',
      title: 'Postal Address',
      group: 'contact',
      type: 'address',
    }),
    // Social Tap Fields
    defineField({
      name: 'githubCompanyProfile',
      title: 'Github Company Profile',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'linkedinBusinessPage',
      title: 'LinkedIn Business Page',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'twitterCompanyProfile',
      title: 'Twitter Company Profile',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'pinterestBusinessProfile',
      title: 'Pinterest Business Profile',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'youTubeChannel',
      title: 'YouTube Channel',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
    defineField({
      name: 'facebookAppId',
      title: 'Facebook App ID',
      type: 'string',
      fieldset: 'meta',
      group: 'social',
      description:
        'Facebook ID associated with your page. See https://bit.ly/3SdLEeF',
    }),
    defineField({
      name: 'facebookPage',
      title: 'Facebook Page',
      type: 'string',
      fieldset: 'meta',
      group: 'social',
    }),
    defineField({
      name: 'instagramBusinessProfile',
      title: 'Instagram Business Profile',
      type: 'string',
      fieldset: 'meta',
      group: 'social',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
    defineField({
      name: 'googlePlacesId',
      title: 'Google Places ID',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
    defineField({
      name: 'googleSiteVerificationId',
      title: 'Google Site Verification ID',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
    defineField({
      name: 'googleApiKey',
      title: 'Google API Key',
      type: 'string',
      fieldset: 'google',
      group: 'social',
    }),
  ],
})
