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
