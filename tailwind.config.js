/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": ["10rem", "1"],
        "11xl": ["11rem", "1"],
        "12xl": ["12rem", "1"],
        "13xl": ["13rem", "1"],
        "14xl": ["14rem", "1"],
        "15xl": ["15rem", "1"],
      },
    },
    plugins: [],
  },
};
