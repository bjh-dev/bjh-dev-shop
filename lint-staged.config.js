module.exports = {
    // this will check Typescript files
    '**/*.(ts|tsx)': () => 'bun run tsc --noEmit',

    // This will lint and format TypeScript and JavaScript files
    '**/*.(ts|tsx|js)': filenames => [
        `bun run eslint --fix ${filenames.join(' ')}`,
        `bun run prettier --write ${filenames.join(' ')}`,
    ],

    // this will Format MarkDown and JSON
    '**/*.(md|json)': filenames =>
        `bun run prettier --write ${filenames.join(' ')}`,
}
