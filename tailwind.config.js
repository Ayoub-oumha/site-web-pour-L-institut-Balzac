/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}" , "./src/JavaScript/*.{html,js}"] ,
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('../images/img1.jpg')",
      },
      gap :{
        'gap-6' : '6px' ,
      },
      colors : {
        ayoub : "#777" ,
      }
    },
  },
  plugins: [],
}