const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        emerald:colors.emerald,
        gray: colors.blueGray,
        mute: {
          100: '#F1F1F1',
          200: '#E0E0E0',
          300: '#AAAAAA',
          400: '#999999',
          500: '#8A8A8A',
          600: '#757575',
          700: '#4A4A4A',
          800: '#242424',
          900: '#151515',
        }
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
