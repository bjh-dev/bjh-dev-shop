module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },

    plugins: ['@typescript-eslint', 'simple-import-sort', 'json-files'],
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:security/recommended-legacy',
    ],

    rules: {
        'json-files/sort-package-json': 'error',
        'react/destructuring-assignment': 'off',
        'no-underscore-dangle': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': [2, { ignore: ['className'] }],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
}
