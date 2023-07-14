/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Segoe-Regular",
        "main-semi-bold": "Segoe-Semi-Bold",
      },
      colors: {
        "custom-blue": "#1a59c8",
        "back-gray": "#F2F2F2",
        "back-blue": "#F0F8FF",
        "hover-blue": "#14459B",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

