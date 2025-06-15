/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateRows: {
        dashboard: 'repeat(6, minmax(0, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

