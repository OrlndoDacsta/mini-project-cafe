/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF902A",
        secondary: "#2F2105",
        tertery: "#F9D9AA",
      },
      height: {
        101: "750px",
      },
      borderRadius: {
        "4xl": "64px",
      },
      top: {
        102: "400px",
      },
    },
  },
  plugins: [],
};
