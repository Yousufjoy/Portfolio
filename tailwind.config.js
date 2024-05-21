/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E97CBD",

      },
      fontFamily: {
        body: ["Poetsen One"],
        secondary: ["Fira Code"],
        podkova: ["Podkova"]

      },
    },
  },
  plugins: [],
};
