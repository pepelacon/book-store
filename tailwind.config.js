/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "10px 10px 10px rgba(0, 0, 0, 0.75)",
      },
      colors: {
        pickedtype: "#daaa63",
        shelfcolor: "#EDD5BE",
        torec_color: "#f8f3ed",
      },
    },
  },
  plugins: [],
};
