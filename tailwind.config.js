// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on where your components are located
    './lib/**/*.{js,jsx,ts,tsx}', // Include lib if you're using Tailwind classes in your compiled components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
