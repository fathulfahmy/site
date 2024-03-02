/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#053FFF",
        secondary: "#FFBB05",
        success: "#8DFF05",
        error: "#FF3A05",
      },
    },
  },
  plugins: [],
};
