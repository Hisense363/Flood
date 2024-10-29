import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/pexels-shotbyrain-3989914.jpg')",
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
