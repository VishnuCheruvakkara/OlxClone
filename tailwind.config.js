/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#002f34',
        'custom-light': '#ebeeef',
      }
    },
  },
  plugins: [],
}

