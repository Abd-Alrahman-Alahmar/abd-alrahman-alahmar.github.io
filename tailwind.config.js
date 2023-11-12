/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 20s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      },
   
    },


    
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
