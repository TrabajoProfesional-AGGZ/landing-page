/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#141414',
          border: '#262626'
        }
      }
    },
  },
  plugins: [],
}