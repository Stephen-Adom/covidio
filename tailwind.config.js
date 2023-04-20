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
        blueColor2: '#4168b0',
        blueColor3: '#3d60a2',
      },
      fontFamily: {
        lato: ['Lato'],
      },
    },
  },
  plugins: [],
};
