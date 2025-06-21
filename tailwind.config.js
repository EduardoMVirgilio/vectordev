export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#102040",
        text: "#F0F0F0",
        primary: "#F09000",
        secondary: "#40A0F0",
        success: "#30D050",
      },

      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
