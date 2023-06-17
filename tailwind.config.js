const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "form-primary": "#010717",
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        wave: ["Titillium Web", "sans-serif"],
      },
      backgroundImage: {
        'bg-image': "url('./assests/background.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

