/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        lightPurple: "#D0D6F9",
        lightWhite: "#FFFFFF",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        bellafair: ["Bellefair", "sans-serif"],
      },
      backgroundImage: {
        "home-mobile": "url('./src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('./src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
      },
      screens: {
        // md: "375px",
        // lg: "768px",
        // xl: "1440px",
        // md: "500px",
        // lg: "900px",
        // xl: "1750px",
        md: "768px",
        lg: "1440px",
        xl: "1750px",
      },
    },
  },
  plugins: [],
};
