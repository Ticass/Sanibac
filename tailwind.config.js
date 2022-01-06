const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'clean-house': 'url(/src/assets/rico-assets/home-clean.png)',
      },
      colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
