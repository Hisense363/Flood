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
        custom1: "300px",
        custom2: "500px",
        custom3: "700px",
        custom4: "900px",
        smallPhone: "400px",
        xs: "480px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/pexels-shotbyrain-3989914.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-afacad)"],
      },
    },
  },
  plugins: [],
};
export default config;
