/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      "purple-primary": "#ad1fea",
      "orange-primary": "#f49f85",
      "blue-primary": "#4661e6",
      "blue-secondary": "#62bcfa",
      "gray-primary": "#373f68",
      "gray-secondary": "#3a4374",
      "gray-accent": "#647196",
      "white-primary": "#fff",
      "white-secondary": "#f2f4ff",
      "white-accent": "#f7f8fd",
    },
  },
  plugins: [],
};
