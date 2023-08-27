/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontWeight: {
      normal: 300,
      medium: 600,
      bold: 700,
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'ext-light': [
          'var(--Amer-Extended-Light)',
          ...defaultTheme.fontFamily.sans,
        ],
        'ext-reg': [
          'var(--Amer-Extended-Reg)',
          ...defaultTheme.fontFamily.sans,
        ],
        'ext-bold': [
          'var(--Amer-Extended-Bold)',
          ...defaultTheme.fontFamily.sans,
        ],
        'exp-light': [
          'var(--Amer-Expanded-Light)',
          ...defaultTheme.fontFamily.sans,
        ],
        'exp-reg': [
          'var(--Amer-Expanded-Reg)',
          ...defaultTheme.fontFamily.sans,
        ],
        'exp-bold': [
          'var(--Amer-Expanded-Bold)',
          ...defaultTheme.fontFamily.sans,
        ],
        plantin: ['plantin', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: ['tailwindcss-animate'],
}
