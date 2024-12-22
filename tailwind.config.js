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
      backgroundImage: {
        'degrader-skills': 'radial-gradient(76.04% 106.72% at 88.26% 29.29%, rgba(255, 255, 255, 0) 37.85%, #000000 45%)',
        'degrader-hero': 'radial-gradient(76.04% 106.72% at 88.26% 29.29%, rgba(255, 255, 255, 0) 37.85%, #000000 70%)',
        'gradient-radial': 'radial-gradient(134% 134% at 50% 50%, rgba(140, 105, 52, 0) 0%, rgba(242, 181, 90, 0.8) 100%)',
      },
      dropShadow: {
        'custom': '0px 0px 30px rgba(255, 215, 0, 0.25)',
      },
      textShadow: {
        custom: '0px 4px 4px #EEAC63',
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-textshadow'),
  ]
}

