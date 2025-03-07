// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#f8f8f8',
      },
      // fontFamily: {
      //   sans: ['font-serif', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}