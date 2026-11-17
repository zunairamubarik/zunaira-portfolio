/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#12372A',
          forest: '#1F5942',
          light: '#2D7A5D',
          pale: '#EAF3EF',
        },
        gold: {
          champagne: '#C89B5A',
          light: '#E5C492',
          dark: '#A67B3E',
        },
        ivory: {
          DEFAULT: '#F7F5EF',
          soft: '#FAF8F4',
          dark: '#EBE7DF',
        },
        charcoal: {
          DEFAULT: '#171A18',
          light: '#2D322F',
          muted: '#525B56',
        },
        terracotta: {
          DEFAULT: '#C95C4A',
          dark: '#B04B3A',
          light: '#FDF1EF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'meqy': '0 4px 20px -2px rgba(18, 55, 42, 0.06), 0 2px 6px -1px rgba(18, 55, 42, 0.04)',
        'meqy-hover': '0 12px 30px -4px rgba(18, 55, 42, 0.12), 0 4px 12px -2px rgba(18, 55, 42, 0.06)',
        'meqy-modal': '0 25px 50px -12px rgba(18, 55, 42, 0.25)',
      },
      borderRadius: {
        'card': '16px',
      },
    },
  },
  plugins: [],
}
