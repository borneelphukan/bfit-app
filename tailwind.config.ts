/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato"],
    },
    fontWeight: {
      extrabold: 800,
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
    },
    extend: {
      height: {
        "1/4-screen": "75vh",
      },
      colors: {
        primary: {
          black: "#192126",
          green: "#BBF246",
        },
        secondary: {
          100: "#384046",
          200: "#5E6468",
          300: "#8B8F92",
        },
        purple: {
          100: "#A48AED",
          200: "#EAECFF",
        },
        red: {
          100: "#ED4747",
          200: "#FFEBEB",
        },
        yellow: {
          100: "#FCC46F",
          200: "#FFE8C6",
        },
        blue: {
          100: "#95CCE3",
          200: "#D8E6EC",
        },
        cover: "#F7F6FA",
      },
    },
  },
  plugins: [],
};
