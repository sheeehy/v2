/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-green-white-orange":
          "linear-gradient(to right, green, white, orange)",
      }),
      transitionProperty: {
        bg: "background-image",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      animationDelay: {
        1: "1.5s",
        2: "2s",
        3: "2.5s",
      },

      boxShadow: {
        "outer-glow": "0 0 15px 5px rgba(0, 200, 0, .7)", // Customize the color and size of the outer glow as desired.
        glow: "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scroll: {
          "0%": { opacity: 0 },
          "10%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(15px)", opacity: 0 },
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      width: {
        "custom-larger": "700px",
      },
      fontWeight: {
        regular: 500,
        bold: 700,
        custom: 550,
      },
      colors: {
        "dark-blue": "#181e24",
        "dark-gray": "#242C35",
        "darkest-gray": "#542C75",
      },
      borderRadius: {
        custom: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        custom1: "773px",
        custom2: "21rem",
        xl: "1280px",
        "2xl": "1536px",
        "max-2xl": { max: "1499px" },
      },
      scrollBehavior: ["smooth"],
    },
  },

  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      boxShadow: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".select-none": {
          userSelect: "none",
        },
      };

      addUtilities(newUtilities, ["hover"]);
    },
  ],
};
