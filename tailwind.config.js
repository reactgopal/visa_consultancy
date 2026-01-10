/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#032b66",
          700: "#021a4a",
          600: "#07407d",
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },

  plugins: [],
};
