/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      screens: {
        '5xl': '1920px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
