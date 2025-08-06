/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F59E0B",
        accent: "#10B981",
        background: "#F3F4F6",
        text: "#111827",
        border: "#D1D5DB"
      },
      light: {
        100: "#F3F4F6",
      },
      dark: {
        100: "#111827",
      }
    },
  },
  plugins: [],
}

