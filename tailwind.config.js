/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], 
          serif: ['Playfair Display', 'serif'], 
        },
        colors: {
          cyber: {
            900: '#0F0A1E',
            800: '#1E1035',
            700: '#3A1D6E',
          },
          neon: {
            purple: '#7E3BFF',
          },
        },
      },
    },
    plugins: [],
  }
  