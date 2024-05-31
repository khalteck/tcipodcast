/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      flare: "url('/images/flare2.png')",
      flare2: "url('/images/flare.png')",
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // primary: "#e5e5e5",
        primary: "#2a354e",
        secondary: "#ffc65b",
      },
      boxShadow: {
        custom: "7px 7px rgba(42, 53, 78, 0.8)",
        clicked: "2px 2px rgba(42, 53, 78, 0.8)",
      },
    },
  },
  plugins: [],
};
