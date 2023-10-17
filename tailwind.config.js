/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'french':'#8806CE',
        'dark':'#9400D3',
        'mid': '#8F00FF',
        'light':'#6600ff',
        'russian':'#32174D',
        'purple':'#0f0015'
      }
    },
  },
  plugins: [],
}