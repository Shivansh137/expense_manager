/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#6939b7' phonepay
        pink:'rgb(203,57,89)',
        darkpink:'rgb(57,32,38)',
        purple:'rgb(155,98,233)',
        green:'rgb(115,172,54)',
        orange:'rgb(236,148,18)',
        dark:'rgb(18,18,18)',
        dark2:'rgb(28,28,28)',
        dark3:'rgb(36,36,36)',
        light:'rgb(181,181,181)'
      }
    },
  },
  plugins: [],
}

