/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        surface: "#1E293B",
        primary: "#F97316",
        secondary: "#3B82F6",
        text: "#FFFFFF",
        muted: "#94A3B8",
      }
    },
  },
  plugins: [],
}