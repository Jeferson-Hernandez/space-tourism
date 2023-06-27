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
        "destination-mobile":
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./src/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('./src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('./src/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('./src/assets/technology/background-technology-desktop.jpg')",
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
