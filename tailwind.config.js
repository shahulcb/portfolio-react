/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBorderColor: "#292929",
        customTextColor: "#808080",
        customHoverColor: "#191919"
      },
      flexBasis: {
        "1/3-gap-6": "calc(33.3% - (2/3 * 1.5rem))",
        "1/2-gap-6": "calc(50% - (2/4 * 1.5rem))"
      }
    },
  },
  plugins: [],
}

