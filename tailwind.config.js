/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chango: ["Chango", "cursive"],
        cinzel: ["Cinzel", "cursive"],
      },
    },
  },
  plugins: [lineClamp],
}

