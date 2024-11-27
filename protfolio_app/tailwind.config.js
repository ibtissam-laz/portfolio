/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0089da",
        secondary: "#000690",
        pink: "#ff28c2",
        lightBlue: "#55d3f1",
        babyPink: "#ffb7de",
        dimPink: "#ffdddf",
        lightYellow: "#ffe57b",
        mintGreen: "#00b35a",
        purple: "#9720f1",
        blue: "#146af1",
        yellow: "#ffe84a",
        babyBlue: "#7bd5ed",
        green: "#97e83f",
        darkBlue: "#3038d6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

