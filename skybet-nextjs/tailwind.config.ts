import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      colors: {
        "bg-darkest": "#0a0a0a",
        "bg-dark": "#121212",
        "bg-card": "#1e1e1e",
        "bg-hover": "#2a2a2a",
        "accent-red": "#c41e3a",
        "accent-red-light": "#e63950",
        "accent-gold": "#d4af37",
        "text-gray": "#888888",
        "border-dark": "#2a2a2a",
      },
    },
  },
  plugins: [],
} satisfies Config;
