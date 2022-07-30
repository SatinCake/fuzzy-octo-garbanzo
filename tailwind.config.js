module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: { bluegray_900: "#373737", gray_200: "#ebebeb" },
      borderRadius: { radius60: "60px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
