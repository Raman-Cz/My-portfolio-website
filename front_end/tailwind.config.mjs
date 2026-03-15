/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "#FDFBF7",
        "bg-dark":    "#0F172A",
        text:         "#0F172A",
        "text-inv":   "#FDFBF7",
        "text-muted": "#475569",
        accent:       "#E8572A",
        "accent-2":   "#2563EB",
        border:       "#0F172A",
      },
      fontFamily: {
        sans:  ["Space Grotesk", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "brutal":    "6px 6px 0px #0F172A",
        "brutal-sm": "3px 3px 0px #0F172A",
        "brutal-lg": "10px 10px 0px #0F172A",
        "brutal-accent": "6px 6px 0px #E8572A",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
