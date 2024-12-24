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
        blue: {
          DEFAULT: "#146af1",
          light: "#55d3f1",
          baby: "#7bd5ed",
          dark: "#3038d6",
        },
        pink: {
          DEFAULT: "#ff28c2",
          baby: "#ffb7de",
          dim: "#ffdddf",
        },
        yellowN: "#ffe84a",
        lightYellow: "#ffe57b",
        greenN: "#97e83f",
        mintGreen: "#00b35a",
        purpleE: "#9720f1",
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

