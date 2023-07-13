/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGreen: "#495e57",
          yellow: "#f4ce14",
        },
        secondary: {
          lightPeach: "#ee9972",
          palePink: "#fbdabb",
        },
        highlight: { lightGray: "#edefee", darkGray: "#333333" },
      },
      fontSize: {
        56: "3.5rem",
        40: "2.5rem",
        36: "2.25rem",
        32: "2rem",
        24: "1.5rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        14: "0.875rem",
      },
    },
  },
  plugins: [],
};
