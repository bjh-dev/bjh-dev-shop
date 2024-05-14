export function generateHtmlId(inputString: string): string {
    // Remove non-alphanumeric characters and replace spaces with hyphens
    const sanitizedString = inputString
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()

    // Remove consecutive hyphens
    return sanitizedString.replace(/-{2,}/g, '-')
}

interface NameType {
    name?: string
    lastName?: string
    secondLastName?: string
}

export function parseName(input: string) {
    const fullName = input || ''
    const result: NameType = {}

    if (fullName.length > 0) {
        const nameTokens =
            fullName.match(
                // eslint-disable-next-line security/detect-unsafe-regex
                /[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g
            ) || []

        if (nameTokens.length > 3) {
            result.name = nameTokens.slice(0, 2).join(' ')
        } else {
            result.name = nameTokens.slice(0, 1).join(' ')
        }

        if (nameTokens.length > 2) {
            result.lastName = nameTokens.slice(-2, -1).join(' ')
            result.secondLastName = nameTokens.slice(-1).join(' ')
        } else {
            result.lastName = nameTokens.slice(-1).join(' ')
            result.secondLastName = ''
        }
    }

    return result
}
