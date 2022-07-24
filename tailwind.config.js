const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{jsx,tsx,ts}'],
  content: ['./src/**/*.{jsx,tsx,ts}'],
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
      serif: ['Zilla Slab', 'serif'],
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    }
  },
  variants: {},
  plugins: []
}
