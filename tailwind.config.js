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
        teal: {
          DEFAULT: '#1B3E48',
          deep: '#142F37',
          surface: '#224B57',
          light: '#2B5D6B',
        },
        brown: {
          DEFAULT: '#602E18',
          deep: '#472212',
          surface: '#73371D',
          light: '#864123',
        },
        terracotta: {
          DEFAULT: '#CD7E59',
          hover: '#BD6F4A',
          dark: '#A65D39',
          light: '#E29774',
          subtle: 'rgba(205, 126, 89, 0.15)',
        },
        cream: {
          DEFAULT: '#EFEADD',
          pure: '#F7F4EC',
          muted: '#DED8C7',
        },
        beige: {
          DEFAULT: '#EADFCD',
          light: '#F4ECE0',
          dark: '#D5C5AC',
        },
        warmgrey: {
          DEFAULT: '#7B7569',
          light: '#9B9487',
          dark: '#5C574E',
          subtle: 'rgba(123, 117, 105, 0.25)',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        heading: ['Fraunces', 'serif'],
        body: ['Alice', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wordSlideUp: {
          '0%': { transform: 'translateY(110%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'word-slide-up': 'wordSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      boxShadow: {
        'terracotta-glow': '0 4px 20px -2px rgba(205, 126, 89, 0.25)',
        'card-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.35)',
        'modal-dark': '0 25px 60px -12px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}
