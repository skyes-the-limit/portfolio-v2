const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      sky: colors.sky,
      gray: colors.zinc,
      red: colors.red
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Zilla Slab', 'serif']
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    boxShadow: {
      low: 'var(--shadow-elevation-low)',
      med: 'var(--shadow-elevation-medium)',
      high: 'var(--shadow-elevation-high)'
    }
  },
  variants: {},
  plugins: []
}
