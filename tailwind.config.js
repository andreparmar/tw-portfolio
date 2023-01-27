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
      colors: {
        dribbble: {
          DEFAULT: "#EA4C89",
          50: "#FDF0F5",
          100: "#FBDEE9",
          200: "#F7BAD1",
          300: "#F395B9",
          400: "#EE71A1",
          500: "#EA4C89",
          600: "#E31B68",
          700: "#B11551",
          800: "#7F0F3A",
          900: "#4D0923",
        },
      },
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
      backgroundImage: {
        radial:
          "radial-gradient(130.6% 130.6% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
