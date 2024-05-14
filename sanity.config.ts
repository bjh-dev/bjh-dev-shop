/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { noteField } from 'sanity-plugin-note-field'

import { apiVersion, dataset, projectId, studioName } from '@/sanity/env'
import { previewSecretId } from '@/sanity/lib/api'
import { productionUrl } from '@/sanity/plugins/ProductionUrl'
import structure from '@/sanity/plugins/structure'
import { PREVIEWABLE_DOCUMENT_TYPES, schema } from '@/sanity/schemas/schema'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
    basePath: '/studio',
    name: studioName,
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            title: 'Content Editor',
            structure,
        }),
        // Display inline notes within your schemas
        noteField(),
        // Add the "Open preview" action
        productionUrl({
            apiVersion,
            previewSecretId,
            types: PREVIEWABLE_DOCUMENT_TYPES,
        }),
        // Add an image asset source for Unsplash
        unsplashImageAsset(),
        ...(isDev ? devOnlyPlugins : []),
    ],
})
