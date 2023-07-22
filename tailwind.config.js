/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      borderRadius: {
        custom: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        custom1: "773px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
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
