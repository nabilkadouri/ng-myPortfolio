/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    fontFamily: { 
      titre : ["Roboto"],
      texte : ["Open sans"]
    },
    extend: {
      colors:{
      bleu : "#00AAE2",
      header: "#3A393C"
      },
    }
  },
  plugins: [],
}

