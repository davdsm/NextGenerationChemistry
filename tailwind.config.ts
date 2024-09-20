import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        main: "#474D78",
        second: "#86DFCC",
        "main-black": "#2D2E2E",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #86DFCC 0%, #486284 29%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
