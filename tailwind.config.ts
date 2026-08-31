import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA8",
          300: "#E4CA75",
          400: "#DAB548",
          500: "#D4AF37", // Primary Luxury Gold
          600: "#C5A059",
          700: "#A8842B",
          800: "#866723",
          900: "#5D4518",
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#996515",
          glow: "#FFD700",
        },
        obsidian: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#0F0F0F",
          800: "#121212",
          750: "#171717",
          700: "#1C1C1C",
          600: "#262626",
          500: "#333333",
        },
        champagne: {
          50: "#FDFAF6",
          100: "#FAF5EE",
          200: "#F4EADB",
          300: "#ECDCC5",
        }
      },
      fontFamily: {
        arabic: ["Cairo", "Tajawal", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #AA771C 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #FFE066 0%, #E5C158 50%, #C58F2E 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
        "dark-radial": "radial-gradient(ellipse at top, #1c1917 0%, #0a0a0a 70%)",
        "gold-radial": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
      },
      boxShadow: {
        "gold-sm": "0 0 10px rgba(212, 175, 55, 0.15)",
        "gold-md": "0 0 20px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 0 35px rgba(212, 175, 55, 0.35)",
        "gold-glow": "0 0 25px 2px rgba(255, 215, 0, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
