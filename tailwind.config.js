/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"] ,
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('../images/img1.jpg')",
      },
      colors : {
        ayoub : "#777" ,
      }
    },
  },
  plugins: [],
}