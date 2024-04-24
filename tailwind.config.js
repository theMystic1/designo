export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        peach: {
          600: "#e7816b",
          200: "#ffad9b",
          300: "#5d0202",
        },
        white: {
          0: "#ffffff",
          200: "#f1f3f5",
        },
        black: {
          100: "#1d1c1e",
          300: "#333136",
        },
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
