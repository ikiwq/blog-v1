/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration:{
        '400': '400ms',
        '600': '600ms'
      }
    },
    fontFamily: {
      handwrite: 'Satisfy',
      exo2: ['Exo 2', 'sans-serif'],
      Bebas: ['Bebas Neue', "cursive"],
      Shadows: ['Shadows Into Light', "cursive"],
      Fira: ['Fira Sans Condensed', "sans-serif"],
      Source: ['Source Code Pro', 'monospace'],
    }
  },
  plugins:[
    require('@tailwindcss/typography'),
  ]
}