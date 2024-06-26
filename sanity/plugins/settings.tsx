/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/**
 * This plugin contains all the logic for setting up the singletons
 */

import type { DocumentDefinition, PluginOptions } from 'sanity'

import { apiVersion } from '@/sanity/env'
import { previewSecretId } from '@/sanity/lib/api'
import { PreviewPane } from '@/sanity/plugins/PreviewPane/PreviewPane'
import { PREVIEWABLE_DOCUMENT_TYPES } from '@/sanity/schemas/schema'

export const singletonPlugin = (types: string[]): PluginOptions => ({
    name: 'singletonPlugin',
    document: {
        // Hide 'Singletons (such as Home)' from new document options
        // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'global') {
                return prev.filter(
                    (templateItem: { templateId: string }) =>
                        !types.includes(templateItem.templateId)
                )
            }

            return prev
        },
        // Removes the "duplicate" action on the Singletons (such as Home)
        actions: (prev, { schemaType }) => {
            if (types.includes(schemaType)) {
                return prev.filter(({ action }) => action !== 'duplicate')
            }

            return prev
        },
    },
})

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (typeDefArray: DocumentDefinition[]) => {
    return (S: any) => {
        // Goes through all of the singletons that were provided and translates them into something the
        // Desktool can understand
        const singletonItems = typeDefArray.map(typeDef => {
            return S.listItem()
                .title(typeDef.title as string)
                .icon(typeDef.icon)
                .child(
                    S.editor()
                        .id(typeDef.name)
                        .schemaType(typeDef.name)
                        .documentId(typeDef.name)
                        .views([
                            // @todo: consider DRYing with `plugins/previewPane/index.tsx`
                            // Default form view
                            S.view.form(),
                            // Preview
                            ...(PREVIEWABLE_DOCUMENT_TYPES.includes(
                                typeDef.name
                            )
                                ? [
                                      S.view
                                          .component((props: any) => (
                                              <PreviewPane
                                                  previewSecretId={
                                                      previewSecretId
                                                  }
                                                  apiVersion={apiVersion}
                                                  {...props}
                                              />
                                          ))
                                          .title('Preview'),
                                  ]
                                : []),
                        ])
                )
        })

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter(
            (listItem: any) =>
                !typeDefArray.find(
                    singleton => singleton.name === listItem.getId()
                )
        )

        return S.list()
            .title('Content')
            .items([...singletonItems, S.divider(), ...defaultListItems])
    }
}
