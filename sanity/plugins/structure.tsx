/* eslint-disable @typescript-eslint/no-unused-vars */
import { Cog, Home } from 'lucide-react'
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-unused-vars
const structure = (S: any, context: any) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home')
                .icon(Home)
                .child(
                    S.editor().id('home').schemaType('home').documentId('home')
                ),
            S.listItem()
                .title('Settings')
                .icon(Cog)
                .child(
                    S.editor()
                        .id('settings')
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem: any) =>
                    !['home', 'settings', 'media.tag'].includes(
                        listItem.getId()
                    )
            ),
        ])

export default structure
