import { LuCog } from 'react-icons/lu'
import { defineType } from 'sanity'

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
        {
            name: 'title',
            title: 'Site Name',
            type: 'string',
            group: 'general',
        },
        {
            name: 'siteUrl',
            title: 'Site URL',
            type: 'url',
            group: 'general',
        },
        {
            name: 'mainNavigation',
            title: 'Main Navigation',
            type: 'array',
            of: [{ type: 'link' }],
            group: 'general',
        },
        // Contact Tab Fields
        {
            name: 'contactEmail',
            title: 'Contact email',
            group: 'contact',
            type: 'string',
            validation: Rule => Rule.email(),
        },
        {
            name: 'contactPhone',
            title: 'Contact phone',
            group: 'contact',
            type: 'string',
        },
        {
            name: 'postalAddress',
            title: 'Postal Address',
            group: 'contact',
            type: 'address',
        },
        // Social Tap Fields
        {
            name: 'githubCompanyProfile',
            title: 'Github Company Profile',
            type: 'string',
            group: 'social',
        },
        {
            name: 'linkedinBusinessPage',
            title: 'LinkedIn Business Page',
            type: 'string',
            group: 'social',
        },
        {
            name: 'twitterCompanyProfile',
            title: 'Twitter Company Profile',
            type: 'string',
            group: 'social',
        },
        {
            name: 'pinterestBusinessProfile',
            title: 'Pinterest Business Profile',
            type: 'string',
            group: 'social',
        },
        {
            name: 'youTubeChannel',
            title: 'YouTube Channel',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
        {
            name: 'facebookAppId',
            title: 'Facebook App ID',
            type: 'string',
            fieldset: 'meta',
            group: 'social',
            description:
                'Facebook ID associated with your page. See https://bit.ly/3SdLEeF',
        },
        {
            name: 'facebookPage',
            title: 'Facebook Page',
            type: 'string',
            fieldset: 'meta',
            group: 'social',
        },
        {
            name: 'instagramBusinessProfile',
            title: 'Instagram Business Profile',
            type: 'string',
            fieldset: 'meta',
            group: 'social',
        },
        {
            name: 'googleAnalyticsId',
            title: 'Google Analytics ID',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
        {
            name: 'googleTagManagerId',
            title: 'Google Tag Manager ID',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
        {
            name: 'googlePlacesId',
            title: 'Google Places ID',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
        {
            name: 'googleSiteVerificationId',
            title: 'Google Site Verification ID',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
        {
            name: 'googleApiKey',
            title: 'Google API Key',
            type: 'string',
            fieldset: 'google',
            group: 'social',
        },
    ],
})
