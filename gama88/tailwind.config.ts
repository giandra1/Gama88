import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef6f0",
          100: "#d7ebdb",
          200: "#aed7b8",
          300: "#7fbd8f",
          400: "#4f9e65",
          500: "#2f8148",
          600: "#1f6837",
          700: "#19532c",
          800: "#164426",
          900: "#123820",
        },
        clay: {
          50: "#fff3ea",
          100: "#ffe2cb",
          200: "#ffc397",
          300: "#ff9f5c",
          400: "#ff7f2f",
          500: "#f6650f",
          600: "#db4e08",
          700: "#b53c09",
          800: "#92310e",
          900: "#772a0f",
        },
        cream: "#f8f6f0",
        ink: "#14231a",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(20, 35, 26, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
