/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html, css, js}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-background": "url('../../images/svg-img/pattern-background-desktop.svg')",
      },
      fontFamily: {
        font : ['font']
      }
    },
  },
  plugins: [],
};