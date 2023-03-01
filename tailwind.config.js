/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "100px", max: "767px" },
      md: { min: "768px", max: "1024px" },
      // md: "768px",
      lg: "1025px",
    },

    colors: {
      orange: "#D98E41",
      pink: "#FDEBF3",
      white: "white",
      purple: "#652d41",
      red: "#FF0000",
      moove: "#b84f61",
      slate: "#aa336a",
      black: "black",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      sofia: ["Princess Sofia", "cursive"],
    },

    extend: {
      keyframes: {
        menu: {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        skills: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        zoom: {
          "0%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "open-menu": "menu 0.5s ease-in-out forwards",
        "open-skills": "skills 2s ease-in-out infinite",
        button: "zoom 1s ease-in",
      },

      backgroundImage: {
        hero: 'url("../public/assests/home-bg.png")',
      },

      height: {
        128: "38rem",
        130: "40rem",
        200: "681px",
      },
      width: {
        128: "400px",
        125: "18rem",
        129: "31rem",
        130: "40rem",
      },
    },
  },
  plugins: [],
};
