/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#e5e5e5",
        secondary: "#ea580c",
      },
    },
  },
  plugins: [],
};
