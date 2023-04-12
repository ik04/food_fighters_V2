/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        olive: "#808000",
        cream: "#F7F1E5",
        forest: "#ABC4AA",
        brown: "#A9907E",
        dyellow: "#F3DEBA",
        sandal: "#AA8B56",
        greene: "#90C8AC",
      },
    },
  },
  plugins: [],
};
