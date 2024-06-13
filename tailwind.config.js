/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      flare: "url('/images/flare2.png')",
      flare2: "url('/images/flare.png')",
      hero: "url('/images/pod3.jpg')",
      hero2: "url('/images/podcast.jpg')",
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sevillana: ["Sevillana", "cursive"],
    },
    extend: {
      colors: {
        primary: "#2a354e",
        primary1: "#481297",
        primary2: "#370680",
        secondary: "#fcea10",
      },
      boxShadow: {
        custom: "7px 7px rgba(42, 53, 78, 0.8)",
        clicked: "2px 2px rgba(42, 53, 78, 0.8)",
      },
    },
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "860px", // Medium screens (e.g., tablets)
      lg: "1200px", // Large screens (e.g., laptops)
      xl: "1480px", // Extra-large screens (e.g., desktops)
      xxl: "2036px", // 2x extra-large screens (e.g., large desktops)
    },
  },
  plugins: [],
};
