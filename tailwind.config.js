/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        panel: "#111114",
        line: "#26262b",
        gold: "#e9b872",
        goldsoft: "#f0cf9a",
      },
      fontFamily: {
        display: ['"Cinzel"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
