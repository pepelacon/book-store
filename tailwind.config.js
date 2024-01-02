/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pickedtype: "#daaa63",
        shelfcolor: "#EDD5BE",
        torec_color: "#f8f3ed",
      },
    },
  },
  plugins: [],
};
