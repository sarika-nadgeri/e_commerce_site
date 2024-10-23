/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 1px 3px 2px rgba(0, 0, 0, 1)', // Add your custom shadow
      }
    },
  },
  plugins: [],
}

