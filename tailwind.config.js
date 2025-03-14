/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      margin: "120px",
    },
    extend: {
      colors: {
        light: "#F6E2BC",
        light2: "#F1D384",
        dark: "#34242C",
        brogre: "#B09666",
        gold: "#E4B455",
        secondary: "#2C1E0E",
        abu: "#BCBCAC",
        btlor: "#4E3518",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
