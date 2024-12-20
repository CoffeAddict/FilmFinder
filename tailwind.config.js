/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Includes all pages
    './components/**/*.{js,ts,jsx,tsx}'  // Includes all components
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': 'url(/images/hero-background.png)',
      },
    },
  },
  plugins: [],
}