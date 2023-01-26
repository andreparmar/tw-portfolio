/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      body: ["Satoshi", "system-ui", "sans-serif"],
      display: ["Clash Display", "system-ui", "sans-serif"],
    },
    maxWidth: {
      quote: "350px",
      article: "425px",
      contact: "335px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 70s linear infinite",
        marquee2: "marquee2 70s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      blur: {
        gradiant: "200px",
      },
    },
  },
  plugins: [],
};
