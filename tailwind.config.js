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
        accent: {
          DEFAULT: 'var(--accent-blue)',
          light: 'var(--accent-blue-light)'
        },
        ink: 'var(--text-primary)',
        mid: '#C7D0E0',
        textGrey: 'var(--text-grey)',
        textSecondary: 'var(--text-secondary)',
        lightGrey: 'var(--light-grey)',
        bg: 'var(--bg)',
        bgSection: 'var(--bg-section)',
        bgCard: 'var(--bg-card)'
      }
    }
  },
  plugins: []
}
