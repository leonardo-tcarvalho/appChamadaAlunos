/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        full: 1,
      },
      borderWidth:{
        1: '1px'
      }
    },
  },
  plugins: [],
};
