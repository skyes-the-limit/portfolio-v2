const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{jsx,tsx,ts}'
  ],
  content: ['./src/**/*.{jsx,tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      sky: colors.sky,
      gray: colors.gray
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['serif']
    }
  },
  variants: {},
  plugins: []
}
