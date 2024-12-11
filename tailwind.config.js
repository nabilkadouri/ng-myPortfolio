/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    fontFamily: { 
      titre : ["Roboto"],
      texte : ["Open sans"]
    },
    extend: {
      colors:{
      bleu : "#00AAE2",
      nav: "#3A393C"
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

