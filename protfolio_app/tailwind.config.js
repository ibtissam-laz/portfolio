/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
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
        PixelifySans: ["Pixelify+Sans", "sans-serif"],
        Jersey20: ["Jersey+20", "sans-serif"],
        Tiny5: ["Tiny5", "sans-serif"],
        Micro5: ["Micro+5", "sans-serif"]
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

