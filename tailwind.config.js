/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atlassian-inspired colors (参考程度)
        brand: {
          DEFAULT: '#0052CC',
          50: '#E6F2FF',
          100: '#CCE5FF',
          500: '#0052CC',
          600: '#0747A6',
          700: '#003D99',
        },
      },
    },
  },
  plugins: [],
}
