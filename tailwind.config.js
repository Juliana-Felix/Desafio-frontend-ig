/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(31, 31, 31, 0.75)',
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
