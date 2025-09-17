/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2f0ec",
        surface: "#ffffff",
        primary: "#31aaa3",
        ink: "#1f1d1b",
        deep: "#12141b"
      }
    }
  },
  plugins: []
};
