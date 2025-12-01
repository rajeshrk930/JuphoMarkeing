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
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)'
        },
        ink: 'var(--black)',
        mid: '#333333',
        textGrey: 'var(--text-grey)',
        lightGrey: 'var(--light-grey)',
        bg: 'var(--bg)',
        bgSection: 'var(--bg-section)'
      }
    }
  },
  plugins: []
}
