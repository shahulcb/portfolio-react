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
      }
    },
  },
  plugins: [],
}

