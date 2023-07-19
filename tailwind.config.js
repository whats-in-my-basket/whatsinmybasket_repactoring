/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "darker" : "#191D24",
        "brighter" : "A6ADBA",
      },
    },
  },
  plugins: [],
}

