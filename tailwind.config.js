/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_color_1: "red",
        bg_color_2: "blue",
      },
     
    },
  },
  plugins: [],
}

