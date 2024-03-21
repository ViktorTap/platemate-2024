import type { Config } from "tailwindcss";
import { Inter } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary-hex": "var(--background-primary-hex)",
        "background-secondary-hex": "var(--background-secondary-hex)",
        "button-primary-hex": "var(--button-primary-hex)",
        "button-hover-hex": "var(--button-hover-hex)",
        "button-active-hex": "var(--button-active-hex)",
        "paragraph-primary-hex": "var(--paragraph-primary-hex)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
