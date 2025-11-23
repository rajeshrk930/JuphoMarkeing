/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14B8A6",
          secondary: "#3B82F6"
        },
        ink: "#111111",
        mid: "#444444",
        accent: "#F59E0B"
      }
    }
  },
  plugins: []
}
