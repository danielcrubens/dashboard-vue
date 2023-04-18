 const colors =require('tailwindcss/colors')
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: colors.orange,
        'dark-body': '#1F1D2B',
        'menu-icon': '#FF7551',
        'card':'#242730',
      },
      screens: {
        'desktop': {'min': '768px'}
      },
      width: {
        'desktop': '5rem',
      }, 
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

