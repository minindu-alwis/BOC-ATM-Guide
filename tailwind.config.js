/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        insertCard: {
          '0%': { transform: 'translateY(-50px)' },
          '40%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' }
        }
      },
      animation: {
        'insert-card': 'insertCard 3s infinite'
      }
    },
  },
  plugins: [],
};