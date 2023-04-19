/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueColor: '#4369b2',
        darkBlue: '#35548b',
      },
      fontFamily: {
        lato: ['Lato'],
      },
    },
  },
  plugins: [],
};
