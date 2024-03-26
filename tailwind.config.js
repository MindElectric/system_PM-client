/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 0.2s ease-out forwards',
      }
    },
  },
  plugins: [],
}

