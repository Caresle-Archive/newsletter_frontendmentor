/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-tomato': 'hsl(4, 100%, 67%)',
        'cs-tomato-back': 'hsla(4, 100%, 67%, 50%)',
        'cs-dark-slate-grey': 'hsl(234, 29%, 20%)',
        'cs-charcoal-grey': 'hsl(235, 18%, 26%)',
        'cs-grey': 'hsl(231, 7%, 60%)',
      },
      fontFamily: {
        'roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}

