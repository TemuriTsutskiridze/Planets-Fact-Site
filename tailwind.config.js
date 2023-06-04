/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "90em",
      },

      fontFamily: {
        antionio: ["Antonio", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },

      styles: {
        "html, body": {
          margin: "0",
          padding: "0",
          boxSizing: "0",
        },
      },

      colors: {
        white: "#FFFFFF",
        space: "#070724",
        dark_gray: "#38384F",
        gray: "#838391",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC1A2",
        neptune: "#2D68F0",
      },
    },
  },
  plugins: [],
};
