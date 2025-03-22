/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class', //Enables class-based dark mode 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInFromLeft 1s ease-out',
        slideInRight: 'slideInFromRight 1s ease-out',
        slideInTop: 'slideInFromTop 1.5s ease-out',
        slideInBottom: 'slideInFromBottom 1.5s ease-out',
      },
      colors: {
        customBlue: 'rgb(95, 95, 240)',
        primarycolor:'rgb(163, 102, 255)',
        secondarycolor:'rgb(148, 77, 255)',
        deepparple:'rgb(133, 51, 255)'
      }
    },
  },
  plugins: [],
};
