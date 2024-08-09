/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        full: 1,
      },
      boxShadow: {
        l: "2px 0px 10px 1px black",
      },
    },
  },
  plugins: [],
};
