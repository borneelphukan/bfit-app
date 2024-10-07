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
      lato: ["Lato", "sans-serif"],
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
          gray: {
            300: "#8B8F92",
            400: "#5E6468",
            500: "#384046",
          },
          purple: "#A48AED",
          red: "#ED4747",
          yellow: "#FCC46F",
          blue: "#95CCE3",
        },
      },
    },
  },
  plugins: [],
};
