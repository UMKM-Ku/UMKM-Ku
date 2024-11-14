import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          50: "#FAFEFD",
          100: "#F4FBFA",
          150: "#E2F7F4",
          200: "#D1F1ED",
          300: "#BEE8E3",
          400: "#A9DBD6",
          500: "#8ECAC4",
          600: "#66B5AE",
          700: "#08857D",
          800: "#007770",
          900: "#007C74",
          950: "#1A3C39",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
