/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
