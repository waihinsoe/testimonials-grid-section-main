/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //  Primary
        moderateViolet: "#8457A5",
        veryDarkGrayishBlue: "#354E69",
        veryDarkBlackishBlue: "#0E1D2B",
        White: "#FFFFFF",

        // Neutral
        lightGray: "#CCCCCC",
        lightGrayishBlue: "#BFE5F3",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
