module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SUIT", "Roboto", "sans-serif"],
        head: ["CalSans", "SUIT"],
      },
      colors: {
        dark: "#121619",
        darker: "#07090a",
        primary: "#0b2a70",
      },
      boxShadow: {
        card: "0px 10px 20px -4px rgba(0,10,0,0.48);",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
