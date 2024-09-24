/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': {
          DEFAULT: '#8B5CF6', // You can adjust this hex code to match your exact purple shade
          '600': '#7C3AED',
          '700': '#6D28D9',
        },
      },
    },
  },
  plugins: [],
}