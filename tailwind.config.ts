import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
        },
        secondary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
        },
        dark: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        gray: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
        },
        light: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "gradient-glow": "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

