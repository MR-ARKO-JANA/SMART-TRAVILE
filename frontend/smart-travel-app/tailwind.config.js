/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F7FE",
        primary: "#1A56DB",
        sidebar: "#FFFFFF",
        card: "#FFFFFF",
        text: {
          main: "#111827",
          muted: "#6B7280",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      }
    },
  },
  plugins: [],
}
