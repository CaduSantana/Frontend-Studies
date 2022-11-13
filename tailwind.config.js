/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rub-purple': '#9340ff',
        'rub-dark-purple': '#260e69',
        'rub-darker-blue': '#101728',
        'rub-dark-blue': '#162039'
      }
    },
  },
  plugins: [],
}
