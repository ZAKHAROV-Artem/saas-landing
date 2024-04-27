import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
        xl: "1000px",
      },
    },
    colors: {
      "primary-gray": "#2b2b2b",
      "dark-gray": "#333333",
      green: "#009379",
      blue: "#3366ff",
      red: "#ff6250",
      yellow: "#ffdf90",
      "yellow-light": "#FDF5DF",
      purple: "#bfaff2",
      "light-gray": "#c4c4c4",
      white: "#ffffff",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
