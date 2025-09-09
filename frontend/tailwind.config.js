/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        croma: {
          green: "#16a34a",
          dark: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
