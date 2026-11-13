import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nx: {
          bg: "#080611",
          panel: "#100B1D",
          primary: "#8B2BFF",
          neon: "#B45CFF",
          muted: "#AAA3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(139,43,255,.55), 0 0 60px rgba(139,43,255,.25)",
        "glow-sm": "0 0 14px rgba(139,43,255,.45)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: ".7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        drift: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(18px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        ping2: "ping2 1.8s ease-out infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
