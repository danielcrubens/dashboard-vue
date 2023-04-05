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
        orange: colors.orange
      }
    },
  },
  plugins: [],
}

